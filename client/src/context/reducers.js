import { useReducer } from 'react';
import { UPDATE_ACCOUNT_STATUS, UPDATE_ACCOUNT_ID } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ACCOUNT_STATUS:
      console.log('UPDATE_ACCOUNT_STATUS dispatched');
      return {
        ...state,
        isLoggedIn: !action.isLoggedIn,
      };
    case UPDATE_ACCOUNT_ID:
      console.log('UPDATE_ACCOUNT_ID dispatched');
      return {
        ...state,
        userID: action.userID,
      };
    default:
      return state;
  }
};

export function useAccountReducer(initialState) {
  return useReducer(reducer, initialState);
}
