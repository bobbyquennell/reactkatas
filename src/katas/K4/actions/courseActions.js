// first: actions are just objects
//second: below is just a list of convenient functions to produce the action objects

import * as types from './actionTypes';

export  function createCourse(course){
    return{
        type: types.CREATE_COURSE,
        course
    };
}
