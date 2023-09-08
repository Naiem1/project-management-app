import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { findFromStorage, save } from './storage';

export const register = ({ username, email, password }) => {
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

  return { user, message: 'Login successful', success: true };
};
