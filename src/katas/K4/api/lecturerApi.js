// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

/* mock data */
let lecturers = [
  {
    id: "1", //use human readable string as id, which is ideal for friendly url. question：how about one product page with multiple friendly URLs?
    name: 'Tommy Johnes'
  },
  {
    id: "2", //use human readable string as id, which is ideal for friendly url. question：how about one product page with multiple friendly URLs?
    name: 'Bobby Wang'
  },
  {
    id: "3", //use human readable string as id, which is ideal for friendly url. question：how about one product page with multiple friendly URLs?
    name: 'David Stephen'
  },
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

export const loadLecturers = () => new Promise(resolve => setTimeout(() => {
  console.log(lecturers);
  resolve(lecturers);
}, delay));
