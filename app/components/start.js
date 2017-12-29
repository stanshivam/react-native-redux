import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doSubmit } from '../actions/start-actions';
import { fetchCropFromAPI } from '../actions/start-actions';

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
    Label, Card, CardItem, Thumbnail,
    Body,
    Title , Left, Right, Icon, Footer, FooterTab } from 'native-base';


class Start extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: ''
        };
        const { crops, isFetching } = props.crops;
    }

    componentWillMount() {
        this.getCrops();
        console.log('in componentWillMount');
        
    }

    componentDidMount() {
        console.log('in componentDidMount');
    }

   
    getCrops () {
        console.log('in get crops')
        this.props.getCropss();
    }

    submit (e) {
        console.log('in submit');
        this.props.onSubmit(this.state.name, this.state.phone);
        e.preventDefault();
    }


    render() {
        var myCrops = [];
        for(let i = 0; i < 2; i++){
            myCrops.push(
            <View key = {i}>
                <TouchableOpacity  >
                        <View style={styles.gridItemImage}>  
                        <Card>
                            <CardItem>
                            <Left>
                                <Body>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                            </CardItem>
                            <CardItem cardBody>
                                    <Image source={require('../assets/images/crop.jpg')} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                        </Card>
                        </View>
                </TouchableOpacity>
            </View>
            )
        }
        return (
            <Container style={styles.headerPad}>
            
                <Header>
                    <Body>
                        <Title>Welcome to Grower Munch ;p</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel first>
                        <Label>Name</Label>
                        <TextInput 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            autoFocus={true} 
                            keyboardType='email-address' 
                            value={this.state.name} 
                            onChangeText={(text) => this.setState({ name: text })} />
                        </Item>
                        <Item floatingLabel>
                        <Label>Email</Label>
                        <TextInput 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            autoFocus={true} 
                            keyboardType='email-address' 
                            value={this.state.email} 
                            onChangeText={(text) => this.setState({ email: text })} />
                        </Item>
                        <Item floatingLabel last>
                        <Label>Phone</Label>
                        <TextInput 
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
                        {myCrops}
                    </View>
                    <View style={styles.button}>
                        <Text>{this.props.crops.length}</Text>
                        <Text>{this.props.isFetching}</Text>
                        <Button  primary onPress={(e) => this.submit(e)} title="Done"/>
                    </View>
                    {
                        this.props.isFetching && <Text>Loading</Text>
                    }
                    {
                        this.props.crops.length ? (
                            this.props.crops.map((crop, i) => {
                            return <TouchableOpacity key={i}>
                                <View  >
                                <Text>Name: {crop.name}</Text>
                                <Text>Mass: {crop.mass}</Text>
                                <Text>Birth Year: {crop.birth_year}</Text>
                                </View></TouchableOpacity>
                        })
                        ) : null
                    }
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
        hasConfig: state.start.hasConfig,
        crops: state.start.crops,
        isFetching: state.start.isFetching
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (name, phone) => { dispatch(doSubmit(name, phone)) },
        getCropss: () => { dispatch(fetchCropFromAPI()) }
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
    
    gridItemImage: {
        width: 174,
        height: 150,
    },
    button: {
        padding: 10,

    }
})
