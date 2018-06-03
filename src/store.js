import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './rootReducer'
import  rootSaga  from './rootSaga';

export const history = createHistory(); //using browser history.
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store

const initialState = {}
const enhancers = []
const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}
// FP utility to call functions from right to left passing output of each.
const composedEnhancers = compose(  
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)
// running root saga. -> root saga runs all other sagas.
sagaMiddleware.run(rootSaga);


export default store