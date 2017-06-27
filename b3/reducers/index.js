import { combineReducers } from 'redux'
import users from './users'
import dogs from './dogs'

import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('UserLogin');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('UserLogin');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'UserLogin':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'UserLogin':
      return { state };
    default:
      return state;
  }
}

const reducers = combineReducers({
  nav,
  users,
  dogs
})

export default reducers
