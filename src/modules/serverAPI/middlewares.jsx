import {
  fetchAdressListRequest,
  fetchServerFailure,
  fetchAdressListSuccess
} from './actions';

export const serverFetchMiddleware = store => next => action => {
   if (action.type === fetchAdressListRequest.toString()) {
     fetch(`https://loft-taxi.glitch.me/addressList`)
       .then(response => response.json())
       .then(addresses => {
        console.log(addresses);
         store.dispatch(fetchAdressListSuccess(addresses));
       })
       .catch(error => {
         store.dispatch(fetchServerFailure(error));
       });
   }
  return next(action);
};