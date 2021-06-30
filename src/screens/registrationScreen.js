import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Touchable} from 'react-native';

function registrationScreen(props) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [symptom1, setSymptom1] = useState(false);
  const [symptom2, setSymptom2] = useState(false);
  const [symptom3, setSymptom3] = useState(false);
  const [symptom4, setSymptom4] = useState(false);
  const [symptom5, setSymptom5] = useState(false);
  const [symptom6, setSymptom6] = useState(false);
  const [symptom7, setSymptom7] = useState(false);
  const [symptom8, setSymptom8] = useState(false);
  const [symptom9, setSymptom9] = useState(false);
  const [symptom10, setSymptom10] = useState(false);
  const [symptomYes, setSymptomYes] = useState(false);
  const [symptomNo, setSymptomNo] = useState(false);
  const [medicalHistory, setMedicalHistory] = useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topFixedSec}>
        <ImageBackground
          source={require('../../images/blueImage.jpeg')}
          style={{
            height: Dimensions.get('window').height / 2.5,
            width: '100%',
          }}>
          <View style={styles.brandView}>
            <Text style={styles.brandViewText}>New patient enrollment</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.btmSec}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.title}>patient details</Text>
            <View style={styles.sectionStyle}>
              <Text style={styles.subTitleStyle}>Name</Text>
              <View style={styles.halfFieldSec}>
                <TextInput
                  style={[styles.inputFieldStyle, styles.halfInputFieldStyle]}
                  placeholder="Enter your first name"
                  onChangeText={firstname => setFirstname(firstname)}
                  defaultValue={firstname}
                />
                <TextInput
                  style={[styles.inputFieldStyle, styles.halfInputFieldStyle]}
                  placeholder="Enter your last name"
                  onChangeText={lastname => setLastname(lastname)}
                  defaultValue={lastname}
                />
              </View>
            </View>
            <View style={styles.sectionStyle}>
              <Text style={styles.subTitleStyle}>BirthDate</Text>
              <TextInput
                style={styles.inputFieldStyle}
                placeholder="MM-DD-YYYY"
                onChangeText={dateOfBirth => setDateOfBirth(dateOfBirth)}
                defaultValue={dateOfBirth}
              />
            </View>
            <View style={styles.sectionStyle}>
              <Text style={styles.subTitleStyle}>Gender</Text>
              <View style={styles.halfFieldSec}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>Male</Text>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>Female</Text>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox1}
                    onValueChange={newValue => setToggleCheckBox1(newValue)}
                  />
                </View>
              </View>
            </View>
            <View style={styles.sectionStyle}>
              <Text style={styles.subTitleStyle}>Phone number</Text>
              <TextInput
                style={styles.inputFieldStyle}
                placeholder="999999999"
                onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                defaultValue={phoneNumber}
              />
            </View>
            <View style={styles.sectionStyle}>
              <Text style={styles.subTitleStyle}>Email</Text>
              <TextInput
                style={styles.inputFieldStyle}
                placeholder="example@.example.com"
                onChangeText={email => setEmail(email)}
                defaultValue={email}
              />
            </View>
            <View style={styles.sectionStyle}>
              <Text style={styles.subTitleStyle}>Address</Text>
              <TextInput
                style={{...styles.inputFieldStyle, marginBottom: 15}}
                placeholder="street"
                onChangeText={street => setStreet(street)}
                defaultValue={street}
              />
              <TextInput
                style={{...styles.inputFieldStyle, marginBottom: 15}}
                placeholder="city"
                onChangeText={city => setCity(city)}
                defaultValue={city}
              />
              <TextInput
                style={{...styles.inputFieldStyle, marginBottom: 15}}
                placeholder="state"
                onChangeText={state => setState(state)}
                defaultValue={state}
              />
              <TextInput
                style={styles.inputFieldStyle}
                placeholder="pincode"
                onChangeText={pincode => setPincode(pincode)}
                defaultValue={pincode}
              />
            </View>
          </View>

          <View>
            <Text style={styles.title}>Emergency Contact</Text>
            <View style={styles.halfFieldSec}>
              <TextInput
                style={[styles.inputFieldStyle, styles.halfInputFieldStyle]}
                placeholder="Enter your name"
                onChangeText={emergencyName => setEmergencyName(emergencyName)}
                defaultValue={emergencyName}
              />
              <TextInput
                style={[styles.inputFieldStyle, styles.halfInputFieldStyle]}
                placeholder="Enter your mobile number"
                onChangeText={emergencyPhone =>
                  setEmergencyPhone(emergencyPhone)
                }
                defaultValue={emergencyPhone}
              />
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <Text style={styles.title}>Health and Medical History</Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text style={styles.subTitleStyle}>
              Please check the symptoms that apply
            </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <CheckBox
                  disabled={false}
                  value={symptom1}
                  onValueChange={newValue => setSymptom1(newValue)}
                />
                <Text>high fever</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={symptom2}
                  onValueChange={newValue => setSymptom2(newValue)}
                />
                <Text>difficulty in breathing</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={symptom3}
                  onValueChange={newValue => setSymptom3(newValue)}
                />
                <Text>body aches</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={symptom4}
                  onValueChange={newValue => setSymptom4(newValue)}
                />
                <Text>runny nose</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={symptom5}
                  onValueChange={newValue => setSymptom5(newValue)}
                />
                <Text>diarrhea</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={symptom6}
                  onValueChange={newValue => setSymptom6(newValue)}
                />
                <Text>cough</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={symptom7}
                  onValueChange={newValue => setSymptom7(newValue)}
                />
                <Text>persistant pain</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={symptom8}
                  onValueChange={newValue => setSymptom8(newValue)}
                />
                <Text>nasal congestion</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={symptom9}
                  onValueChange={newValue => setSymptom9(newValue)}
                />
                <Text>sore throat</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={symptom10}
                  onValueChange={newValue => setSymptom10(newValue)}
                />
                <Text>other</Text>
              </View>
            </View>
          </View>

          <View style={styles.sectionStyle}>
            <Text style={styles.subTitleStyle}>
              Taking any medications, currently?
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                value={symptomYes}
                onValueChange={newValue => setSymptomYes(newValue)}
              />
              <Text>yes</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                value={symptomNo}
                onValueChange={newValue => setSymptomNo(newValue)}
              />
              <Text>no</Text>
            </View>
          </View>
          <View style={styles.sectionStyle}>
            <Text style={styles.subTitleStyle}>
              If yes, please list it here
            </Text>
            <TextInput
              style={{...styles.inputFieldStyle1, marginBottom: 15}}
              placeholder="medical history details..."
              onChangeText={medicalHistory => setMedicalHistory(medicalHistory)}
              defaultValue={medicalHistory}
            />
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.submitBtnSec}>
            <Text
              style={styles.submitBtn}
              onPress={() =>
                props.navigation.navigate('Login', {
                  firstname: firstname,
                  lastname: lastname,
                  dateOfBirth: dateOfBirth,
                  toggleCheckBox: toggleCheckBox,
                  toggleCheckBox1: toggleCheckBox1,
                  phoneNumber: phoneNumber,
                  email: email,
                  street: street,
                  city: city,
                  state: state,
                  pincode: pincode,
                  emergencyName: emergencyName,
                  emergencyPhone: emergencyPhone,
                  symptom1: symptom1,
                  symptom2: symptom2,
                  symptom3: symptom3,
                  symptom4: symptom4,
                  symptom5: symptom5,
                  symptom6: symptom6,
                  symptom7: symptom7,
                  symptom8: symptom8,
                  symptom9: symptom9,
                  symptom10: symptom10,
                  symptomYes: symptomYes,
                  symptomNo: symptomNo,
                  medicalHistory: medicalHistory,
                })
              }>
              Submit
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputFieldStyle: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 14,
    color: '#333333',
  },
  halfInputFieldStyle: {
    width: '47.5%',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  topFixedSec: {
    backgroundColor: '#fff',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btmSec: {
    backgroundColor: '#fff',
    flex: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 16,
    color: '#244994',
    marginBottom: 10,
  },
  subTitleStyle: {
    fontSize: 14,
    color: '#454545',
    marginBottom: 5,
  },
  halfFieldSec: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionStyle: {
    flex: 1,
    marginBottom: 20,
  },
  submitBtnSec: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 6,
    backgroundColor: '#244994',
  },
  submitBtn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 14,
    color: '#fff',
  },
  inputFieldStyle1: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 6,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 14,
    color: '#333333',
  },
});

export default registrationScreen;
