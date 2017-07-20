import {createStore} from 'redux';
import courseReducer from '../reducers/CourseReducer';

//initialState is convenient for serverside rendering
export default function configureStore(initialState){
    return createStore(
        courseReducer,
        initialState
    );
}
