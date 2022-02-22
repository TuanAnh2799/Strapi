import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactScreen from '../Screens/Contact/Contact';
import TabStackScreen from './TabStack';
import CustomDrawerScreen from './CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerScreen {...props}/>} screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor:'#aa18ea',
        drawerActiveTintColor:'#fff',
        drawerLabelStyle: {
        marginLeft: -10
        }
    }}>
      <Drawer.Screen name="Home" component={TabStackScreen} options={{
        drawerIcon: ()=> (
          <Icon name="home" size={25} color="green"/>
        )
      }} />
      <Drawer.Screen name="Contact" component={ContactScreen} options={{
        drawerIcon: ()=> (
          <Icon name="account-box" size={25} color="green"/>
        )
      }} />
    </Drawer.Navigator>
  );
}

export default DrawerStack

const styles = StyleSheet.create({})