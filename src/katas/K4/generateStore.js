//provide method to create a store, for more details, refer to :http://redux.js.org/docs/api/createStore.html

import {createStore, applyMiddleware, compose} from 'redux';
import {courseReducer} from './reducers/courseReducer';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
//initialState is convenient for server side rendering.
export default function generateStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//https://github.com/zalmoxisus/redux-devtools-extension
    return createStore(
        courseReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, immutableStateInvariantMiddleware()))
    );
}
