/**
 * Created by lxp on 2016/5/4.
 */
import React , { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'

export class App extends Component {
    render() {
        return (
            <div>APP</div>
        )
    }
}

export class NoMatch extends Component {
    render() {
        return (
            <div>404</div>
        )
    }
}

/*
 class MyRouter extends Component {
 render() {
 return (
 <Router history={hashHistory}>
 <Route path="/" component={App}>
 <Route path="*" component={NoMatch}/>
 </Route>
 <Route path="/aaa" component={NoMatch}/>
 </Router>
 )
 }
 }
 export default MyRouter;*/
