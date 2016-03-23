import {ADD_TASK, SET_TASKS} from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...state];
    case SET_TASKS:
      return action.payload;
  }
  return state;
}
