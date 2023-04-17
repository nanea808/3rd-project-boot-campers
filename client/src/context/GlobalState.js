import React, { createContext, useContext } from "react";
import { useAccountReducer } from "./reducers";

const AccountContext = createContext();
const { Provider } = AccountContext;

const savedState = { userID: localStorage.getItem('userID'), isLoggedIn: localStorage.getItem('isLoggedIn') };
console.log(savedState);
let initialState;

if (savedState.isLoggedIn != null || savedState.userID != null) {
  initialState = savedState;
} else {
  initialState = {
    isLoggedIn: false,
    userID: "",
  };
}

const AccountProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useAccountReducer(initialState);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useAccountContext = () => useContext(AccountContext);

export { AccountProvider, useAccountContext };
