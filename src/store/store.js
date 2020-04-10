import React, { useReducer } from "react";
import initialState from "./initialState";
// import useLocalStorage from "../customHooks/useLocalStorage";
import rootReducer from "./rootReducer";

export const StoreContext = React.createContext({
  state: initialState,
  dispatch: () => {},
});

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  console.log("state.......", state);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
