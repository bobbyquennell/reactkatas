// first: actions are just objects
//second: below is just a list of convenient functions to produce the action objects

import * as types from './actionTypes';
import * as api from '../api/courseApi';
import { asyncStart, asyncComplete, asyncFail } from './asyncActions';
// export function createCourse(course) {
//   return {type: types.CREATE_COURSE, course};
// }

export const loadCourses = () => {
  return function(dispatch) {
    dispatch(asyncStart());
    return api.loadCourses().then((courses) => {
      dispatch(asyncComplete());
      dispatch(loadCoursesSuccess(courses));

    }).catch((error) => {
      dispatch(asyncFail());
      throw(error);
    });
  };
};

export const loadCoursesSuccess = (courses) => {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
};

export const createCourse = (course) => {
  return function(dispatch) {
    dispatch(asyncStart());
    return api.createCourse(course).then((id) => {
      course.id = id;
      dispatch(asyncComplete());
      dispatch(createCourseSuccess(course));
    }).catch((error) => {
      dispatch(asyncFail());
      throw(error);
    });
  };
};

export const createCourseSuccess = (course) => {
  return {type: types.CREATE_COURSE_SUCCESS, course};
};

export const updateCourse = (course) => {
  return function(dispatch) {
    dispatch(asyncStart());
    return api.updateCourse(course).then((course) => {
      dispatch(asyncComplete());
      dispatch(updateCourseSuccess(course));
    }).catch((error) => {
      dispatch(asyncFail());
      throw(error);
    });
  };
};

export const updateCourseSuccess = (course) => {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
};
