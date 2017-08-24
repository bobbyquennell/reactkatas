// first: actions are just objects
//second: below is just a list of convenient functions to produce the action objects

import * as types from './actionTypes';
import * as api from '../api/courseApi';
// export function createCourse(course) {
//   return {type: types.CREATE_COURSE, course};
// }

export const loadCourses = () => {
  return function(dispatch) {
    return api.loadCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch((error) => {
      throw(error);
    });
  };
};

export const loadCoursesSuccess = (courses) => {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
};

export const createCourse = (course) => {
  return function(dispatch) {
    return api.createCourse(course).then((id) => {
      course.id = id;
      dispatch(createCourseSuccess(course));
    }).catch((error) => {
      throw(error);
    });
  };
};

export const createCourseSuccess = (course) => {
  return {type: types.CREATE_COURSE_SUCCESS, course};
};

export const updateCourse = (course) => {
  return function(dispatch) {
    return api.updateCourse(course).then((course) => {
      dispatch(updateCourseSuccess(course));
    }).catch((error) => {
      throw(error);
    });
  };
};

export const updateCourseSuccess = (course) => {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
};
