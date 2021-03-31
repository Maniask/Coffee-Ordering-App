import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen'
import SplashScreen from '../screens/SplashScreen'

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ header: () => null }}/>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen name='Signup' component={SignupScreen} options={{ header: () => null }}/>
    </Stack.Navigator>
  );
}