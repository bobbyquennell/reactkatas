import * as types from '../actions/actionTypes';

export function asyncStatusReducer(state=0, action){
  let value = state;
  if(action.type === types.ASYNC_COMPLETE || action.type === types.ASYNC_FAIL){
    return value > 0 ? value-1 : value;
  }
  if(action.type === types.ASYNC_START){
    return value + 1;
  }
  else{
    return state;
  }
}
