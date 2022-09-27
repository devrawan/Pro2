// import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
 import { SafeAreaView, Text, View, Image, Button, TouchableOpacity,StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home ,Restaurant ,OrderDelivery,Hello,Login,SignUp,HomeUser,Headerr} from './screens'
import Tabs from './navigation/tabs';
// const avatar_1 = require("./assets/images/avatar-1.jpg");
import avatar_1 from './constants/images'

const Stack = createStackNavigator();
const App = () => {

 
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name='Hello' component={Hello}/> 
      <Stack.Screen name='Login' component={Login}/> 
      <Stack.Screen name='SignUp' component={SignUp}/> 
      <Stack.Screen name='HomeUser' component={HomeUser}/> 
      <Stack.Screen name='Headerr' component={Headerr}/> 

    </Stack.Navigator>
   </NavigationContainer>


  );
}


export default App;
const styles =StyleSheet.create({
  cont:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'pink',
    paddingVertical:40,
    paddingHorizontal:20
  }
})




{/* <View style={styles.cont}>
 <View style={{marginVertical:5,width:80,height:80,backgroundColor:'gray',justifyContent:'center',alignItems:'center'}}>
<Text>Rawan</Text>
 </View>
 <View style={{marginVertical:5,width:80,height:80,backgroundColor:'blue',justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'white'}}>Radwan</Text>
 </View>
 <View style={{marginVertical:5,width:80,height:80,justifyContent:'center',alignItems:'center'}}>
<Image source={avatar_1} style={{width:50,height:50}} />
 </View>
</View> */}




// <NavigationContainer>
// <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName={'Home'}>
//   <Stack.Screen name='Home' component={Tabs}/> 
//   <Stack.Screen name='Restaurant' component={Restaurant}/> 
//   <Stack.Screen name='OrderDelivery' component={OrderDelivery}/> 

// </Stack.Navigator>
// </NavigationContainer>