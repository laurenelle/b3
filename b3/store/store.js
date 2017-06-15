import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import promise from 'redux-promise-middleware'

const store = createStore(
  reducer,
  {},
  applyMiddleware(thunk, promise())
);

export default store;
