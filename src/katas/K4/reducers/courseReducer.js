// reducer is a function, that take old state and action ,then return new state based on the action types.
//reducer returns the store's state, or reutrns a part of the store's state, if the store has multiple reducers.


export function courseReducer(state = [], action){
    switch (action.type) {
    case "CREATE_COURSE":
        return [...state, action.course];

    default:
        return state;
    }
}
