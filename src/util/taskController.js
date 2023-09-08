import { v4 as uuid } from 'uuid';
import { findFromStorage, save } from './storage';

export const postTaskToDB = ({
  title,
  description,
  dueDate,
  priority,
  status,
  assignedTo,
  user,
}) => {
  if (!title || !description || !dueDate || !priority || !status) {
    return { error: true, message: 'Invalid Input' };
  }

  console.log('taskController>>', {
    title,
    description,
    dueDate,
    priority,
    status,
    assignedTo,
    user,
  })

  const users = findFromStorage('users');
  if (!users) return false;

  const existUser = users?.find((user) => user.email === user?.email);
  console.log('user-check>>', existUser);

  if (!existUser) {
    return { error: true, message: 'Forbidden Access' };
  }

  const task = {
    id: uuid(),
    title,
    description,
    dueDate,
    priority,
    status,
    user,
    assignedTo,
  };

  save('tasks', task);

  return { created: true, task  };
};




export const getTaskFromDB = (userId) => {
  console.log('userId', userId);
  if (!userId) {
    return { message: 'UserId is Missing' };
  }

  const users = findFromStorage('users');
  const user = users?.find(user => user.id === userId);

  if (!user) {
    return { message: 'Invalid' };
  }

  const tasks = findFromStorage('tasks');
  const task = tasks.filter(task => task.user.id === userId);
  if (!task) {
    return { error: true, message: 'Task not found' };
  }

  return task;
}
