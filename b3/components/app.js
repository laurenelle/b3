import UserLoginContainer from '../containers/UserLoginContainer';
import React, { Component } from 'react';

import {
  StyleSheet, 
  Text,
  View,
} from 'react-native';


export default class App extends Component {

  render() {
    return (
      <UserLoginContainer/>
    );
  }
}
