import userActions from "../action/userAction";
const userReducer = (preState, action) => {
  switch (action.type) {
    case userActions.SET_USER:
      return { ...action.payload };
    case userActions.CLEAR_USER:
      return { ...action.payload };
    default:
      return preState;
  }
};

export default userReducer;
