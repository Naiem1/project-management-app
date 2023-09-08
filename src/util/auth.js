import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { findFromStorage, save } from './storage';

// Register
export const register = ({ username, email, password }) => {
  if (!username || !email || !password) {
    return { message: 'Input is Empty' };
  }

  const users = findFromStorage('users');

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const userData = {
    id: uuid(),
    username,
    email,
    password: hashPassword,
  };

  if (!users) {
    save('users', userData);
    return { message: 'User Register Successful', success: true };
  }

  let user = users.find((user) => user.email === email);

  if (user) {
    return { success: false, message: 'User Already Exist' };
  }

  save('users', userData);
  return { message: 'User Register Successful', success: true };
};

// Login
export const login = ({ email, password }) => {
  const users = findFromStorage('users');

  if (!users) {
    return { error: { success: false, message: 'User Not Found' } };
  }
  let user = users.find((user) => user.email === email);

  if (!user) {
    return { error: { success: false, message: 'Invalid Credential' } };
  }

  const isMatchPassword = bcrypt.compareSync(password, user.password);
  if (!isMatchPassword) {
    return { error: { success: false, message: 'Invalid Credential' } };
  }

  delete user.password;
  // const token = jwt.sign(user, 'secret_token');

  return { user, message: 'Login successful', success: true };
};
