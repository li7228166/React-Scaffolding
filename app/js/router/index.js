/**
 * Created by lxp on 2016/5/4.
 */
import React , { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'

class App extends Component {
    render() {
        return (
            <div>APP</div>
        )
    }
}

class NoMatch extends Component {
    render() {
        return (
            <div>404</div>
        )
    }
}

class MyRouter extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="aa" component={NoMatch}/>
                </Route>
            </Router>
        )
    }
}
export default MyRouter;