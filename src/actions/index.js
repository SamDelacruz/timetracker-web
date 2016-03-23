import extend from 'extend';
export const ADD_TASK = 'add_task';
export const SET_TASKS = 'set_tasks';

// Non-mutative function for adding a created_at timestamp property
// to any object.
function addCreatedAt(obj) {
  return extend({created_at : Date.now()}, obj);
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: addCreatedAt(task)
  }
}

export function setTasks(tasks = []) {
  return {
    type: SET_TASKS,
    payload: tasks.map(addCreatedAt)
  }
}
