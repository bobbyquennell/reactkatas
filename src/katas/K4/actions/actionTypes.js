//using constants instead of pure strings to define the actions types.
// by doing so, we can avoid typos and there a lot other benefits
//see : http://redux.js.org/docs/recipes/ReducingBoilerplate.html
//for details
export const CREATE_COURSE = "CREATE_COURSE";
export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";

export const LOAD_LECTURERS_SUCCESS = "LOAD_LECTURERS_SUCCESS";

export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";

export const ASYNC_COMPLETE = "ASYNC_COMPLETE";
export const ASYNC_START = "ASYNC_START";
export const ASYNC_FAIL = "ASYNC_FAIL";
