import { createStore, applyMiddleware } from 'redux';
//import { authMiddleware, regMiddleware, routeMiddleware, addressListMiddleware, getCardMiddleware,postCardMiddleware } from './modules/redux';
import rootReducer from './modules';
import createSagaMiddleware from 'redux-saga';
import { handleAuth, handleReg, handleRoute, handleAddreses, handleGetCard, handlePostCard } from './modules/redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const createAppStore = () => {
  const store = createStore(rootReducer,
    applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(handleAuth);
  sagaMiddleware.run(handleReg);
  sagaMiddleware.run(handleRoute);
  sagaMiddleware.run(handleAddreses);
  sagaMiddleware.run(handleGetCard);
  sagaMiddleware.run(handlePostCard);

  return store;
};

export default createAppStore;  