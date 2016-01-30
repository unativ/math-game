import { createStore, applyMiddleware } from 'redux';
import middleware from '../middleware/middleware';
import rootReducer from '../reducers';

export default function configureStore(initialState) {

  const createStoreWithMiddleware = applyMiddleware(
    middleware
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
