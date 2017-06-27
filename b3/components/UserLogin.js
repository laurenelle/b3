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
  StatusBar
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

  handleButtonAddDog(){
    this.props.onPressAddDog();
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('../images/dog.png')} />
          <Text style={styles.logoTitle}>B3</Text>
        </View>
        <View style={styles.loginFormContainer}>
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
          <Button
            onPress={this.handleButtonAddDog.bind(this)}
            title="Add a Dog"
          />
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#e67e22'
   },
   logoContainer: {
     alignItems: 'center',
     flexGrow: 1,
     justifyContent: 'center'
   },
   logoTitle: {
     color: '#FFF',
     marginTop: 10,
     textAlign: 'center',
     opacity: 0.6
   },
   loginFormContainer: {
     padding: 20
   },
   logo: {
     width: 100,
     height: 100
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
