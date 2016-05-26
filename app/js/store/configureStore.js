import { createStore, applyMiddleware, compose } from 'redux';
import middleware from '../middleware';
import reducer from '../reducers';
import DevTools from '../components/DevTools';

function configureStore(initialState, history) {
    let finalCreateStore;
    if (__DEVELOPMENT__ && __DEVTOOLS__) {
        finalCreateStore = compose(
            applyMiddleware(...middleware),
            DevTools.instrument()
        )(createStore);
    } else {
        finalCreateStore = compose(
            applyMiddleware(...middleware)
        )(createStore);
    }

    return finalCreateStore(reducer, initialState);
}

export default configureStore;
