import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchAdressListSuccess,
  fetchServerFailure
} from './actions';

const addresses = handleActions(
  {
    [fetchAdressListSuccess]: (_state, action) => action.payload,
  },
  [],
);

const error = handleActions(
  {
    [fetchAdressListSuccess]: () => null,
    [fetchServerFailure]: (_state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  addresses,
  /*isAuthorized,
  card,
  profile,*/
  error,
});


// export const fetchSeriesImages = state =>
//   state.series.elements.map(({ id, image: { original }, name }) => ({
//     id,
//     image: original,
//     name,
//   }));

// const initialState = {
//   series: [],
//   isLoading: false,
//   error: null,
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case fetchSeriesRequest.toString():
//       return {
//         ...state,
//         series: [],
//         isLoading: true,
//       };

//     case fetchSeriesSuccess.toString():
//       return {
//         ...state,
//         series: action.payload,
//         isLoading: false,
//       };

//     case fetchSeriesFailure.toString():
//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };

//     default:
//       return state;
//   }
// };