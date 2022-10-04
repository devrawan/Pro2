import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    label: 'yes',
  },
  {
    label: 'No',
  },
];

const RadView = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 17, fontWeight: '500'}}>{title}</Text>
      <RadioButtonRN
        style={{
          width: '50%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingStart: 20,
        }}
        textStyle={{fontSize: 16, marginStart: 10}}
        circleSize={15}
        icon={<Icon name="check-circle" size={20} color="#7DD25A" />}
        box={false}
        data={data}
        selectedBtn={e => console.log(e)}
      />
    </View>
  );
};

export default RadView;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    // backgroundColor: 'gray',
    width: '100%',
    marginBottom: 20,
  },
});
