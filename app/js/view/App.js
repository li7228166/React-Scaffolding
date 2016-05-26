/**
 * Created by lxp on 2016/5/6.
 */
import React , { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>APP!</h1>
                {this.props.children}
            </div>
        )
    }
}