import React from 'react';
import HomeScreen from '../Screens/Home/Home';
import DetailScreen from '../Screens/Detail/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
    }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: true,
          headerTitleAlign:'center',
          headerLeft: () => (
            <FontAwesome5 name='bars' size={24} color='black' onPress={()=>navigation.toggleDrawer()}/>
          ),
          headerRight: () => (
            <FontAwesome5 name='search' size={24} color='black' />
          ),
        }}/>
        <Stack.Screen name="Detail" component={DetailScreen} options={{
          headerShown: true,
        }}/>
    </Stack.Navigator>
  )
}

export default HomeStackScreen;
