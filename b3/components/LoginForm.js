import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          />
        <TextInput
          placeholder="email"
          placeholderTextColor="#e67e22"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={(text) => this.setState({userId: text})}
          />
        <TextInput
          placeholder="password"
          placeholderTextColor="#e67e22"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          />
          <TouchableOpacity
          onPress={this.handleButtonPress.bind(this)}
          style={styles.loginButtonContainer}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
   container: {
     padding: 20
   },
   input: {
     height: 40,
     backgroundColor: '#FFFFFF',
     marginBottom: 10,
     paddingHorizontal: 10,
     color: '#e67e22'
   },
   loginButtonContainer: {
     backgroundColor: '#d35400',
     paddingVertical: 15
   },
   loginButtonText: {
     color: '#FFFFFF',
     textAlign: 'center',
     fontWeight: '500'
   }
 });
