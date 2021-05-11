import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import DetailsScreen from '../screens/DetailsScreen'
import OrderDeliveryScreen from '../screens/OrderDeliveryScreen'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 

// export default function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='HomeScreen' component={HomeScreen} />
//       <Stack.Screen name='SearchScreen' component={SearchScreen}/>
//     </Stack.Navigator>
//   );
// }

const ProfileStack = createStackNavigator();
const MenuStack1 = createStackNavigator();
const MenuStack2 = createStackNavigator();

function ProfileStackScreen(){
  return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerStyle:{backgroundColor:'#C4A484'}, header:()=>null }}/>
      <ProfileStack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} options={{headerStyle:{backgroundColor:'#C4A484'}, header:()=>null}}/>
    </ProfileStack.Navigator>
    )
}

function MenuStack1Screen(){
  return(
    <MenuStack1.Navigator>
      <MenuStack1.Screen name="HomeScreen" component={HomeScreen} options={{headerStyle:{backgroundColor:'#C4A484'}, header:()=>null }}/>
      <MenuStack1.Screen name="DetailsScreen" component={DetailsScreen} options={{headerStyle:{backgroundColor:'#C4A484'}, header:()=>null}}/>
      <MenuStack1.Screen name="OrderDeliveryScreen" component={OrderDeliveryScreen} options={{headerStyle:{backgroundColor:'#C4A484'}, header:()=>null}}/>
    </MenuStack1.Navigator>
  )
}

function MenuStack2Screen(){
  return(
    <MenuStack2.Navigator>
      <MenuStack2.Screen name="SearchScreen" component={SearchScreen} options={{headerStyle:{backgroundColor:'#C4A484'}, header:()=>null }}/>
      <MenuStack2.Screen name="DetailsScreen" component={DetailsScreen} options={{headerStyle:{backgroundColor:'#C4A484'}, header:()=>null}}/>
      <MenuStack2.Screen name="OrderDeliveryScreen" component={OrderDeliveryScreen} options={{headerStyle:{backgroundColor:'#C4A484'}, header:()=>null}}/>
    </MenuStack2.Navigator>
  )
}

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: '#F0913F',
      }}
    >
      <Tab.Screen
        name= "Home"
        component={MenuStack1Screen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={MenuStack2Screen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
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
