//provide method to create a store, for more details, refer to :http://redux.js.org/docs/api/createStore.html

import {createStore, applyMiddleware} from 'redux';
import {courseReducer} from './reducers/courseReducer';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
//initialState is convenient for server side rendering.
export default function generateStore(initialState){
    return createStore(
        courseReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        initialState,
        applyMiddleware(immutableStateInvariantMiddleware)
    );
}
