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
} from 'react-native';

class Dog extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}


export default class b3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          B3!
        </Text>
        <Dog name='Bane Buttercup' />
        <Dog name='Bodhi Bear' />
        <Dog name='Baloo Boo' />
      </View>
    );
  }
}

AppRegistry.registerComponent('b3', () => b3);
