import { Button, FlatList, StyleSheet, Text, View,RefreshControl, TouchableOpacity, TouchableNativeFeedbackBase, TouchableNativeFeedback } from 'react-native'
import React from 'react';
import useFetch from '../../API/useFetch';
import { useState } from 'react';



const HomeScreen = ({navigation}) => {
  let url = 'http://192.168.0.102:1337/reviews';

  const [refreshing, setRefreshing] = useState(false)
  
  const {loading, error, data} = useFetch('http://192.168.0.102:1337/reviews');
  //console.log(data);

  if(loading) return <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}><Text>Loading...</Text></View>
  if(error !== null) return <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}><Text>Error...</Text></View>
  
//   const _onRefresh = () => {
//     console.log('_onRefresh')
//     setRefreshing(true);
    
//     setRefreshing(false);
// };

  const renderItem = ({ item }) => (
    <TouchableNativeFeedback onPress={()=>navigation.navigate("Detail",{
      id: item.id,
    })}>
      <View style={{width:'48%', height: 120, borderWidth: 1, borderColor:'green', marginLeft:'1%', justifyContent:'center', alignItems:'center', marginTop: 2, borderRadius: 10}}>
        <View>
          <Text>Image</Text>
        </View>
        <View>
          <Text>{item.title}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text>Vote:</Text>
          <Text>{item.rating}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
    
  );

  return (
    <View style={{ flex: 1}}>
    {

    }
      <FlatList data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        // refreshControl={
        //  <RefreshControl 
        //     refreshing={refreshing} 
        //     onRefresh={_onRefresh}
        //     tintColor="#F8852D"/>
        // }
      />
    </View>
    
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})