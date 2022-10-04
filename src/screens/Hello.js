import React ,{useState} from "react";
import {View ,Text,StyleSheet,ScrollView,Image,SafeAreaView,TouchableOpacity,Dimensions,Modal,Pressable,FlatList} from 'react-native';
import {images} from './../../constants/index'

const Widthh = Dimensions.get('window').width;
const Hiehtt =Dimensions.get('window').height;
const Tex = [
    " Chat Arts application helps you for an online consultationto  be carried out with ageneral practitioner via video call. \n You can after the call consult all necessary documents and download.",
    "We are available to help you Every working day  Every working day from 7 am to 12 am. \n You can confirm your live location and get the hulpfull help from the doctor help from the doctor.",
    "SWe are available to help you Every working  Every working day from 7 am to 12 am. \n  You can confirm your live location and get the hulpfull help from the doctor help from the doctor."

]
const kvArray = [
    { key: 1, value: "Chat Arts application helps you for an online consultationto  be carried out with ageneral practitioner via video call. \n You can after the call consult all necessary documents and download." },
    { key: 2, value:"We are available to help you Every working day  Every working day from 7 am to 12 am. \n You can confirm your live location and get the hulpfull help from the doctor help from the doctor.",},
    { key: 3, value:"SWe are available to help you Every working  Every working day from 7 am to 12 am. \n  You can confirm your live location and get the hulpfull help from the doctor help from the doctor."
},
  ];
  
const Hello =({ navigation })=>{

    const [texActive,setTexActive]=useState(0);
    onchange =(nativeEvent)=>{
    if(nativeEvent){
        const slide = Math.ceil(nativeEvent.contentOffset.x/ nativeEvent.layoutMeasurement.width);
        if(slide != texActive){
    setTexActive(slide)
        }
    }
    }
    return(
        <SafeAreaView style={Styles.cont}>
            <View style={Styles.logoView}>
            <Image source={images.group}  style={Styles.imgStyle}/>
            </View>

            <View style={Styles.textView}>
                <ScrollView
                onScroll={({nativeEvent})=> onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                >
                    {kvArray.map((item,index)=> 
                    <View key={index} style={{paddingHorizontal:25,width:Widthh,flexDirection:'row',justifyContent:'center',paddingVertical:20}}>
                    <Text style={Styles.textStyle} key={index}> {item.value}</Text>

                    </View>)}
               
                   
                </ScrollView>

                <View style={Styles.wrapDot}>
                {kvArray.map((item,index)=> 
                <Text key={index} style={texActive == index ? Styles.dotAct :Styles.dot}> ● </Text>)}
                </View>

            </View>

         

            <View style={Styles.BtnsView} >
                <TouchableOpacity 
                 onPress={() => navigation.navigate('Login')}
                style={{ width:162,height:45,backgroundColor:'#e0e0e0',justifyContent:'center',alignItems:'center',borderRadius:15}}>
                    <Text style={{color:'#3C67AF',fontSize:17}}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => navigation.navigate('Headerr')}
                style={{marginLeft:-15,width:162,height:45,backgroundColor:'#3C67AF',justifyContent:'center',alignItems:'center',borderRadius:15}}>
                    <Text style={{color:'white',fontSize:17}}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Hello;
const Styles =StyleSheet.create({
    cont:{
        flex:1,
        height:Hiehtt,
        width:Widthh,
        // backgroundColor:'red',
        flexDirection:'column',
        alignItems:'center',
    },
    logoView:{
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'pink',
        width:Widthh,
        height:Hiehtt*0.33,
        paddingTop:40,
        marginBottom:10
    },
    imgStyle:{
        width:220,
        height:190,
        resizeMode:'contain'
    },
    textView:{
        // backgroundColor:'blue',
        width:Widthh,
        height:Hiehtt*0.3,
        // marginBottom:10,
        // paddingTop:10
    },
    textStyle:{
        flex:1,
        fontSize:22,
        color:'black',
        textAlign:'center'
    },
  
    BtnsView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'pink',
        width:Widthh,
        height:Hiehtt*0.25
        },
        wrapDot:{
            position:'absolute',
            bottom:0,
flexDirection:'row',
alignSelf:'center'

        },
        dotAct:{
            margin:3,
            color:'#3C67AF'
        },
        dot:{
            margin :3,
            color:'white'
        }

})



// Chat Arts application helps youfor an online consultationto be carried out with a general practitioner via video call.You can after the call consult all necessary documents and download.