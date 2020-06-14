import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../screen/Login"

const LoginStackNavigator = createStackNavigator();

const HomeStack = () => {
    return (
        <LoginStackNavigator.Navigator>
            <LoginStackNavigator.Screen name='Login' component={Login}></LoginStackNavigator.Screen>
        </LoginStackNavigator.Navigator>
    )
}

export default HomeStack