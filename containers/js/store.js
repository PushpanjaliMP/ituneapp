import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../../reducers/reduce';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
  applyMiddleware(logger(),thunk)
)(createStore)


export default function configureStore(initialState = {}) {
  //return finalCreateStore(reducer, initialState)
  return createStore(reducer,initialState,applyMiddleware(logger(),thunk));
}
