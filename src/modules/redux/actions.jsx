import { createAction } from 'redux-actions';

export const AUTHENTICATE = "AUTHENTICATE";
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: { email, password },
  });

export const logIn = createAction('LOG_IN');
export const logOut = createAction('LOG_OUT');
/*export const authenticate = createAction('AUTHENTICATE', 
function logIn (email, password) { return {
    payload: {
        email,
        password
    }
}});*/
// getSeriesRequest.toString(); // GET_SERIES_REQUEST

