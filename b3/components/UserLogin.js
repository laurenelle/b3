import React, { Component } from 'react';

import {
  TextInput,
  Button,
  View
} from 'react-native';

export default class UserLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 1
    }
  }

handleButtonPress(){
  this.props.onPressButton(this.state.userId);
}

  render() {
    return (
      <View style={{height: 200, width: 500}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type your user id!"
          onChangeText={(text) => this.setState({userId: text})}
        />
        <Button
          onPress={this.handleButtonPress.bind(this)}
          title="OK!"
          color="#841584"
        />
      </View>
    );
  }
}
