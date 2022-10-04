import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator,BottomTabBar } from "@react-navigation/bottom-tabs";
import {Home} from"../src/screens";
import { icons} from "../constants";
import {COLORS} from '../constants'
const Tab = createBottomTabNavigator();

const Tabs =()=>{
    return(
<Tab.Navigator>
    <Tab.Screen name="Home" component={Home} 
    options={{tabBarIcon :({focused}) =>
    (
    <Image 
    source={icons.cutlery}
     resizeMode="contain" 
     style={{width:25,height:25,
     
    }}
     />)}}/>
</Tab.Navigator>
    )
}
export default Tabs;