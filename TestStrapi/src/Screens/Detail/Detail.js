import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useFetch from '../../API/useFetch';

const DetailScreen = ({navigation, route}) => {

  const id = route.params.id;
  const {loading, error, data} = useFetch('http://192.168.0.102:1337/reviews/' +id);

  if(loading) return <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}><Text>Loading...</Text></View>
  if(error !== null) return <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}><Text>Error...</Text></View>

  console.log(data);
  return (
    <View>
      <Text>DetailScreen {id}</Text>
      <Button title='Trang chủ' onPress={()=>navigation.navigate("Home")}/>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})