/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import {
  Provider
} from 'react-redux';

import App from './components/app';

import store from './store/store';

class Dog extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

// const store = require('./store/store.js').default

export default class b3 extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('b3', () => b3);
