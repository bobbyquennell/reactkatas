import * as types from './actionTypes';

export const asyncComplete = function(){
  return {
    type: types.ASYNC_COMPLETE
  };
};

export const asyncStart = function(){
  return {
    type: types.ASYNC_START
  };
};
