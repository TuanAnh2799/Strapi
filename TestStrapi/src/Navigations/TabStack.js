import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStack';
import ProfileStackScreen from './ProfileStack';
import NotificationScreen from '../Screens/Notification/Notification';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const TabStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

        if (route.name === 'HomePage') {
          iconName = 'home';
          size = focused ? 25 : 20;
        } else if (route.name === 'Notification') {
          iconName = 'bell';
          size = focused ? 25 : 20;
        }
        else if(route.name === 'Profile')
        {
            iconName = 'user-circle';
            size = focused ? 25 : 20;
        }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        keyboardHidesTabBar: true,
        showLabel: true,
        labelStyle: {fontSize: 15},
        style: {position:'absolute'},
      })}
      >
        <Tab.Screen name="HomePage" component={HomeStackScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} options={{
            tabBarBadge: 3
        }}/>
        <Tab.Screen name='Profile' component={ProfileStackScreen}/>
    </Tab.Navigator>
  )
}

export default TabStackScreen;

const styles = StyleSheet.create({})