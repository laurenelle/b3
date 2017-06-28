import React, { Component } from 'react';

import {
  Button,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default class SymptomOptions extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>
          What does your dog do when left home alone? (Check all that apply.)
        </Text>
        <TouchableOpacity
          style={styles.trainingButtonContainer}>
          <Text style={styles.trainingButtonText}>Test</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  question: {
    fontSize: 15,
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
