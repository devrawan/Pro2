import React, {useState} from 'react';
import {
  Text,
  Pressable,
  View,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import {RadView, BoxInput} from '../components';
const FormScreen = () => {
  const {height, width} = useWindowDimensions();
  const onhandler = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={onhandler}>
      <SafeAreaView style={[styles.container, {width: width, height: height}]}>
        <View
          style={[styles.headerView, {width: width, height: height * 0.07}]}>
          <Pressable style={styles.backView}>
            <Text style={{fontSize: 17, color: '#007AFF'}}> Back</Text>
          </Pressable>
          <View style={styles.centerView}>
            <Text style={{fontSize: 17}}>Form </Text>
          </View>
        </View>

        <View style={styles.textView}>
          <Text style={{fontSize: 17}}>
            Fill out this symptom form so that the doctor can help you faster
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{paddingBottom: 50}}>
            <RadView title="Are you the patient ? " />
            <RadView title="Do you have a headache ? " />
            <RadView title="Do you have a stomachache? " />
            <RadView title="Are you dizzy ? " />

            <BoxInput title="How old is the patient?" />
            <BoxInput title="What other symptoms do you have?" />
            <BoxInput title="Do you have any comments?" />

            <View
              style={{
                width: width,
             marginTop:20,
             paddingBottom:30
                // backgroundColor: 'red',
               
                
               
              }}>
              <TouchableOpacity
                style={{
                  height: 50,
                  borderRadius: 15,
                  alignSelf: 'center',
                  width: '35%',
                  paddingVertical: 15,
                  paddingHorizontal: 40,
                  backgroundColor: '#3C67AF',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}> Check </Text>
              </TouchableOpacity>
            </View>
            <View style={{height:150,width: width}}></View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"pink",
    marginTop: StatusBar.currentHeight,
  
  },
  headerView: {
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
  },
  backView: {
    alignSelf: 'center',
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"pink",
  },
  centerView: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    //    backgroundColor:"red",
    paddingEnd: 50,
  },
  textView: {
    paddingHorizontal: 40,
    paddingTop: 21,
    paddingBottom: 25,
    // backgroundColor:"blue",
  },
});
