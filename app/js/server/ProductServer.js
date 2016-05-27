/**
 * Created by lxp on 2016/5/11.
 */
import Config from '../config';
import {send} from './BasiceServer'

export const getList = (offset, limit)=> {
    var api = "public/province/list";
    return send(api, {}, 'GET');
};

export default {
    getList
}