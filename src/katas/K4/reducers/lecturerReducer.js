// reducer is a function, that take old state and action ,then return new state based on the action types.
//reducer returns the store's state, or reutrns a part of the store's state, if the store has multiple reducers.

import * as types from '../actions/actionTypes';
export function lecturerReducer(state = [], action) {
  switch (action.type) {
  case types.LOAD_LECTURERS_SUCCESS:
    return action.lecturers;
  default:
    return state;
  }
}
