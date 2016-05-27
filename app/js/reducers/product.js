/**
 * Created by lxp on 2016/5/27.
 */
import {GET_PRODUCT_LIST_SUCCESS} from '../actions/product'

const initState = {};

export default function token(state = initState, action) {
    switch (action.type) {
        case GET_PRODUCT_LIST_SUCCESS:
            return {...action.data};
        default:
            return state;
    }
}
