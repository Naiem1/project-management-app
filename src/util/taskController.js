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
    return [];
  }

  console.log('taskController>>', {
    title,
    description,
    dueDate,
    priority,
    status,
    assignedTo,
    user,
  });

  const users = findFromStorage('users');
  if (!users) return false;

  const existUser = users?.find((user) => user.email === user?.email);
  console.log('user-check>>', existUser);

  if (!existUser) {
    return [];
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

  return { created: true, task };
};

export const getTaskFromDB = (userId) => {
  console.log('userId', userId);
    // if (!userId) {
    //   return [];
    // }

  const users = findFromStorage('users');
  const user = users?.find((user) => user.id === userId);

  if (!user) {
    return [];
  }

  const tasks = findFromStorage('tasks');
  const task = tasks.filter((task) => task.user.id === userId);
  if (!task) {
    return [];
  }

  console.log(task);

  return task;
};

export const deleteTaskFromDB = (id) => {
  const tasks = findFromStorage('tasks');
  if (!tasks) {
    return false;
  }

  console.log('controller>>', tasks);
  console.log('id>>', id);

  const task = tasks.filter((task) => task.id !== id);
  if (!task) {
    return false;
  }

  console.log('controller-filterTask', task)

  // save('tasks', task);
  localStorage.setItem('tasks', JSON.stringify(task));

};
