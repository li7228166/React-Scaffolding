import {INCREASE,REDUCE} from '../actions/number'

export default function number(state = 0, action) {
    switch (action.type) {
        case INCREASE:
            return (state + action.num);
        case REDUCE:
            return (state - action.num);
        default:
            return state;
    }
}
