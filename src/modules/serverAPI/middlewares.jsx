import {
  fetchAdressListRequest,
  fetchServerFailure
} from './actions';

export const serverFetchMiddleware = store => next => action => {
  if (action.type === fetchAdressListRequest.toString()) {
    fetch(`https://loft-taxi.glitch.me/addressList`)
      .then(response => response.json())
      .then(addresses => {
        store.dispatch(fetchAdressListRequest(addresses));
      })
      .catch(error => {
        store.dispatch(fetchServerFailure(error));
      });
  }
  return next(action);
};