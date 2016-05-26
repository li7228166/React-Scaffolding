/**
 * Created by lxp on 2016/5/26.
 */
import TokenServer from '../server/TokenServer'
import config from '../config';

const Path = 'token';

export const GET_TOKEN = `${Path}/GET_TOKEN`;
export const GET_TOKEN_REQUEST = `${Path}/GET_TOKEN_REQUEST`;
export const GET_TOKEN_SUCCESS = `${Path}/GET_TOKEN_SUCCESS`;
export const GET_TOKEN_FAILURE = `${Path}/GET_TOKEN_FAILURE`;

export function getToken(pageNum) {
    return {
        type: GET_TOKEN,
        promise: TokenServer.getData('lxp', 'caiejia12316')
    }
}