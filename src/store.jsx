import { createStore, applyMiddleware } from 'redux';
import { serverFetchMiddleware } from './modules/serverAPI';
import rootReducer from './modules';

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(serverFetchMiddleware)
    /*compose(
      applyMiddleware(tvmazeFetchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop,
    ),*/
  );

  return store;
};

export default createAppStore;