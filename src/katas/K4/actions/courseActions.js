// first: actions are just objects
//second: below is just a list of convenient functions to produce the action objects

import * as types from './actionTypes';
import * as api from '../api/courseApi';
export function createCourse(course) {
  return {type: types.CREATE_COURSE, course};
}

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

export const saveCourse = (course) => {
  return function(dispatch) {
    return api.saveCourse(course).then((id) => {
      course.id = id;
      dispatch(saveCourseSuccess(course));
    }).catch((error) => {
      throw(error);
    });
  };
};

export const saveCourseSuccess = (course) => {
  return {type: types.SAVE_COURSE_SUCCESS, course};
};
