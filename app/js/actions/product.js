/**
 * Created by lxp on 2016/5/27.
 */
import ProductServer from '../server/ProductServer'
import config from '../config';

const Path = 'product';

export const GET_PRODUCT_LIST = `${Path}/GET_PRODUCT_LIST`;
export const GET_PRODUCT_LIST_REQUEST = `${Path}/GET_PRODUCT_LIST_REQUEST`;
export const GET_PRODUCT_LIST_SUCCESS = `${Path}/GET_PRODUCT_LIST_SUCCESS`;
export const GET_PRODUCT_LIST_FAILURE = `${Path}/GET_PRODUCT_LIST_FAILURE`;

export function getList(pageNum) {
    return {
        type: GET_PRODUCT_LIST,
        promise: ProductServer.getList(0, 100)
    }
}