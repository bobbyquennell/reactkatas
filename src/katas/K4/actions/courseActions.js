// first: actions are just objects
//second: below is just a list of convenient functions to produce the action objects
export  function createCourse(course){
    return{
        type:"CREATE_COURSE",
        course
    };
}
