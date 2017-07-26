// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

/* mock data */
let courses = [
    "英语课",
    "数学课"
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

export const  loadCourses = ()=>
    new Promise(resolve =>setTimeout(()=>{resolve(courses);}, delay));
