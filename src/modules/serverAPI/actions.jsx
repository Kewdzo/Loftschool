import { createAction } from 'redux-actions';

export const fetchAdressListRequest = createAction('FETCH_ADRESS_LIST_REQUEST');
export const fetchAdressListSuccess = createAction('FETCH_ADRESS_LIST_SUCCESS');
export const fetchServerFailure = createAction('FETCH_SEVER_FAILURE');
export const fetchLogInStatus = createAction('FETCH_LOGIN_STATUS');
// getSeriesRequest.toString(); // GET_SERIES_REQUEST
