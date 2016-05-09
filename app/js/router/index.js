/**
 * Created by lxp on 2016/5/4.
 */
import React , { Component } from 'react';
import { Router, Route, hashHistory,IndexRoute,browserHistory,Redirect,IndexRedirect } from 'react-router'
import App from '../components/App'
import Home from '../components/Home/Home'
import NoMatch from '../components/NoMatch/NoMatch'

const onChange = function (prevState, nextState, replace) {
    console.log(nextState);
};

class MyRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App} onChange={onChange}>
                    <IndexRedirect to="/home"/>
                    <Route path="home" component={Home}/>
                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
        )
    }
}
export default MyRouter;
