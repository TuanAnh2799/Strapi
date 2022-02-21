import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawerScreen = (props) => {
  return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}
        contentContainerStyle={{backgroundColor:'#8200d6'}}
        >  
        <View style={{flexDirection:'row', width:'100%',}}>
            <View>
                <Image source={{uri: 'https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg'}} 
                style={{width: 80, height: 80, borderRadius: 40, marginLeft: 15, marginTop: 2, marginBottom: 5,borderWidth:0.5, borderColor:'#fff'}}/>
            </View>
            
            <View style={{width: '50%'}}>
                <Text style={{fontSize: 18, fontWeight: '700', color:'white', marginLeft: 15, marginTop: 12}}>Tuấn Anh</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize: 14, color:'white', marginLeft:15, marginTop: 15}}>1500 coins</Text>
                    <View style={{marginLeft: 5, marginTop:15}}>
                        <FontAwesome5 name='coins' size={15} color='white'/>
                    </View>
                </View>
            </View>

            <View style={{justifyContent:'center', alignItems:'center', marginLeft: 2}}>
                <Icon name="account-edit-outline" size={25} color="white"/>
            </View>

        </View>
            <View style={{backgroundColor:'#fff'}}>
                <DrawerItemList {...props} />
            </View>
            
        </DrawerContentScrollView>

        {/* bottom drawer */}
        <View style={{height: 50, padding: 10, borderTopWidth: 1, borderTopColor: "#ccc"}}>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <View>
                    <Icon name="logout" size={25} color="black"/>
                </View>
                <View>
                    <Text style={{fontSize: 16, marginLeft: 5}}>Logout</Text>
                </View>
            </View>
        </View>
      </View>
    
  )
}

export default CustomDrawerScreen

const styles = StyleSheet.create({})