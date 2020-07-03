import counterReducer from './counter';
import loggedReducer from './isLogged';
import jobReducer from './job';
import {combineReducers} from 'redux';


// Combining the reducers
const allReducers = combineReducers({
    myCount: counterReducer,
    isLogged: loggedReducer,
    job: jobReducer
})

export default allReducers;