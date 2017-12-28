import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doSubmit } from '../actions/start-actions';

// var login = require("../reducers/auth");
import { 
    ScrollView, 
    Text, 
    TextInput, 
    View, 
    Button, 
    ListView,
    StyleSheet, 
    Image,
    TouchableOpacity,
    Platform,
    StatusBar } from 'react-native';

import { 
    Container, Header, Content, Form, Item, Input, 
    Label, 
    Body,
    Title , Left, Right, Icon, Footer, FooterTab } from 'native-base';

class Start extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            crops: []
        };
    }

    submit (e) {
        console.log('in submit');
        this.props.onSubmit(this.state.name, this.state.phone);
        e.preventDefault();
    }

    render() {
        var crops = [];
        for(let i = 0; i < 20; i++){
            crops.push(
            <View key = {i}>
                <TouchableOpacity style={styles.gridItem} >
                        <View style={styles.gridItemImage}>  
                        <Image
                            style={{flex:1}}
                            source={require('../assets/images/crop.jpg')}
                            resizeMode="contain"
                        />              
                        <Text style={{fontSize:15, color:'darkkhaki'}}>
                                NAME
                        </Text>
                        </View>
                </TouchableOpacity>
            </View>
            )
        }
        return (
            <Container style={styles.headerPad}>
                <Header>
                    <Body>
                        <Title>Grower Munch</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                        <Label>Username</Label>
                        <TextInput 
                            placeholder='Name' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            autoFocus={true} 
                            keyboardType='email-address' 
                            value={this.state.name} 
                            onChangeText={(text) => this.setState({ name: text })} />
                        </Item>
                        <Item floatingLabel last>
                        <Label>Password</Label>
                        <TextInput 
                            placeholder='Phone' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            secureTextEntry={true} 
                            value={this.state.phone} 
                            onChangeText={(text) => this.setState({ phone: text })} />
                        </Item>
                    </Form>
                    
                    {/* <Text
                    onPress={() => this.props.navigation.navigate('drawerStack')} >
                    Pretend we logged in
                    </Text> */}
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        {crops}
                    </View>
                    <View style={styles.button}>
                        <Button  primary onPress={(e) => this.submit(e)} title="Submit"/>
                    </View>
                </Content>
                {/* <ListView 
                    contentContainerStyle={styles.grid}
                    renderRow={() => this.renderGridItem()}
                /> */}
            </Container>
        );
        
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        hasConfig: state.start.hasConfig
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (name, phone) => { dispatch(doSubmit(name, phone)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
const styles = StyleSheet.create({
    headerPad: {
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight,
            }
        })

    },
    cropContainer: {
        flex: 1,
        flexDirection: "column"
    },
    crops: {
        flexDirection: "column"
    },
    grid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    gridItem: {
        margin:5,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItemImage: {
        width: 150,
        height: 150,
    },
    gridItemText: {
        marginTop: 5,
        textAlign:'center',
    },
    button: {
        padding: 15,

    }
})
