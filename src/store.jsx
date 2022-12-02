import { createStore, applyMiddleware } from 'redux';
import { authMiddleware, regMiddleware } from './modules/redux';
import rootReducer from './modules';

const createAppStore = () => {
  const store = createStore(rootReducer, applyMiddleware(authMiddleware, regMiddleware));
  return store;
};

export default createAppStore;