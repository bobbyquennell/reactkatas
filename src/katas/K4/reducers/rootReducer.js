// reducer is a function, that take old state and action ,then return new state based on the action types.
//reducer returns the store's state, or reutrns a part of the store's state, if the store has multiple reducers.

import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer';
import { lecturerReducer } from './lecturerReducer';

export default  combineReducers({
  courseReducer,
  lecturerReducer
});
