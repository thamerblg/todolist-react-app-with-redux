import {
  ADD_TASK,
  DELETE_ALL_TASKS,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  HIDE_ALERT,
  SET_EDIT_TASK,
  SHOW_ALERT,
  TOGGLE_COMPLETED_TASK,
} from "../Constants/actions-types";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
export const toggleCompletedTask = (id) => {
  return {
    type: TOGGLE_COMPLETED_TASK,
    payload: id,
  };
};
export const seteditTask = (task) => {
  return {
    type: SET_EDIT_TASK,
    payload: task,
  };
};
export const editTask = (task, desc) => {
  return {
    type: EDIT_TASK,
    payload: { task, desc },
  };
};
export const deleteAllTasks = () => {
  return {
    type: DELETE_ALL_TASKS,
  };
};

export const filterTasks = (type) => {
  return {
    type: FILTER_TASKS,
    payload: type,
  };
};
export const showAlert = (t, m) => {
  return {
    type: SHOW_ALERT,
    payload: { t, m },
  };
};
export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  };
};
