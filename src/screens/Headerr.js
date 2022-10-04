import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  Image,
  useWindowDimensions
} from 'react-native';


// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
import {images} from './../../constants/index';

const Headerr = () => {
    const {height, width } = useWindowDimensions();
  const Box = props => {
    return (
      <View
        style={{
          width: width * 0.94,
          paddingVertical: 5,
          paddingHorizontal: 5,
        }}>
        <Text style={{fontSize: 20, fontWeight: '500'}}>{props.title}</Text>

        <View
          style={{
            width: width * 0.9,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 70,
            paddingHorizontal: 0,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E8E4E4',
              borderRadius: 15,
              height: 50,
              width: 105,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#3C67AF', fontSize: 18}}> Open</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#E8E4E4',
              borderRadius: 15,
              height: 50,
              width: 105,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#3C67AF', fontSize: 18}}> Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E8E4E4',
              borderRadius: 15,
              height: 50,
              width: 105,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#3C67AF', fontSize: 18}}> Download</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.cont}>
      <View
        style={{
          marginVertical: 5,
          width: width * 0.94,
          height: height * 0.07,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <View style={{width: '40%'}}>
          <Text style={{color: 'blue', fontSize: 18}}>Back</Text>
        </View>
        <View style={{width: '60%'}}>
          <Text style={{fontSize: 18, alignContent: 'center'}}>Documents</Text>
        </View>
      </View>

      <View
        style={{
          marginVertical: 5,
          width: width * 0.94,
          height: height * 0.07,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          autoCapitalize="none"
          style={{
            fontSize: 18,
            width: '99%',
            marginVertical: 8,
            padding: 10,
            height: 45,
            borderWidth: 3,
            borderRadius: 15,
            borderColor: '#E8E4E4',
          }}
        />
      </View>

      <View
        style={{
          width: width * 0.94,
          paddingVertical: 15,
          paddingHorizontal: 5,
        }}>
        <Text style={{fontSize: 20, fontWeight: '500'}}>
          Consultation 05/11/2021
        </Text>
      </View>

      <Box title="Consultation" />
      <Box title="Certificate of illness" />
      <Box title="Medication presiption" />

      <View style={{borderBottomWidth: 1, width: width, marginTop: 5}}></View>
    </SafeAreaView>
  );
};
export default Headerr;
const styles = StyleSheet.create({
  cont: {
    flex: 1,
    // height: height,
    // width: width,
    // backgroundColor: 'pink',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
