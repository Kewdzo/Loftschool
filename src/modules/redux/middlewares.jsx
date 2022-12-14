import {  logIn,  authenticate,  registration, getRoute, routeReady, getAddressList, addressListReady, getCard, postCard, cardInfoReady} from './actions';
import { serverLogIn, serverRegistration, serverRoute, serverAddress, serverGetCard, serverPostCard } from '../../api'


export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === authenticate.toString()) {
    const { email, password } = action.payload;
    const data = await serverLogIn(email, password)
    if (data.success) {
      store.dispatch(logIn(data.token))
    }
    else {
      alert('Ошибка: ' + data.error)
    }
  } else {
    next(action);
  }
};

export const regMiddleware = (store) => (next) => async (action) => {
  if (action.type === registration.toString()) {
    const { email, password, name } = action.payload;
    const data = await serverRegistration(email, password, name)
    if (data.success) {
      store.dispatch(logIn(data.token))
    }
    else {
      alert('Ошибка: ' + data.error)
    }
  }
  else {
    next(action);
  }
};

export const routeMiddleware = (store) => (next) => async (action) => {
  if (action.type === getRoute.toString()) {
    const { address1, address2 } = action.payload;
    const data = await serverRoute(address1, address2)
    if (data.length > 0) {
      store.dispatch(routeReady(data))
    }
    else {
      alert('Ошибка: ' + data.error)
    }
  }
  else {
    next(action);
  }
};

export const addressListMiddleware = (store) => (next) => async (action) => {
  if (action.type === getAddressList.toString()) {
    const data = await serverAddress()
    if (data.addresses) {
      store.dispatch(addressListReady(data.addresses))
    }
    else {
      alert('Ошибка: ' + data.error)
    }
  }
  else {
    next(action);
  }
};

//{"cardName":"name","expiryDate":"01/24","cardNumber":"0000000000001111","id":"rec4NwqbXyWY2Ju7E","cvc":"555"}
export const getCardMiddleware = (store) => (next) => async (action) => {
  if (action.type === getCard.toString()) {
    const token = action.payload;
    const data = await serverGetCard(token);
    //В API почему-то есть только success: false
    if (data.cardName) {
      store.dispatch(cardInfoReady(data));
    }
    else {
      alert('Ошибка: ' + data.error);
    }
  }
  else {
    next(action);
  }
};


export const postCardMiddleware = (store) => (next) => async (action) => {
  if (action.type === postCard.toString()) {
    const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
    const data = await serverPostCard(cardNumber, expiryDate, cardName, cvc, token);
    if (data.success) {
      alert('Данные обновлены: ' + JSON.stringify(data));
      store.dispatch(getCard(token));
    }
    else {
      alert('Ошибка: ' + data.error);
    }
  }
  else {
    next(action);
  }
};


