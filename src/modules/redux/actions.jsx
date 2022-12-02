import { createAction } from 'redux-actions';

export const logIn = createAction('LOG_IN');
export const logOut = createAction('LOG_OUT');
export const authenticate = createAction('AUTHENTICATE', (email, password) => ({ email, password }));
export const registration = createAction('REGISTRATION', (email, password, name) => ({ email, password, name }));

// getSeriesRequest.toString(); // GET_SERIES_REQUEST

