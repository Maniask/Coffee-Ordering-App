import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen'
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 

// export default function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='HomeScreen' component={HomeScreen} />
//       <Stack.Screen name='MoviesScreen' component={MoviesScreen}/>
//     </Stack.Navigator>
//   );
// }

const ProfileStack = createStackNavigator();

function ProfileStackScreen(){
  return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerStyle:{backgroundColor:'#C4A484'}, header:()=>null }}/>
      <ProfileStack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} options={{headerStyle:{backgroundColor:'#C4A484'}, header:()=>null}}/>
    </ProfileStack.Navigator>
    )
}


export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: '#79443B',
      }}
    >
      <Tab.Screen
        name= "Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MoviesScreen"
        component={MoviesScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
