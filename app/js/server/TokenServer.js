/**
 * Created by lxp on 2016/5/11.
 */
import Config from '../config';
import {send} from './BasiceServer'

export const getData = (username, password)=> {
    var api = "/oauth/token";
    var data = {
        "grant_type": "password",
        "client_id": "my-trusted-client-with-secret",
        "client_secret": "somesecret",
        "username": username,
        'password': password
    };
    return send(api, data);
};

export default {
    getData
}