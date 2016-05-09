/**
 * Created by lxp on 2016/5/6.
 */
import React , { Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/number'

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
        const {actions,reduce,number}=this.props;

        return (
            <div>
                <h2>Home!</h2>
                <a href="javascript:;" onClick={(ev)=>{this.clickHandler(ev)}}>跳转到404页面</a>
                <div>
                    <p>当前数量：{this.props.number}</p>
                </div>
                <a href="javascript:;" onClick={ev=>actions.increase(2)}>点击增加</a>
                <a href="javascript:;" onClick={ev=>actions.reduce(1)}>点击减少</a>
            </div>
        )
    }
}

export default Home;