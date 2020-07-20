import React from "react";

export const initLoginState = {
  isLoading: true,
  email: "",
  userToken: "",
};

export const loginReducer = (preState, action) => {
  switch (action.type) {
    case "RETRIEVE_TOKEN":
      return { ...preState, isLoading: false, userToken: action.token };
    case "RETRIEVE_IS_LOADING":
      return { ...preState, isLoading: false };
    case "LOGIN":
      return {
        ...preState,
        isLoading: false,
        email: action.email,
        userToken: action.token,
      };
    case "LOGOUT":
      return { ...preState, isLoading: false, email: "", userToken: "" };
    case "REGISTER":
      return {
        ...preState,
        isLoading: false,
        email: action.email,
        userToken: action.token,
      };
  }
};
