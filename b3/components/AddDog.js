import React, { Component } from 'react';

import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons'

export default class AddDog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gender: 'female'
    }
  }

  handleSetSelectedOption(){
    this.props.setSelectedGenderOption(this.state.gender);
  }

  handleButtonStartTraining(){
    this.props.onPressStartTraining();
  }
  render() {

    const options = [
    'male',
    'female'
    ];

    function renderOption(option, selected, onSelect, index){
      const style = selected ? { fontWeight: 'bold'} : {};

      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <View>
            <Text style={style}>{option}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }

    function renderContainer(optionNodes){
      return <View>{optionNodes}</View>;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          What is your dogs name?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Fido"
          placeholderTextColor="#e67e22"
          returnKeyType="next"
          autoCorrect={false}
        />
        <SegmentedControls
          options={ options }
          onSelection={ this.handleSetSelectedOption.bind(this) }
          selectedOption={ this.state.gender }
          optionContainerStyle={{flex: 1}}
          renderOption={ renderOption }
          renderContainer={ renderContainer }
        />
        <Button
          onPress={this.handleButtonStartTraining.bind(this)}
          title="Get Started"
        />
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
  }
});
