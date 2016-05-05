const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const DELETE_ALL = 'DELETE_ALL';

export default function items(state = {status: 0}, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {status: 1};
        case DELETE_ITEM:
            return {status: 2};
        case DELETE_ALL:
            return {status: 3};
        default:
            return {status: 0};
    }
}
