/**
 * Created by lxp on 2016/5/26.
 */
import {GET_TOKEN_SUCCESS,GET_TOKEN_FAILURE} from '../actions/token'

const initState = {};

export default function token(state = initState, action) {
    switch (action.type) {
        case GET_TOKEN_SUCCESS:
            return {...action.data};
        default:
            return state;
    }
}
