/**
 * Created by lxp on 2016/5/6.
 */
import React , { Component } from 'react';
import {withRouter} from 'react-router'

class NoMatch extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    clickHandler() {
        this.context.router.replace('/home');
    }

    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    }

    routerWillLeave(nextLocation) {
        return true;
        return 'Your work is not saved! Are you sure you want to leave?'
    }

    render() {
        return (
            <div>
                <h2>404</h2>
                <a href="javascript:;" onClick={ev=>this.clickHandler(ev)}>返回首页</a>
            </div>
        )
    }
}

export default withRouter(NoMatch)
