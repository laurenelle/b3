import React, { Component } from 'react';

import {
  Button,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default class TrainingOptions extends Component {

  handleButtonSepanx(){
    this.props.onPressSepanx();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          What do you want your dog to learn?
        </Text>
        <TouchableOpacity
          onPress={this.handleButtonSepanx.bind(this)}
          style={styles.trainingButtonContainer}>
          <Text style={styles.trainingButtonText}>Staying at home alone</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleButtonSepanx.bind(this)}
          style={styles.trainingButtonContainer}>
          <Text style={styles.trainingButtonText}>Crate training</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleButtonSepanx.bind(this)}
          style={styles.trainingButtonContainer}>
          <Text style={styles.trainingButtonText}>General leash manners</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleButtonSepanx.bind(this)}
          style={styles.trainingButtonContainer}>
          <Text style={styles.trainingButtonText}>Leash Reactivity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleButtonSepanx.bind(this)}
          style={styles.trainingButtonContainer}>
          <Text style={styles.trainingButtonText}>House training</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleButtonSepanx.bind(this)}
          style={styles.trainingButtonContainer}>
          <Text style={styles.trainingButtonText}>Coexisting with other animals in the home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleButtonSepanx.bind(this)}
          style={styles.trainingButtonContainer}>
          <Text style={styles.trainingButtonText}>Understanding your dogs body language</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  trainingButtonContainer: {
    backgroundColor: 'skyblue',
    paddingVertical: 15,
    margin: 5
  },
  trainingButtonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    paddingHorizontal: 10,
  }
});
