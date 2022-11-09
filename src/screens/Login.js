import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  FlatList,
} from 'react-native';
import {color} from 'react-native-reanimated';
const Widthh = Dimensions.get('window').width;
const Hiehtt = Dimensions.get('window').height;
import {images} from './../../constants/index';

const Login = ({navigation}) => {
  const [person, setPerson] = useState('patient');
  const [text, onChangeText] = useState('');
  const [passs, setPasss] = useState('');
  const [isp, setIsp] = useState(true);
  const [idem, setIdem] = useState(true);

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const IsEmail = email => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    console.log(regex.test(email));
    console.log(email);
    if (regex.test(email)) {
      setIdem(true);
    } else {
      setIdem(false);
    }

    return regex.test(email);
  };

  const isPassword = pass => {
    let regex = new RegExp(
      /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/,
    );
    console.log(regex.test(pass));
    console.log(pass);
    if (regex.test(pass)) {
      setIsp(true);
    } else {
      setIsp(false);
    }

    return regex.test(pass);
  };

  const handle = (e, p) => {
    if (IsEmail(e) && isPassword(p)) {
      navigation.navigate('HomeUser');
    }
  };

  const onClickk = val => {
    setPerson(val);
  };

  const onhandler = () => {
    Keyboard.dismiss();
  };

  {
    /* <FlatList
data={DATA}
renderItem={({item:{id,title}})=>{
    //direct 
    return (<Text> id</Text>)
}}
keyExtractor={item => item.id}
/> */
  }

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
              marginRight: -15,
              // marginRight:`${{person}=="patient"? 2 : 0}`,

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
              //   marginRight:`${{person}=="doctor"? -15 : 0}`,
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
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{email: '', password: ''}}
              onSubmit={values => console.log(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                touched,
              }) => (
                <>
                  <View style={styles.formView_2}>
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
                      // onChangeText={onChangeText}
                      // value={text}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      placeholder="Jaboon@gmail.com"
                      style={{
                        fontSize: 18,
                        marginVertical: 8,
                        padding: 10,
                        width: Widthh * 0.9,
                        height: 45,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: idem ? '#999999' : 'red',
                      }}
                    />
                    {errors.email && touched.email && (
                      <Text
                        style={{fontSize: 16, color: 'red', marginBottom: 10}}>
                        {errors.email}
                      </Text>
                    )}
                    {/* {idem ? <Text></Text> 
    : <Text style={{color:'red',marginLeft:10,marginBottom:10}}>Email not valid !!</Text> } */}
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '400',
                        paddingHorizontal: 5,
                      }}>
                      Password
                    </Text>
                    {/* <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}> */}
                    <TextInput
                      //  value={passs}

                      //  onChangeText={setPasss}
                      // secureTextEntry
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
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
                        borderColor: isp ? '#999999' : 'red',
                      }}
                    />
                    {errors.password && touched.password && (
                      <Text
                        style={{fontSize: 16, color: 'red', marginBottom: 10}}>
                        {errors.password}
                      </Text>
                    )}
                    {/* {isp ? <Text></Text> : 
    <Text style={{color:'red',marginLeft:10,marginBottom:10}}>password  not valid !!</Text>} */}

                    {/* <Image
                  source={images.eyeic}
                  style={{
                    marginRight: 25,
                    marginLeft: -40,
                    resizeMode: 'contain',
                    width: 25,
                    height: 25,
                  }}
                /> */}
                    {/* </View> */}
                    <View
                      style={{
                        height: Hiehtt * 0.05,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        paddingHorizontal: 10,
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
                        <Text style={{color: 'black'}}> Remember me </Text>
                      </View>
                      <Text> Forget Password?</Text>
                    </View>
                  </View>
                  {/* <TouchableOpacity
                    onPress={handleSubmit}
                    // onPress={() => {
                    //   handle(text,passs);
                    //   setIsp(true)
                    //   setIdem(true)

                    // }}
                    activeOpacity={0.8}
                    style={{
                      backgroundColor: 'red',
                      width: 168,
                      height: 45,
                      backgroundColor: '#3C67AF',
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                      borderRadius: 15,
                    }}>
                    <Text style={{color: 'white', fontSize: 17}}>Login</Text>
                  </TouchableOpacity> */}
                </>
              )}
            </Formik>
          </KeyboardAvoidingView>
        ) : (
          <View style={styles.formView_2}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '400',
                paddingHorizontal: 5,
              }}>
              RIZIV number
            </Text>
            <TextInput
              placeholder="154887565266641"
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
                value={passs}
                onChangeText={setPasss}
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

            <View
              style={{
                height: Hiehtt * 0.05,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                paddingHorizontal: 10,
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
                <Text style={{color: 'black'}}> Remember me </Text>
              </View>
              <Text> Forget Password?</Text>
            </View>
          </View>
        )}

        <View style={styles.foView_2}>
          <TouchableOpacity
            // onPress={() => {
            //   handle(text,passs);
            //   setIsp(true)
            //   setIdem(true)
              
            // }}
            activeOpacity={0.8}
            style={{
              width: 168,
              height: 45,
              backgroundColor: '#3C67AF',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
            }}>
            <Text style={{color: 'white', fontSize: 17}}>Login</Text>
          </TouchableOpacity>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 16}}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text
                style={{
                  color: '#3C67AF',
                  fontSize: 14,
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                {' '}
                Sign Up
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
export default Login;

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
    height: Hiehtt * 0.2,
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
    marginVertical: 5,
    width: Widthh,
    height: Hiehtt * 0.12,
    //   backgroundColor: 'white',
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
    marginVertical: 5,
    width: Widthh,
    height: Hiehtt * 0.3,
    //  backgroundColor: 'pink',
    padding: 20,
  },
  foView_2: {
    width: Widthh,
    height: Hiehtt * 0.15,
    // backgroundColor:'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
