import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './otpVerificationStyle';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import {THEME_COLORS} from '../../constant/Theme';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {useRoute} from '@react-navigation/native';
import OTPFields from '../../components/otpInputs/OTPFields';
export default function OtpVerification() {
  const [resetAddress, setresetAddress] = useState('');
  //
  const [field1, setfield1] = useState('');
  const [field2, setfield2] = useState('');
  const [field3, setfield3] = useState('');
  const [field4, setfield4] = useState('');
  //
  const [isOTPMatched, setisOTPMatched] = useState(false);
  const [buttonDisable, setbuttonDisable] = useState(true);

  const route = useRoute().params;
  useEffect(() => {
    const exectValue = route.NETWORKMODE.slice(0, 8);
    setresetAddress(exectValue);
  }, []);

  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  console.log(isOTPMatched);
  const handleOTPVerification = () => {
    setTimeout(() => {
      if (isOTPMatched == true) {
        navigation.navigate('NewPassword');
      }
    }, 1000);
  };
  function fieldsChecker() {
    setbuttonDisable(false);

    setisOTPMatched(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={THEME_COLORS.white}
      />
      <ScrollView>
        <Header
          leftIcon={require('../../assets/icons/back.png')}
          onLeftIconPress={handleBack}
        />
        <View style={styles.section}>
          <Text style={styles.heading}>Forgot Your Password?</Text>
          <Text style={styles.description}>
            Enter code that we have sent to your number {resetAddress}***
          </Text>
          <OTPFields
            field1={field1}
            field2={field2}
            field3={field3}
            field4={field4}
            setfield1={setfield1}
            setfield2={setfield2}
            setfield3={setfield3}
            setfield4={setfield4}
            onchange={fieldsChecker}
          />
          <Button
            bgColor={THEME_COLORS.green}
            paddingVerticle={14}
            title={'Verify'}
            textColor={THEME_COLORS.white}
            marginVerticle={20}
            onpress={handleOTPVerification}
            disabled={buttonDisable}
          />
          <View style={styles.resendCodeDiv}>
            <Text style={styles.leftText}>Didn’t receive the code?</Text>
            <TouchableOpacity>
              <Text style={styles.resend}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
