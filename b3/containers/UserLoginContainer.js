import { connect } from 'react-redux';
import React from 'react';
import { NavigationActions } from 'react-navigation';
import UserLogin from '../components/UserLogin';
import {
  fetchUserData
} from '../actions/users';

export const mapStateToProps = (state) => {
  return state
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onPressButton: (userId) => {
      dispatch(fetchUserData(userId));
    },
    onPressAddDog: () => {
      dispatch(NavigationActions.navigate({ routeName: 'AddDog' }));
    }
  }
};

const UserLoginContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin);

UserLoginContainer.navigationOptions = {
  title: 'User Login',
};


export default UserLoginContainer;
