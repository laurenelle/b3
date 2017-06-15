import { connect } from 'react-redux';
import React from 'react';

import {
  fetchUserData
} from '../actions/users';

import UserLogin from '../components/UserLogin';

export const mapStateToProps = (state) => {
  return state
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onPressButton: (userId) => {
      console.log("inside on press button");
      dispatch(fetchUserData(userId));
    }
  }
};

const UserLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin);

export default UserLoginContainer;
