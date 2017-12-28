import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button, Alert } from 'react-native';
import { logout } from '../actions/auth';

import AppIntro from 'react-native-app-intro';

class Welcome extends Component {
    

    onSkipBtnHandle = (index) => {
        // Alert.alert('Skip');
        // console.log(index);
        console.log('move on to login screen');
    }
    doneBtnHandle = () => {
        // Alert.alert('Done');
        console.log('move on to login screen');
        
    }
    nextBtnHandle = (index) => {
        Alert.alert('Next');
        console.log(index);
    }
    onSlideChangeHandle = (index, total) => {
        console.log(index, total);
    }
    
    render() {
        const pageArray = [{
            title: 'Page 1',
            description: 'Description 1',
            img: require('../assets/images/image2.png'),
            imgStyle: {
                height: 80 * 2.5,
                width: 109 * 2.5,
            },
            backgroundColor: '#442e63', 
            fontColor: '#fff',
            level: 10,
            }, {
            title: 'Page 2',
            description: 'Description 2',
            img: require('../assets/images/image1.png'),
            imgStyle: {
                height: 93 * 2.5,
                width: 103 * 2.5,
            },
            backgroundColor: '#a4b602',
            fontColor: '#fff',
            level: 10,
            }, {
                title: 'Page 3',
                description: 'Description 3',
                img: require('../assets/images/image1.png'),
                imgStyle: {
                    height: 93 * 2.5,
                    width: 103 * 2.5,
                },
                backgroundColor: '#c45ab7',
                fontColor: '#fff',
                level: 10,
            }, {
                title: 'Page 4',
                description: 'Description 4',
                img: require('../assets/images/image1.png'),
                imgStyle: {
                    height: 93 * 2.5,
                    width: 103 * 2.5,
                },
                backgroundColor: '#39b551',
                fontColor: '#fff',
                level: 10,
        }];
        return (
        <AppIntro
            onNextBtnClick={this.nextBtnHandle}
            onDoneBtnClick={this.doneBtnHandle}
            onSkipBtnClick={this.onSkipBtnHandle}
            onSlideChange={this.onSlideChangeHandle}
            pageArray={pageArray}
        />
        );
    }
}   


const mapStateToProps = (state, ownProps) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);