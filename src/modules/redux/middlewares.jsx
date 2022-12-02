import {
  logIn,
  authenticate,
  registration
} from './actions';
import { serverLogIn, serverRegistration } from '../../api'


export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === authenticate.toString()) {
    const { email, password } = action.payload;
    const data = await serverLogIn(email, password)
    if (data.success) {
      store.dispatch(logIn())
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
    console.log(data);
    if (data.success) {
      store.dispatch(logIn())
    }
    else {
      alert('Ошибка: ' + data.error)
    }
  }
  else {
    next(action);
  }
};



