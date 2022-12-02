import { createStore, applyMiddleware } from 'redux';
import { authMiddleware } from './modules/redux';
import rootReducer from './modules';

const createAppStore = () => {
  const store = createStore(rootReducer, applyMiddleware(authMiddleware));
  return store;
};

export default createAppStore;