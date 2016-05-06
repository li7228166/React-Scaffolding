/**
 * Created by lxp on 2016/5/6.
 */
import React , { Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions'

const mapStateToProps = state => {
    return {
        number: state.number
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
};

@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired
    };
    static contextTypes = {
        router: React.PropTypes.object
    };

    clickHandler() {
        this.context.router.replace('404');
    }

    render() {
        return (
            <div>
                <h2>Home!</h2>
                <a href="javascript:;" onClick={(ev)=>{this.clickHandler(ev)}}>跳转到404页面</a>
                <div>
                    <p>当前数量：{this.props.number}</p>
                </div>
            </div>
        )
    }
}

export default Home;