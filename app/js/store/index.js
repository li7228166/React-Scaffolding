import { createStore, applyMiddleware, compose } from 'redux';
import middleware from '../middleware';
import reducer from '../reducers';
import DevTools from '../components/DevTools';

let finalCreateStore;

if (__DEVELOPMENT__ && __DEVTOOLS__) {
    finalCreateStore = compose(
        applyMiddleware.apply(this, middleware),
        DevTools.instrument()
    )(createStore);
} else {
    finalCreateStore = compose(
        applyMiddleware.apply(this, middleware)
    )(createStore);
}

export const store = finalCreateStore(reducer);
