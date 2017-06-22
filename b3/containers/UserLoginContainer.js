import { connect } from 'react-redux';
import React from 'react';

import UserLogin from '../components/UserLogin';

const UserLoginContainer = () => (
  <UserLogin />
);

UserLoginContainer.navigationOptions = {
  title: 'User Login',
};


export default UserLoginContainer;
