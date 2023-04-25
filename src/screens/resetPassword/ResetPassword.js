import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import styles from './resetPasswordStyle';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import {THEME_COLORS} from '../../constant/Theme';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

export default function ResetPassword() {
  const [resetPasswordMode, setresetPasswordMode] = useState('1');
  // Email Hooks
  const [email, setemail] = useState('');
  const [isBadEmail, setisBadEmail] = useState(false);
  const [isEmailOk, setisEmailOk] = useState(false);
  //     Password Hooks
  const [phone, setphone] = useState('');
  const [isBadPhone, setisBadPhone] = useState(false);
  const [isPhoneOk, setisPhoneOk] = useState(false);

  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  const handlePasswordReset = () => {
    if (email.length == 0) {
      setisBadEmail(true);
    }
    if (phone.length < 9) {
      setisBadPhone(true);
    }
    if (email || phone) {
      startReset();
    }
  };
  const startReset = () => {
    navigation.navigate('OTPscreen', {
      NETWORKMODE: resetPasswordMode == 1 ? email : phone,
    });
  };
  function checkIsFieldsOK() {
    if (email.length >= 1) {
      setisBadEmail(false);
      setisEmailOk(true);
    } else {
      setisEmailOk(false);
    }
    if (phone.length >= 9) {
      setisBadPhone(false);
      setisPhoneOk(true);
    } else {
      setisPhoneOk(false);
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={THEME_COLORS.white}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          leftIcon={require('../../assets/icons/back.png')}
          onLeftIconPress={handleBack}
        />
        <View style={styles.section}>
          <Text style={styles.heading}>Forgot Your Password?</Text>
          <Text style={styles.description}>
            Enter your email or your phone number, we will send you confirmation
            code
          </Text>
          <View style={styles.resetMode}>
            <TouchableOpacity
              style={[
                styles.modeButton,
                {
                  backgroundColor:
                    resetPasswordMode == 1
                      ? THEME_COLORS.white
                      : THEME_COLORS.lightgray,
                },
              ]}
              onPress={() => setresetPasswordMode('1')}>
              <Text
                style={[
                  styles.modeButtonText,
                  {color: resetPasswordMode == 1 ? THEME_COLORS.green : 'gray'},
                ]}>
                Email
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modeButton,
                {
                  backgroundColor:
                    resetPasswordMode == 2
                      ? THEME_COLORS.white
                      : THEME_COLORS.lightgray,
                },
              ]}
              onPress={() => setresetPasswordMode('2')}>
              <Text
                style={[
                  styles.modeButtonText,
                  {color: resetPasswordMode == 2 ? THEME_COLORS.green : 'gray'},
                ]}>
                Phone
              </Text>
            </TouchableOpacity>
          </View>
          {resetPasswordMode == 1 ? (
            <Input
              placeHolder={'Enter your email'}
              marginVeriticle={12}
              leftIcon={require('../../assets/icons/envelope.png')}
              rightIcon={require('../../assets/icons/ok.png')}
              error={isBadEmail}
              ok={isEmailOk}
              value={email}
              onChange={text => {
                setemail(text);
                checkIsFieldsOK();
              }}
              useRightIcon={true}
            />
          ) : (
            <Input
              placeHolder={'Enter your Phone Number'}
              marginVeriticle={12}
              leftIcon={require('../../assets/icons/phone.png')}
              rightIcon={require('../../assets/icons/ok.png')}
              error={isBadPhone}
              ok={isPhoneOk}
              value={phone}
              onChange={text => {
                setphone(text);
                checkIsFieldsOK();
              }}
              useRightIcon={true}
              keyBoardType={'number-pad'}
            />
          )}
          <Button
            bgColor={THEME_COLORS.green}
            paddingVerticle={14}
            title={'Reset Password'}
            textColor={THEME_COLORS.white}
            marginVerticle={20}
            onpress={handlePasswordReset}
          />

          {/* {isBadEmail ? (
          <View style={[styles.inputHandling, {marginTop: 0}]}>
            <Text style={styles.error}>*The email you entered is wrong</Text>
            <Text style={styles.forgetPassword}></Text>
          </View>
        ) : null} */}
        </View>
      </ScrollView>
    </View>
  );
}
