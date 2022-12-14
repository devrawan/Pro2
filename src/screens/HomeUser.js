import React, {useState} from 'react';
import {
  View,
  Platform,
  Modal,
  Pressable,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  StatusBar
} from 'react-native';
import {opacity} from 'styled-system';
//usewindowDiemesions
const Widthh = Dimensions.get('window').width;
const Hiehtt = Dimensions.get('window').height;
import {images} from './../../constants/index';

// if (true){}  if &&
//
//

const Data = [
  {key: 0, title: 'Conclusion - 15/11/2021'},
  {key: 1, title: 'Conclusion - 22/3/2021'},
  {key: 2, title: 'Conclusion - 16/5/2021'},
  {key: 3, title: 'Conclusion - 12/8/2021'},
  {key: 4, title: 'Conclusion - 18/7/2021'},
  {key: 5, title: 'Conclusion - 13/12/2021'},
  {key: 6, title: 'Conclusion - 16/9/2021'},
  {key: 7, title: 'Conclusion - 16/9/2021'},
  {key: 8, title: 'Conclusion - 16/9/2021'},
  {key: 9, title: 'Conclusion - 16/9/2021'},
  {key: 10, title: 'Conclusion - 16/9/2021'},
  {key: 11, title: 'Conclusion - 16/9/2021'},
];
const Dataa = [
  {key: 4, title: 'Conclusion - 18/7/2021'},
  {key: 5, title: 'Conclusion - 13/12/2021'},
  {key: 6, title: 'Conclusion - 16/9/2021'},
  {key: 7, title: 'Conclusion - 16/9/2021'},
  {key: 8, title: 'Conclusion - 16/9/2021'},
  {key: 9, title: 'Conclusion - 16/9/2021'},
  {key: 10, title: 'Conclusion - 16/9/2021'},
  {key: 11, title: 'Conclusion - 16/9/2021'},
];
const HomeUser = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inn, setInn] = useState(0);

  const changee = val => {
    setInn(val);
  };

  const ScrolHeader = () => {
    return (
      <>
      
        <View
          style={{
            width: width,
            height: height * 0.22,
            // backgroundColor:'black',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 15,
            alignSelf:'center'
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '80%',
              backgroundColor: '#e0e0e0',
              width: '100%',
              borderRadius: 15,
            }}>
            <Text style={{fontSize: 20}}>Let's start </Text>
            <Text style={{fontSize: 26, marginBottom: 10}}>CONSULTATION</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: 150,
                height: 45,
                backgroundColor: '#3C67AF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
                marginVertical: 5,
              }}>
              <Text style={{color: 'white', fontSize: 17}}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: height * 0.06,
            // backgroundColor:'red',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>
            {' '}
            Last Documents{' '}
          </Text>
          <Text style={{fontSize: 20, fontWeight: '500'}}> View All </Text>
        </View>
      </>
    );
  };

  const renderItem = ({item}) => {
    return (
      <>
      
        <Modal
          animationType='none'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
            <View
              style={{
                width: 220,
                height: 120,
                backgroundColor: 'white',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <Text style={{marginBottom: 15, textAlign: 'center'}}>
                {' '}
                {`${inn} : ${Data[inn].title}`}{' '}
              </Text>
              <Pressable
                style={{
                  borderRadius: 15,
                  padding: 10,
                  elevation: 2,
                  backgroundColor: '#3C67AF',
                }}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Close
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          onPress={() => {
            setModalVisible(true);
            changee(item.key);
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: width*0.89 ,
              alignItems: 'center',
              height: 55,
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              borderRadius: 15,
              marginVertical: 5,
              borderWidth: 1,
              borderColor: 'gray',
            }}>
            <View
              style={{
                width: '75%',
                height: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <View
                style={{width: '20%', height: '90%', justifyContent: 'center'}}>
                <Image
                  source={images.c4}
                  style={{width: 40, height: 40, resizeMode: 'contain'}}
                />
              </View>
              <View
                style={{width: '78%', height: '90%', justifyContent: 'center'}}>
                <Text style={{fontSize: 15, color: 'black'}}>{item.title}</Text>
              </View>
            </View>
            <Image source={images.c3} />
          </View>
        </Pressable>
      </>
    );
  };
  
  const {height, width} = useWindowDimensions();
  return (
    <SafeAreaView style={{ 
      flex: 1,
      marginTop: StatusBar.currentHeight,
      width: width,
      height: height}}>
      <View
        style={{
          width: "100%",
          height: height * 0.1,
          // backgroundColor:'black',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            paddingHorizontal: 10,
            width: '80%',
              // backgroundColor:'red',
            height: '70%',
            marginHorizontal: 2,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image
            source={images.c1}
            style={{width: 35, height: 35, resizeMode: 'contain'}}
          />
          <Text
            style={{fontSize: 23, paddingHorizontal: 15, fontWeight: '500'}}>
            Hi ,Jan !
          </Text>
        </View>
        <View
          style={{
            width: '20%',
            //   backgroundColor:'white',
            height: '70%',
            marginHorizontal: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={images.c2}
            style={{width: 30, height: 30, resizeMode: 'contain'}}
          />
        </View>
      </View>

      <View
          style={{
            width: "100%",
            height: "20%",
            // backgroundColor:'pink',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 15,
            
            paddingVertical:5
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '90%',
              backgroundColor: '#e0e0e0',
              width: '80%',
              borderRadius: 15,
              paddingVertical:15
            }}>
            <Text style={{fontSize: 20}}>Let's start </Text>
            <Text style={{fontSize: 26, marginBottom: 10}}>CONSULTATION</Text>

            <TouchableOpacity
            onPress={()=>{navigation.navigate('FormScreen')}}
              activeOpacity={0.8}
              style={{
                width: 150,
                height: 45,
                backgroundColor: '#3C67AF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
                marginVertical: 5,
              }}>
              <Text style={{color: 'white', fontSize: 17}}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>




        <View
          style={{
            width: "100%",
            height: height * 0.06,
            // backgroundColor:'red',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>
            {' '}
            Last Documents{' '}
          </Text>
          <Text style={{fontSize: 20, fontWeight: '500'}}> View All </Text>
        </View>
     
      <View
        style={{
          // backgroundColor:"blue",
          width: "100%",
          alignItems: 'center',
         
          paddingVertical: 10,
        }}>
        <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                  //  ListHeaderComponent={<ScrolHeader/>}
                />

      </View>
    </SafeAreaView>
  );
};
export default HomeUser;
const Styles = StyleSheet.create({
  cont: {
    flex: 1,
    // backgroundColor:'pink',
    width: Widthh,
    height: Hiehtt,
  },
});
