//import { createSelector } from 'reselect';

export const getLogInStatus = state => state.serverAPI.isLoggedIn;
export const getError = state => state.series.error;
export const getAdresses = state => state;
// createSelector(
//   state => state.series.elements,
//   elements =>
//     elements.map(({ id, image: { original }, name }) => ({
//       id,
//       image: original,
//       name,
//     })),
// );