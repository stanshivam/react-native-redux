import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './login';
import Secured from './secured';
import Main from './main';
 
class Application extends Component {
    render() {
        console.log(this.props.isLoggedIn)
        if (this.props.isLoggedIn) {
            return <Main />;
        } else {
            return <Login />;
        }
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
export default connect(mapStateToProps)(Application);