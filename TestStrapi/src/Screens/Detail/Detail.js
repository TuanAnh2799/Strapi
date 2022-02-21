import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>DetailScreen</Text>
      <Button title='Trang chủ' onPress={()=>navigation.navigate("Home")}/>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})