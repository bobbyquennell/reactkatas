import {createStore, applyMiddleware} from 'redux';
import CourseReducer from '../reducers/CourseReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

//initialState is convenient for serverside rendering
export default function configureStore(initialState){
    return createStore(
        CourseReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}
