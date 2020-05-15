import React from 'react';
import { initState } from '../reducer/reducer';

// eslint-disable-next-line import/prefer-default-export
export const Context = React.createContext({
  state: initState,
  dispatch: () => {},
  getInputData: () => {},
  setAddAddress: () => {},
  removeAddress: () => {},
  selectAddress: () => {},
  resetSelect: () => {},
});
