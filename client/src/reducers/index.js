import {combineReducers} from 'redux';
import userReducer from './user';

const reducer = combineReducers({
    userReducer: userReducer
});

export default reducer;