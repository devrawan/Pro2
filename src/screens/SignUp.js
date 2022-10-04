import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {color} from 'react-native-reanimated';
const Widthh = Dimensions.get('window').width;
const Hiehtt = Dimensions.get('window').height;
import {images} from './../../constants/index';

const SignUp = ({navigation}) => {
  const [person, setPerson] = useState('patient');

  const onClickk = val => {
    setPerson(val);
  };

  const onhandler = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={onhandler}>
      <SafeAreaView style={styles.cont_2}>
        <View style={styles.imgView_2}>
          <Image source={images.group} style={styles.imStyle} />
        </View>

        <View style={styles.btnsView_2}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => onClickk('patient')}
            style={{
              zIndex: 1,
              marginRight: -15,
              width: 162,
              height: 45,
              backgroundColor: `${person == 'patient' ? '#3C67AF' : '#e0e0e0'}`,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
                color: `${person == 'patient' ? 'white' : '#3C67AF'}`,
              }}>
              Patient
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => onClickk('doctor')}
            style={{
              width: 162,
              height: 45,
              backgroundColor: `${person == 'doctor' ? '#3C67AF' : '#e0e0e0'}`,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: `${person == 'doctor' ? 'white' : '#3C67AF'}`,
                fontSize: 17,
                fontWeight: '500',
              }}>
              Doctor
            </Text>
          </TouchableOpacity>
        </View>

        {person == 'patient' ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.formView_2}>
              <View style={{width: Widthh * 0.9, marginTop: 5}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '400',
                    paddingHorizontal: 5,
                  }}>
                  Email
                </Text>
                <TextInput
                  placeholder="Jaboon@gmail.com"
                  style={{
                    fontSize: 18,
                    marginVertical: 8,
                    padding: 10,
                    width: Widthh * 0.9,
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#999999',
                  }}
                />
              </View>

              <View style={{width: Widthh * 0.9, marginTop: 5}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '400',
                    paddingHorizontal: 5,
                  }}>
                  Password
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    secureTextEntry
                    placeholder="****************"
                    style={{
                      fontSize: 23,
                      marginVertical: 8,
                      paddingHorizontal: 10,
                      paddingTop: 3,
                      width: Widthh * 0.9,
                      height: 45,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#999999',
                    }}
                  />
                  <Image
                    source={images.eyeic}
                    style={{
                      marginRight: 25,
                      marginLeft: -40,
                      resizeMode: 'contain',
                      width: 25,
                      height: 25,
                    }}
                  />
                </View>
              </View>

              <View style={{width: Widthh * 0.9, marginTop: 5}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '400',
                    paddingHorizontal: 5,
                  }}>
                  {' '}
                  Confirm Password
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    secureTextEntry
                    placeholder="****************"
                    style={{
                      fontSize: 23,
                      marginVertical: 8,
                      paddingHorizontal: 10,
                      paddingTop: 3,
                      width: Widthh * 0.9,
                      height: 45,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#999999',
                    }}
                  />
                  <Image
                    source={images.eyeic}
                    style={{
                      marginRight: 25,
                      marginLeft: -40,
                      resizeMode: 'contain',
                      width: 25,
                      height: 25,
                    }}
                  />
                </View>
              </View>

              <View style={{width: Widthh * 0.9, marginTop: 5}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '400',
                    paddingHorizontal: 5,
                  }}>
                  Phone number{' '}
                </Text>
                <TextInput
                  placeholder="282765432"
                  style={{
                    fontSize: 20,
                    marginVertical: 8,
                    paddingHorizontal: 10,
                    paddingTop: 3,
                    width: Widthh * 0.9,
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#999999',
                  }}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        ) : (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.formView_2}>
              <View style={{width: Widthh * 0.9, marginTop: 5}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '400',
                    paddingHorizontal: 5,
                  }}>
                  Name
                </Text>
                <TextInput
                  placeholder="Ali mohannd"
                  style={{
                    fontSize: 18,
                    marginVertical: 8,
                    padding: 10,
                    width: Widthh * 0.9,
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#999999',
                  }}
                />
              </View>
              <View style={{width: Widthh * 0.9, marginTop: 5}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '400',
                    paddingHorizontal: 5,
                  }}>
                  Email
                </Text>
                <TextInput
                  placeholder="Alimohannd@gmail.com"
                  style={{
                    fontSize: 18,
                    marginVertical: 8,
                    padding: 10,
                    width: Widthh * 0.9,
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#999999',
                  }}
                />
              </View>

              <View style={{width: Widthh * 0.9, marginTop: 5}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '400',
                    paddingHorizontal: 5,
                  }}>
                  Password
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    secureTextEntry
                    placeholder="****************"
                    style={{
                      fontSize: 23,
                      marginVertical: 8,
                      paddingHorizontal: 10,
                      paddingTop: 3,
                      width: Widthh * 0.9,
                      height: 45,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#999999',
                    }}
                  />
                  <Image
                    source={images.eyeic}
                    style={{
                      marginRight: 25,
                      marginLeft: -40,
                      resizeMode: 'contain',
                      width: 25,
                      height: 25,
                    }}
                  />
                </View>
              </View>

              <View style={{width: Widthh * 0.9, marginTop: 5}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '400',
                    paddingHorizontal: 5,
                  }}>
                  {' '}
                  Confirm Password
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    secureTextEntry
                    placeholder="****************"
                    style={{
                      fontSize: 23,
                      marginVertical: 8,
                      paddingHorizontal: 10,
                      paddingTop: 3,
                      width: Widthh * 0.9,
                      height: 45,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#999999',
                    }}
                  />
                  <Image
                    source={images.eyeic}
                    style={{
                      marginRight: 25,
                      marginLeft: -40,
                      resizeMode: 'contain',
                      width: 25,
                      height: 25,
                    }}
                  />
                </View>
              </View>

              <View style={{width: Widthh * 0.9, marginTop: 5}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '400',
                    paddingHorizontal: 5,
                  }}>
                  RIZIV number{' '}
                </Text>
                <TextInput
                  placeholder="0032485204874"
                  style={{
                    fontSize: 20,
                    marginVertical: 8,
                    paddingHorizontal: 10,
                    paddingTop: 3,
                    width: Widthh * 0.9,
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#999999',
                  }}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        )}

        <View style={styles.foView_2}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingHorizontal: 10,
              marginVertical: 15,
            }}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={images.editt}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  marginHorizontal: 5,
                }}
              />
              <Text style={{color: 'black'}}>
                {' '}
                I accept the terms of use and privacy policy{' '}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeUser');
            }}
            activeOpacity={0.8}
            style={{
              width: 168,
              height: 45,
              backgroundColor: '#3C67AF',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
            }}>
            <Text style={{color: 'white', fontSize: 17}}>Sign Up</Text>
          </TouchableOpacity>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16}}>Already have an account </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: '#3C67AF',
                  fontSize: 14,
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                {' '}
                Login
              </Text>
              <View
                style={{
                  borderBottomColor: '#3C67AF',
                  borderBottomWidth: 1,
                }}></View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  cont_2: {
    flex: 1,
    width: Widthh,
    height: Hiehtt,
    // backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgView_2: {
    marginVertical: 5,
    width: Widthh,
    height: Hiehtt * 0.15,
    //   backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imStyle: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },

  btnsView_2: {
    width: Widthh,
    height: Hiehtt * 0.05,
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle_2: {
    zIndex: 1,
    marginRight: -15,
    width: 162,
    height: 45,
    backgroundColor: '#3C67AF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  txtStyle_2: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  formView_2: {
    // backgroundColor: 'red',
    paddingVertical: 5,
    width: Widthh,
    justifyContent: 'center',
    alignItems: 'center',
    // height: Hiehtt * 0.5
    // ,
    // paddingHorizontal: 20
  },
  foView_2: {
    width: Widthh,
    // height: Hiehtt * 0.1,
    // backgroundColor:'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
