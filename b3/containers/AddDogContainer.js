import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import AddDog from '../components/AddDog';
import {
  selectGender
} from '../actions/dogs';


export const mapStateToProps = (state) => {
  return state
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedGenderOption: (gender) => {
      dispatch(selectGender(gender));
    },
    onPressStartTraining: () => {
      dispatch(NavigationActions.navigate({ routeName: 'StartTraining' }));
    }
  }
};

const AddDogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDog);


AddDogContainer.navigationOptions = {
  title: 'Add Dog',
};

export default AddDogContainer;
