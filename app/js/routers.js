/**
 * Created by lxp on 2016/5/4.
 */
import React , { Component } from 'react';
import { Router, Route, hashHistory,IndexRoute,browserHistory,Redirect,IndexRedirect } from 'react-router'
import App from './view/App'
import Home from './view/Home/Home'
import NoMatch from './view/NoMatch/NoMatch'

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="/home"/>
        <Route path="home" component={Home}/>
        <Route path="*" component={NoMatch}/>
    </Route>
);
