// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

/* mock data */
let courses = [
    {
        id:"comtemporary-english-writing",//use human readable string as id, which is ideal for friendly url. question：how about one product page with multiple friendly URLs?
        title: "Comtemporary English Writing",
        address: 'Main Building Room 401',
        date: '2017-08-01',
        time: '2:00pm',
        lecturer: 'Tommy Johnes'
    },
    {
        id: "further-mathematics",
        title: "Further Mathematics",
        address: 'Main Building Room 402',
        date: '2017-08-02',
        time: '2:00pm',
        lecturer: 'Tommy Johnes'
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

export const  loadCourses = ()=>
    new Promise(resolve =>setTimeout(()=>{resolve(courses);}, delay));
