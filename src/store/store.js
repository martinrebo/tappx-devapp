// store.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  devs: [],
  mode: "light",
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'GET_ALL_DEVS':
        return { ...state, devs: action.payload };
      case 'ADD_DEV':
        return { ...state, devs: [...state.devs, action.payload] };
      case 'EDIT_DEV':
        return { ...state, devs: [...state.devs, action.payload] };
      case 'DELETE_DEV':
        return { ...state, devs: action.payload };
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }