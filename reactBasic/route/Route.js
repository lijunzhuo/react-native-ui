import React, {useContext} from 'react'
import {NavigationContainer} from "@react-navigation/native";
import HomeStack from "./HomeStack";
import LoginStack from "./LoginStack" 
import userContext from "../store/context/userContext";

const Route = () => {
    const userState = useContext(userContext);
    const isAuthenticated = userState.userState.isAuthenticated;
    return (
        <NavigationContainer>
            {
                isAuthenticated?(<HomeStack></HomeStack>):(<LoginStack></LoginStack>)
            }
        </NavigationContainer>
    )
}

export default Route
