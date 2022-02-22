import React from 'react';
import DrawerStack from './src/Navigations/DrawerStack';
import { LogBox } from 'react-native';
import {ApolloClient,InMemoryCache, ApolloProvider} from "@apollo/client"


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const client = new ApolloClient({
  uri: 'http://192.168.0.102:1337/graphql', //http://localhost:1337/graphql
  cache: new InMemoryCache()
})

const App = () => {
  return (
      <ApolloProvider client={client}>
        <DrawerStack/>
      </ApolloProvider>
  )
}

export default App
