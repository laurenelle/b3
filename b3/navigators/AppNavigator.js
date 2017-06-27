import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import UserLoginContainer from '../containers/UserLoginContainer';
import AddDogContainer from '../containers/AddDogContainer';
import StartTrainingContainer from '../containers/StartTrainingContainer';

export const AppNavigator = StackNavigator({
  UserLogin: { screen: UserLoginContainer },
  AddDog: { screen: AddDogContainer },
  StartTraining: { screen: StartTrainingContainer }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
