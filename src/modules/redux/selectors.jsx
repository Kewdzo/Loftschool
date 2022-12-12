//import { createSelector } from 'reselect';

export const getLogInStatus = state => state.serverAPI.isLoggedIn;
export const getError = state => state.series.error;
export const getAdresses = state => state.serverAPI.addresses;
export const getToken = state => state.serverAPI.token;
export const getCardData = state => state.serverAPI.card;
// createSelector(
//   state => state.series.elements,
//   elements =>
//     elements.map(({ id, image: { original }, name }) => ({
//       id,
//       image: original,
//       name,
//     })),
// );