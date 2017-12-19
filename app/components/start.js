import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import { doSubmit } from '../actions/start-actions';
// var login = require("../reducers/auth");

class Start extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        };
    }

    submit (e) {
        this.props.onSubmit(this.state.name, this.state.phone);
        e.preventDefault();
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    Grower Munch
                </Text>
                <TextInput 
                    placeholder='Name' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='email-address' 
                    value={this.state.name} 
                    onChangeText={(text) => this.setState({ name: text })} />
                <TextInput 
                    placeholder='Phone' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    secureTextEntry={true} 
                    value={this.state.phone} 
                    onChangeText={(text) => this.setState({ phone: text })} />
                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.submit(e)} title="Submit"/>
            </ScrollView>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        // isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (name, phone) => { dispatch(doSubmit(name, phone)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);