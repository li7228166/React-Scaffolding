/**
 * Created by lxp on 2016/5/3.
 */
import React , { Component } from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';//解决TOUCH设备上300ms延迟
import DevTools from './containers/DevTools';
import { Provider } from 'react-redux'
import { store } from './store';
import MyRouter from './router';

injectTapEventPlugin();
if (__DEVELOPMENT__ && __DEVTOOLS__) {
    setTimeout(() => render(
        <DevTools store={store}/>,
        window.document.body.appendChild(document.createElement('div'))
    ), 10)
}

render((
    <div>
        <Provider store={store}>
            <MyRouter />
        </Provider>
    </div>
), document.getElementById('app'));

