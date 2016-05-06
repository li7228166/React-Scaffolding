/**
 * Created by lxp on 2016/5/6.
 */
export const INCREASE = 'INCREASE';
export const REDUCE = 'REDUCE';

export function increase(num) {
    return {
        type: INCREASE,
        num
    }
}
export function reduce(num) {
    return {
        type: REDUCE,
        num
    }
}
