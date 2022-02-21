import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title='Chi tiết' onPress={()=>navigation.navigate('Detail')}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})