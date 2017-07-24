
//actually, a reducer is a function that returns a part of the store state
export default function CourseReducer(state =[], action){
    switch (action.type) {
    case "CREATE_COURSE":
        return [...state,
            action.course
            //Object.assign({}, action.course)
        ];
    default:
        return state;

    }
}
