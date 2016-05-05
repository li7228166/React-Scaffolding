const initialFilterItem = '';
const FILTER_ITEM = 'FILTER_ITEM';

export default function filter(state = initialFilterItem, action) {
    switch (action.type) {
        case FILTER_ITEM:
            return action.filterItem;
        default:
            return state
    }
}
