//provide method to create a store, for more details, refer to :http://redux.js.org/docs/api/createStore.html

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
//initialState is convenient for server side rendering.
export default function generateStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
