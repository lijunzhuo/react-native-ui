import React, {createContext, useReducer, useMemo} from "react";

const userActions = {
    SET_USER:"SET_USER",
    CLEAR_USER:"CLEAR_USER"
}

const UserContext = createContext();

const userReducer = (preState,action)=>{
    switch (action.type){
        case userActions.SET_USER:
            return {...action.payload}
        case userActions.CLEAR_USER:
            return {}
        default :
            return preState
    }
}
const userState =props=>{
    let initState = {isAuthenticated:false, username:"", password:""}
    const [userState,dispatch] = useReducer(userReducer,initState)

    const userContext = useMemo(()=>({
        signin: (payload)=>{
            dispatch({type:userActions.SET_USER, payload})
        },
        signOut:()=>{
            dispatch({type:userActions.CLEAR_USER,payload:{}})
        }
    }), [])
    return (
        <UserContext.Provider value={{userState, userContext}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default userState


