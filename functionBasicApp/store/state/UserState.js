import React, { useReducer, useMemo } from "react";
import UserContext from "../context/userContext";
import userActions from "../action/userAction";
import userReducer from "../reducer/userReducer";

const userState = (props) => {
  let initState = { isAuthenticated: false, username: "", password: "" };
  const [userState, dispatch] = useReducer(userReducer, initState);

  const userContext = useMemo(
    () => ({
      signIn: (payload) => {
        dispatch({ type: userActions.SET_USER, payload });
      },
      signOut: () => {
        dispatch({
          type: userActions.CLEAR_USER,
          payload: initState,
        });
      },
    }),
    []
  );
  return (
    <UserContext.Provider value={{ userState, userContext }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default userState;
