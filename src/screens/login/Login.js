import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './loginStyle';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {THEME_COLORS} from '../../constant/Theme';
import OrButton from '../../components/orButtons/OrButton';
import DialogueBox from '../../components/dialogueBox/DialogueBox';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Loader from '../loader/Loader';
export default function Login() {
  //  Hooks

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // const [isChecked, setisChecked] = useState(false);
  const [showDialogue, setshowDialogue] = useState(false);
  const [isPasswordSecure, setisPasswordSecure] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  //  Errors Hooks
  const [isError, setisError] = useState(null);
  const [isBadEmail, setisBadEmail] = useState(false);
  const [isBadPassword, setisBadPassword] = useState(false);
  const [isAccountBlocked, setisAccountBlocked] = useState(false);
  const [userNotExist, setuserNotExist] = useState(false);

  // EveryThing OK Hooks

  const [isEmailOk, setisEmailOk] = useState(false);
  const [isPasswordOK, setisPasswordOK] = useState(false);

  const navigation = useNavigation();

  //   Functions

  //   function handleCheckbox() {
  //     setisChecked(!isChecked);
  //   }

  const handleLogin = () => {
    setisLoading(true);
    if (email.length == 0) {
      setisBadEmail(true);
      setisLoading(false);
    }
    if (password.length == 0) {
      setisBadPassword(true);
      setisLoading(false);
    } else {
      if ((email, password)) {
        LoginUser();
      }
    }
  };

  const LoginUser = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      setshowDialogue(true);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      setisError(error);

      setTimeout(() => {
        CatchError();
      }, 2000);
    }
  };

  const CatchError = async () => {
    try {
      if (
        isError.message ==
        '[auth/user-not-found] There is no user record corresponding to this identifier. The user may have been deleted.'
      ) {
        setuserNotExist(true);
      }
      if (
        isError.message ==
        '[auth/wrong-password] The password is invalid or the user does not have a password.'
      ) {
        setisBadPassword(true);
      }
      if (
        isError.message ==
        '[auth/invalid-email] The email address is badly formatted.'
      ) {
        setisBadEmail(true);
      } else if (
        isError.message ==
        '[auth/too-many-requests] We have blocked all requests from this device due to unusual activity. Try again later. [ Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. ]'
      ) {
        setisAccountBlocked(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //    Fields Checker
  function checkIsFieldsOK() {
    if (email.length >= 1) {
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
    navigation.replace('Signup');
  }
  function handleBack() {
    navigation.goBack();
  }
  function gotoHomeScreen() {
    navigation.replace('Home');
  }
  function handlePasswordForget() {
    navigation.navigate('ResetPassword');
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
          title={'Login'}
          onLeftIconPress={handleBack}
        />

        {isAccountBlocked ? (
          <Text style={styles.accountError}>
            Your Device is Temporary Blocked
          </Text>
        ) : null}
        {userNotExist ? (
          <Text style={styles.accountError}>User is not registered</Text>
        ) : null}
        <View style={styles.inputDivs}>
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
          <View style={styles.inputHandling}>
            {isBadPassword ? (
              <Text style={styles.error}>
                *The password you entered is wrong
              </Text>
            ) : (
              <View></View>
            )}
            <TouchableOpacity onPress={handlePasswordForget}>
              <Text style={styles.forgetPassword}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <Button
            bgColor={THEME_COLORS.green}
            title={'Login'}
            textColor={THEME_COLORS.white}
            paddingVerticle={16}
            marginVerticle={24}
            onpress={handleLogin}
          />
          <View style={styles.registrationMode}>
            <Text style={styles.leftSideText}>Don’t have an account?</Text>
            <Text style={styles.signUpbutton} onPress={handleAccountMode}>
              Sign Up
            </Text>
          </View>
        </View>
        <View style={styles.optionDevider}>
          <View style={styles.deviderLine}></View>
          <Text style={styles.or}>OR</Text>
          <View style={styles.deviderLine}></View>
        </View>
        <View style={styles.orButtonsDiv}>
          <OrButton
            title={'Google'}
            bgColor={THEME_COLORS.white}
            border={0.2}
            borderColor={THEME_COLORS.iconGray}
            paddingVerticle={16}
            marginVerticle={8}
            icon={require('../../assets/icons/google.png')}
          />
          <OrButton
            title={'Apple'}
            bgColor={THEME_COLORS.white}
            border={0.2}
            borderColor={THEME_COLORS.iconGray}
            paddingVerticle={16}
            marginVerticle={8}
            icon={require('../../assets/icons/apple-logo.png')}
          />
          <OrButton
            title={'Facebook'}
            bgColor={THEME_COLORS.white}
            border={0.2}
            borderColor={THEME_COLORS.iconGray}
            paddingVerticle={16}
            marginVerticle={8}
            icon={require('../../assets/icons/facebook.png')}
          />
        </View>
        <DialogueBox
          title={'Yeay! Welcome Back'}
          description={'Once again you login successfully into medidoc app'}
          buttonText={'Go to home'}
          isvisible={showDialogue}
          onpress={gotoHomeScreen}
        />
        <Loader isVisible={isLoading} />
      </ScrollView>
    </View>
  );
}
