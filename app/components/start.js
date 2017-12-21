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
    TouchableOpacity } from 'react-native';

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

    renderGridItem( item ){
      
        return (
        <TouchableOpacity style={styles.gridItem}>
            <View style={styles.gridItemImage}>                
            <Text style={{fontSize:25, color:'white'}}>
                    NAME
            </Text>
            </View>
            <Text style={styles.gridItemText}>my name</Text> 
        </TouchableOpacity>
        );
    }

    render() {
      var crops = [];

      for(let i = 0; i < noGuest; i++){

        crops.push(
          <View key = {i}>
              <TouchableOpacity style={styles.gridItem}>
                    <View style={styles.gridItemImage}>                
                    <Text style={{fontSize:25, color:'white'}}>
                            NAME
                    </Text>
                    </View>
                    <Text style={styles.gridItemText}>my name</Text> 
              </TouchableOpacity>
          </View>
        )
      }
        return (
            <ScrollView style={{padding: 20}}>
              <View>
                <Text style={{fontSize: 27}}>
                    Grower Munchh
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
                {/* <View style={{margin: 7}}/> */}
                <View style={styles.cropContainer}>
                  <View style={styles.crops}>
                    <Text>hjhjhsssssssssssssssssssssssssssssssssssssssss</Text>
                    <Text>hjhjhsssssssssssssssssssssssssssssssssssss</Text>
                    <Text>hjhjhsssssssssssssssssssssssssssssssssssssss</Text>
                  </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                  <View style={{flex: 3, height: 50, backgroundColor: 'powderblue'}} />
                  {/* <View style={{width: 106, height: 50, backgroundColor: 'skyblue'}} />
                  <View style={{width: 106, height: 50, backgroundColor: 'steelblue'}} />
                  <View style={{width: 106, height: 50, backgroundColor: 'steelblue'}} />
                  <View style={{width: 106, height: 50, backgroundColor: 'steelblue'}} />
                  <View style={{width: 106, height: 50, backgroundColor: 'green'}} /> */}
                  {crops}
                
                </View>
                {/* <ListView 
                    contentContainerStyle={styles.grid}
                    renderRow={() => this.renderGridItem()}
                /> */}
                
                <Button onPress={(e) => this.submit(e)} title="Submit"/>
              </View>
               
            </ScrollView>
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
    width: 100,
    height: 100,
    borderWidth: 1.5, 
    borderColor: 'black',
    borderRadius: 50,
},
gridItemText: {
    marginTop: 5,
    textAlign:'center',
},
})
