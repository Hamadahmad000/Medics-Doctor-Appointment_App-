import {View, Text, ScrollView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import styles from './signUpStyle';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {THEME_COLORS} from '../../constant/Theme';
import DialogueBox from '../../components/dialogueBox/DialogueBox';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import ErrorHelper from '../../helper/ErrorHelper';
import Loader from '../loader/Loader';
// import CheckBox from 'react-native-check-box';
export default function SignUp() {
  //  Hooks

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  //   const [isChecked, setisChecked] = useState(false);
  const [showDialogue, setshowDialogue] = useState(false);
  const [isPasswordSecure, setisPasswordSecure] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  //  Errors Hooks

  const [isError, setisError] = useState(null);

  const [isBadEmail, setisBadEmail] = useState(false);
  const [isBadPassword, setisBadPassword] = useState(false);
  const [isBadName, setisBadName] = useState(false);
  const [isEmailALreadyExist, setisEmailALreadyExist] = useState(false);

  // EveryThing OK Hooks

  const [isEmailOk, setisEmailOk] = useState(false);
  const [isPasswordOK, setisPasswordOK] = useState(false);
  const [isNameOk, setisNameOk] = useState(false);

  const navigation = useNavigation();

  //   Functions

  //   function handleCheckbox() {
  //     setisChecked(!isChecked);
  //   }

  const handleSignUp = () => {
    setisLoading(true);
    if (name.length == 0) {
      setisBadName(true);
      setisLoading(false);
    }
    if (email.length == 0) {
      setisBadEmail(true);
      setisLoading(false);
    }
    if (password.length == 0) {
      setisBadPassword(true);
      setisLoading(false);
    } else {
      if ((name, email, password)) {
        createUser();
      }
    }
  };
  const createUser = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      setshowDialogue(true);
      setisLoading(false);
    } catch (error) {
      setisError(error);

      setTimeout(() => {
        CatchError();
        setisLoading(false);
      }, 2000);
    }
  };

  //    Catching Response Error
  const CatchError = async () => {
    try {
      if (
        isError.message ==
        '[auth/weak-password] The given password is invalid. [ Password should be at least 6 characters ]'
      ) {
        setisBadPassword(true);
      }
      if (
        isError.message ==
        '[auth/email-already-in-use] The email address is already in use by another account.'
      ) {
        setisEmailALreadyExist(true);
      }
      if (
        isError.message ==
        '[auth/invalid-email] The email address is badly formatted.'
      ) {
        setisBadEmail(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //    Fields Checker
  function checkIsFieldsOK() {
    if (name.length >= 1) {
      setisBadName(false);
      setisNameOk(true);
    } else {
      setisNameOk(false);
    }
    if (email.length >= 8) {
      setisBadEmail(false);
      setisEmailOk(true);
    } else {
      setisEmailOk(false);
    }
    if (password.length >= 1) {
      setisBadPassword(false);
      setisPasswordOK(true);
    } else {
      setisPasswordOK(false);
    }
  }
  function handlePasswordVisible() {
    setisPasswordSecure(!isPasswordSecure);
  }

  function handleAccountMode() {
    navigation.replace('Login');
  }
  function handleBack() {
    try {
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }
  function gotoLogin() {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={THEME_COLORS.white}
        barStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          leftIcon={require('../../assets/icons/back.png')}
          title={'Sign Up'}
          onLeftIconPress={handleBack}
        />
        {isEmailALreadyExist ? (
          <Text style={styles.AccountError}>This email is already exist</Text>
        ) : null}

        <View style={styles.inputDivs}>
          <Input
            placeHolder={'Enter your name'}
            marginVeriticle={8}
            leftIcon={require('../../assets/icons/user.png')}
            rightIcon={require('../../assets/icons/ok.png')}
            error={isBadName}
            ok={isNameOk}
            value={name}
            onChange={text => {
              setname(text);
              checkIsFieldsOK();
            }}
            useRightIcon={true}
          />
          {isBadName ? (
            <View style={[styles.inputHandling, {marginTop: 0}]}>
              <Text style={styles.error}>*Please enter your name</Text>
              <Text style={styles.forgetPassword}></Text>
            </View>
          ) : null}
          <Input
            placeHolder={'Enter your email'}
            marginVeriticle={8}
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
          {isBadEmail ? (
            <View style={[styles.inputHandling, {marginTop: 0}]}>
              <Text style={styles.error}>*The email you entered is wrong</Text>
              <Text style={styles.forgetPassword}></Text>
            </View>
          ) : null}
          <Input
            placeHolder={'Enter your password'}
            marginVeriticle={8}
            leftIcon={require('../../assets/icons/lock.png')}
            leftIconSize={22}
            rightIconSize={22}
            rightIcon={
              isPasswordSecure
                ? require('../../assets/icons/view.png')
                : require('../../assets/icons/hide.png')
            }
            value={password}
            onChange={text => {
              setpassword(text);
              checkIsFieldsOK();
            }}
            error={isBadPassword}
            ok={isPasswordOK}
            password={true}
            secureTextEntry={isPasswordSecure}
            onRIghtIconPress={handlePasswordVisible}
          />
          <View style={[styles.inputHandling, {marginTop: 2}]}>
            {isBadPassword ? (
              <Text style={styles.error}>
                *The password you entered is wrong minimum 6 character
              </Text>
            ) : (
              <View></View>
            )}
            <Text style={styles.forgetPassword}></Text>
          </View>
          {/* <View style={styles.checkboxDiv}>
            <CheckBox isChecked={isChecked} onClick={handleCheckbox} />
          </View> */}
          <Button
            bgColor={THEME_COLORS.green}
            title={'Sign Up'}
            textColor={THEME_COLORS.white}
            paddingVerticle={16}
            marginVerticle={24}
            onpress={handleSignUp}
          />
          <View style={styles.registrationMode}>
            <Text style={styles.leftSideText}>Already have an account?</Text>
            <Text style={styles.signUpbutton} onPress={handleAccountMode}>
              Login
            </Text>
          </View>
        </View>
        <DialogueBox
          title={'Success'}
          description={'Your account has been successfully registered'}
          buttonText={'Login'}
          isvisible={showDialogue}
          onpress={gotoLogin}
        />
        <Loader isVisible={isLoading} />
      </ScrollView>
    </View>
  );
}
