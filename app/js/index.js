/**
 * Created by lxp on 2016/5/3.
 */
import React , { Component } from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';//解决TOUCH设备上300ms延迟
import DevTools from './containers/DevTools';
import { Provider } from 'react-redux'
import { store } from './store';
import MyRouter,{App,NoMatch} from './router';
import { Router, Route, hashHistory } from 'react-router'

injectTapEventPlugin();
if (__DEVELOPMENT__ && __DEVTOOLS__) {
    setTimeout(() => render(
        <DevTools store={store}/>,
        window.document.body.appendChild(document.createElement('div'))
    ), 20)
}

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="aaa" component={App}/>
            </Route>
            <Route path="/bbb" component={NoMatch}/>
        </Router>
    </Provider>
), document.getElementById('app'));
