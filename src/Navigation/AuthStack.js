import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Signup, Login, Home} from '../Screen';
import navigationString from '../constant/navigationStrings';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <React.Fragment>
      <Stack.Screen name={navigationString.SIGNUP} component={Signup} />
      <Stack.Screen name={navigationString.LOGIN} component={Login} />
      <Stack.Screen name={navigationString.HOME} component={Home} />
    </React.Fragment>
  );
}
