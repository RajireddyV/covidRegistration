import React, {useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Linking} from 'react-native';

const loginScreen = props => {
  const firstname = props.route.params.firstname;
  const lastname = props.route.params.lastname;
  const dateOfBirth = props.route.params.dateOfBirth;
  const toggleCheckBox = props.route.params.toggleCheckBox;
  const toggleCheckBox1 = props.route.params.toggleCheckBox1;
  const phoneNumber = props.route.params.phoneNumber;
  const email = props.route.params.email;
  const street = props.route.params.street;
  const city = props.route.params.city;
  const state = props.route.params.state;
  const pincode = props.route.params.pincode;
  const emergencyName = props.route.params.emergencyName;
  const emergencyPhone = props.route.params.emergencyPhone;
  const symptom1 = props.route.params.symptom1;
  const symptom2 = props.route.params.symptom2;
  const symptom3 = props.route.params.symptom3;
  const symptom4 = props.route.params.symptom4;
  const symptom5 = props.route.params.symptom5;
  const symptom6 = props.route.params.symptom6;
  const symptom7 = props.route.params.symptom7;
  const symptom8 = props.route.params.symptom8;
  const symptom9 = props.route.params.symptom9;
  const symptom10 = props.route.params.symptom10;
  const medicalHistory = props.route.params.medicalHistory;
  const data = 917702863154;
  const whatsapp = link => {
    Linking.canOpenURL(link)
      .then(supported => {
        if (!supported) {
          console.log('supported', supported);
          Alert.alert(
            'Please install whats app to send direct message to a person via whats app',
          );
        } else {
          console.log('elsesupported', supported);
          return Linking.openURL(link);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  const telegram = link => {
    Linking.canOpenURL(link)
      .then(supported => {
        if (!supported) {
          console.log('supported', supported);
          Alert.alert(
            'Please install telegram to send direct message to a person via whats app',
          );
        } else {
          return Linking.openURL(link);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>firstname:{firstname}</Text>
      <Text>lastname:{lastname}</Text>
      <Text>dateOfBirth:{dateOfBirth}</Text>
      <Text>male:{toggleCheckBox ? 'true' : 'false'}</Text>
      <Text>female{toggleCheckBox1 ? 'true' : 'false'}</Text>
      <Text>phoneNumber:{phoneNumber}</Text>
      <Text>email:{email}</Text>
      <Text>street:{street}</Text>
      <Text>city:{city}</Text>
      <Text>state:{state}</Text>
      <Text>pincode:{pincode}</Text>
      <Text>emergencyName:{emergencyName}</Text>
      <Text>emergencyPhone:{emergencyPhone}</Text>
      <Text>high fever:{symptom1 ? 'true' : 'false'}</Text>
      <Text>difficulty in breathing:{symptom2 ? 'true' : 'false'}</Text>
      <Text>body aches:{symptom3 ? 'true' : 'false'}</Text>
      <Text>runny nose :{symptom4 ? 'true' : 'false'}</Text>
      <Text>diarrhea :{symptom5 ? 'true' : 'false'}</Text>
      <Text>cough :{symptom6 ? 'true' : 'false'}</Text>
      <Text>persistant pain :{symptom7 ? 'true' : 'false'}</Text>
      <Text>nasal congestion :{symptom8 ? 'true' : 'false'}</Text>
      <Text>sore throat :{symptom9 ? 'true' : 'false'}</Text>
      <Text>other :{symptom10 ? 'true' : 'false'}</Text>
      <Text>medicalHistory:{medicalHistory}</Text>
      <TouchableOpacity activeOpacity={0.8} style={styles.submitBtnSec}>
        <Text
          style={styles.submitBtn}
          onPress={() => props.navigation.goBack()}>
          Go Back
        </Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} style={styles.submitBtnSec1}>
        <Text
          style={styles.submitBtn}
          onPress={() => {
            whatsapp(`https://api.whatsapp.com/send/?phone=${phoneNumber}`);
          }}>
          Open whatsapp
        </Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} style={styles.submitBtnSec1}>
        <Text
          style={styles.submitBtn}
          onPress={() => {
            telegram('https://web.telegram.org/k/');
          }}>
          Open telegram
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 14,
    color: '#fff',
  },
  submitBtnSec: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    borderRadius: 6,
    backgroundColor: '#244994',
  },
  submitBtnSec1: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 6,
    backgroundColor: '#244994',
  },
});
export default loginScreen;
