// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

/* mock data */
let courses = [
  {
    id: "comtemporary-english-writing", //use human readable string as id, which is ideal for friendly url. question：how about one product page with multiple friendly URLs?
    title: "Comtemporary English Writing",
    address: 'Main Building Room 401',
    date: '2017-08-01',
    time: '12:50',
    lecturerId: '3'
  }, {
    id: "further-mathematics",
    title: "Further Mathematics",
    address: 'Main Building Room 402',
    date: '2017-08-02',
    time: '2:00pm',
    lecturerId: '1'
  }
];
/* simulate api delay */
const delay = 2000;

// export  function loadCourses(){
//     return  new Promise(
//      (resolve, reject) =>{
//          setTimeout(()=>{resolve(courses);}, delay);
//         //  let error = new Error('out of power');
//         //  reject(error);
//      }
//     );
// }

export const loadCourses = () => new Promise(resolve => setTimeout(() => {
  resolve(courses);
}, delay));


/*
  // --- the  tidy and clean way to write a promise
export const createCourse = (course) => new Promise(resolve => setTimeout(() => {
  resolve(course.title);
}, delay));

*/

// --- the  more readable way to write a promise
export  function createCourse(course){
  return new Promise((resolve, reject) => {
    // the mock up of backend database operation
    setTimeout(() => {
      //mock up server side validation:
      if(course.title.length < 5){
        reject(new Error('title length should be more than 5 charachters !'));
      }
      //generate id for a new course
      const newId = course.title.replace(/\s+/g, '-').toLowerCase();
      //https://stackoverflow.com/questions/1983648/replace-space-with-dash-and-make-all-letters-lower-case-using-javascript
      course.id = newId;
      resolve(course.id);
    }, delay);
    //  let error = new Error('out of power');
    //  reject(error);
  });
}

export  function updateCourse(course){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //mock up server side validation:
      if(course.title.length < 5){
        reject(new Error('title length should be more than 5 charachters !'));
      }
      resolve(course);
    }, delay);
    //  let error = new Error('out of power');
    //  reject(error);
  });
}
