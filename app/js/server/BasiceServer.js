/**
 * Created by lxp on 2016/5/11.
 */
require('es6-promise').polyfill();
import {Promise} from 'es6-promise';
import fetch from 'isomorphic-fetch'
import {host} from '../config';
import cookie from 'react-cookie';
import {getCookie} from '../server/CookieServer'
import {projectName} from '../config'

let params = function (data) {
    var temp = [];
    for (var key in data) {
        temp.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return temp.join('&');
};

export function send(api, data, method = 'POST') {
    var option = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    };

    if (getCookie(`${projectName}Token`))
        option.headers['Authorization'] = "Bearer " + getCookie(`${projectName}Token`);

    if (data)
        option.body = params(data);


    return new Promise((resolve, reject)=> {
        fetch(host + api, option)
            .then(response=> {
                response.json().then(function (json) {
                    if (response.status >= 200 && response.status < 300) {
                        resolve(json);
                    } else {
                        reject(json);
                    }
                })
            })
            .catch(error => {
                reject(error);
            });
    });

}