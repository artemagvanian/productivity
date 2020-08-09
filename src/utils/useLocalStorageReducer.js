import { useReducer } from "react";

const useLocalStorageReducer = (key, reducer, defaultState) => {
  let initialState = localStorage.getItem(key);

  if (initialState !== null) {
    initialState = JSON.parse(initialState);
  } else {
    initialState = defaultState;
  }

  const persistentReducer = (state, action) => {
    let nextState = reducer(state, action);
    localStorage.setItem(key, JSON.stringify(nextState));
    return nextState;
  };

  const [state, dispatch] = useReducer(persistentReducer, initialState);

  return [state, dispatch];
};

export default useLocalStorageReducer;
