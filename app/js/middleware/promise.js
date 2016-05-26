/**
 * Created by lxp on 2016/5/12.
 */
export default function promiseMiddleware() {
    return next => action => {
        const { promise, type, ...rest } = action;

        if (!promise) return next(action);

        const SUCCESS = type + '_SUCCESS';
        const REQUEST = type + '_REQUEST';
        const FAILURE = type + '_FAILURE';
        next({...rest, type: REQUEST});
        return promise.then(data=> {
            next({...rest, data: data, type: SUCCESS});
        }, data=> {
            next({...rest, data: data, type: FAILURE});
        })
    }
}
