// first: actions are just objects
//second: below is just a list of convenient functions to produce the action objects

import * as types from './actionTypes';
import * as api from '../api/lecturerApi';
import { asyncStart, asyncComplete } from './asyncActions';


export const loadLecturers = () => {
  return function(dispatch) {
    dispatch(asyncStart());
    return api.loadLecturers().then((lecturers) => {
      dispatch(loadLecturersSuccess(lecturers));
      dispatch(asyncComplete());
    }).catch((error) => {
      throw(error);
    });
  };
};

export const loadLecturersSuccess = (lecturers) => {
  return {type: types.LOAD_LECTURERS_SUCCESS, lecturers};
};
