import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from 'react-redux';
import configureStore from './app/configureStore';
import Main from './app/components/main';
import Application from './app/components/application';
import { Font } from 'expo';

const store = configureStore();


export default class App extends React.Component {

  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Arial': require('./app/assets/fonts/Arial.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    // console.log(this.props.isLoggedIn)
    if (!this.state.fontLoaded) return null;
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
