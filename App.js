import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from 'react-redux';
import configureStore from './app/configureStore';
import Main from './app/components/main';
import Application from './app/components/application';

const store = configureStore();

const rnredux = () => {
  <Provider store={store}>
    <Main />
  </Provider>
}

export default class App extends React.Component {
  render() {
    console.log(this.props.isLoggedIn)
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
