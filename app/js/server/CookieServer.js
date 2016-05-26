/**
 * Created by lxp on 2016/5/13.
 */
import cookie from 'react-cookie'
import { cookieDomain } from '../config'
export function setCookie(name, value) {
    cookie.save(name, value, cookieDomain)
}
export function getCookie(name) {
    return cookie.load(name)
}
export function removeCookie(name) {
    cookie.remove(name, cookieDomain)
}

export default {
    setCookie,
    getCookie,
    removeCookie
}