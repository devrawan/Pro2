import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions, ImageBackground,Image } from 'react-native';

const Widthh = Dimensions.get('window').width;
const Hiehtt = Dimensions.get('window').height;
import { images } from './../constants/index'

const Headerr = () => {
    return (
        <View style={styles.cont}>
            <ImageBackground
                source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}}
                style={{ width: Widthh, height: Hiehtt * 0.37, paddingTop: 50, paddingHorizontal: 20, backgroundColor: '#00bfff', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 28, fontWeight: '500', color: 'white' }}>Safe Zone  </Text>
                <Text style={{ fontSize: 15, fontWeight: '400', color: 'white' }}>Visible on mobile and desktops screen </Text>
                <View style={{ width: 150, height: 80, backgroundColor: 'gray', alignSelf: 'flex-start', position: 'absolute', bottom: 0, marginLeft: 5, borderWidth: 3, borderBottomWidth: 0, borderColor: 'white' }}></View>
            </ImageBackground>
            <Image  source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8IQrpci_lb0KcKSoTutxeFX25kDxHk2SfcDguEUp&s'}}
             style={{ width: 110, height: 110, backgroundColor: 'white', borderRadius: 100, marginTop: -50, marginHorizontal: 10, marginLeft: 25,borderWidth:5,borderColor:'white'}}/>
       
        </View>
    )
}
export default Headerr;
const styles = StyleSheet.create({
    cont: {
        flex: 1,
        height: Hiehtt,
        width: Widthh,
        backgroundColor: 'black',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: -15,
        zIndex: 2,

    },
})
