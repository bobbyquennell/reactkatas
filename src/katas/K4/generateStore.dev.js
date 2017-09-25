//provide method to create a store, for more details, refer to :http://redux.js.org/docs/api/createStore.html

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
//initialState is convenient for server side rendering.
export default function generateStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //https://github.com/zalmoxisus/redux-devtools-extension
  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk, immutableStateInvariantMiddleware())));
}
