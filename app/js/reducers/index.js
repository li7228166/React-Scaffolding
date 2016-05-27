import { combineReducers } from 'redux'
import number from './number'
import token from './token'
import product from './product'

const rootReducer = combineReducers({
    number,
    token,
    product
});
export default rootReducer;
