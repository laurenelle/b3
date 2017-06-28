import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import SymptomOptions from '../components/questions/sepanx/SymptomOptions';

export const mapStateToProps = (state) => {
  return state
};

export const mapDispatchToProps = (dispatch) => {
  return {
  }
};

const SepanxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SymptomOptions);


SepanxContainer.navigationOptions = {
  title: 'Separation Anxiety',
};

export default SepanxContainer;
