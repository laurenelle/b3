import { connect } from 'react-redux';
import React from 'react';
import TrainingOptions from '../components/TrainingOptions';
import { NavigationActions } from 'react-navigation';

export const mapStateToProps = (state) => {
  return state
};

export const mapDispatchToProps = (dispatch) => {
  return {
  }
};

const StartTrainingContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingOptions);

StartTrainingContainer.navigationOptions = {
  title: 'Start Training',
};

export default StartTrainingContainer;
