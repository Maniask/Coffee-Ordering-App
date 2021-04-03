import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen'

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='MoviesScreen' component={MoviesScreen}/>
    </Stack.Navigator>
  );
}