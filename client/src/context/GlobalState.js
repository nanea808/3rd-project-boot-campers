import React, { createContext, useContext } from "react";
import { useAccountReducer } from "./reducers";

const AccountContext = createContext();
const { Provider } = AccountContext;

const initialState = {
  isLoggedIn: false,
  userID: "",
};

const AccountProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useAccountReducer(initialState);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useAccountContext = () => useContext(AccountContext);

export { AccountProvider, useAccountContext };
