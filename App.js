
import React, { useState, useEffect } from 'react';
 import { SafeAreaView, Text, View, Image, Button, TouchableOpacity,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home ,Restaurant ,OrderDelivery,Hello,Login,SignUp,HomeUser,Headerr,FormScreen} from './src/screens'


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
      <Stack.Screen name='FormScreen' component={FormScreen}/> 


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


