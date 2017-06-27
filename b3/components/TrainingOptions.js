import React, { Component } from 'react';

import {
  Button,
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class TrainingOptions extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          What do you want your dog to learn?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 40,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#e67e22',
    textAlign: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});
