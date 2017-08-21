// first: actions are just objects
//second: below is just a list of convenient functions to produce the action objects

import * as types from './actionTypes';
import * as api from '../api/lecturerApi';


export const loadLecturers = () => {
  return function(dispatch) {
    return api.loadLecturers().then((lecturers) => {
      dispatch(loadLecturersSuccess(lecturers));
    }).catch((error) => {
      throw(error);
    });
  };
};

export const loadLecturersSuccess = (lecturers) => {
  return {type: types.LOAD_LECTURERS_SUCCESS, lecturers};
};
