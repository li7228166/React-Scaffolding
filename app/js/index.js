/**
 * Created by lxp on 2016/5/3.
 */
import React , { Component } from 'react';
import { render } from 'react-dom';
import { Router , browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';//解决TOUCH设备上300ms延迟

import configureStore from './store/configureStore';
import routers from './routers';
import DevTools from './components/DevTools';

import '../style/common.css'

injectTapEventPlugin();

window.__INITIAL_STATE__ = {
    number: 10
};

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, browserHistory);

if (__DEVELOPMENT__ && __DEVTOOLS__) {
    setTimeout(() => render(
        <DevTools store={store}/>,
        window.document.body.appendChild(document.createElement('div'))
    ), 20)
}

export default class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    {routers}
                </Router>
            </Provider>
        );
    }
};

render(<Index/>, document.getElementById('app'));
