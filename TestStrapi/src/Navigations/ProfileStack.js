import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../Screens/Profile/Profile';
import EditProfileScreen from '../Screens/Detail/EditProfile';


const Stack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="Profiles" component={ProfileScreen} />
        <Stack.Screen name="Edit" component={EditProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProfileStackScreen;