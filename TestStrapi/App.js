import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabStackScreen from './src/Navigations/TabStack';
import DrawerStack from './src/Navigations/DrawerStack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
}

export default App
