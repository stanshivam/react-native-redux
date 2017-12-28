import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReduxNavigation from '../navigation/ReduxNavigation'
import Main from '../components/main'
 
class Application extends Component {
    render() {
        return <Main />        
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        hasConfig: state.start.hasConfig
    };
}
 
export default connect(mapStateToProps)(Application);