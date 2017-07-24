import {createStore, applyMiddleware} from 'redux';
import CourseReducer from '../reducers/CourseReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

//initialState is convenient for serverside rendering
export default function configureStore(initialState){
    return createStore(
        CourseReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(reduxImmutableStateInvariant()
        )
    );
}
