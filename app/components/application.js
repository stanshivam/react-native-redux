import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReduxNavigation from '../navigation/ReduxNavigation'
 
class Application extends Component {
    render() {
        return <ReduxNavigation />        
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        hasConfig: state.start.hasConfig
    };
}
 
export default connect(mapStateToProps)(Application);