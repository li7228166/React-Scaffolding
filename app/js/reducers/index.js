import { combineReducers } from 'redux'
import number from './number'
import token from './token'

const rootReducer = combineReducers({
    number,
    token
});
export default rootReducer;
