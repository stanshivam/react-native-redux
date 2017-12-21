import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './login';
import Secured from './secured';
import Start from './start';
import Main from './main';
 
class Application extends Component {
    render() {
        console.log(this.props.hasConfig)
        if (this.props.hasConfig) {
            return <Main />;
        } else {
            return <Start />;
        }
        // return <Start />;
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        hasConfig: state.start.hasConfig
    };
}
 
export default connect(mapStateToProps)(Application);