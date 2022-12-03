import { createStore, applyMiddleware } from 'redux';
import { authMiddleware, regMiddleware, routeMiddleware, addressListMiddleware, getCardMiddleware,postCardMiddleware } from './modules/redux';
import rootReducer from './modules';

const createAppStore = () => {
  const store = createStore(rootReducer, applyMiddleware(authMiddleware, regMiddleware, routeMiddleware, addressListMiddleware, getCardMiddleware, postCardMiddleware));
  return store;
};

export default createAppStore;