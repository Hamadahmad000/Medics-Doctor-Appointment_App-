import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import styles from './newPasswordStyle';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import {THEME_COLORS} from '../../constant/Theme';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import DialogueBox from '../../components/dialogueBox/DialogueBox';

export default function CreateNewPassword() {
  const [resetPasswordMode, setresetPasswordMode] = useState('1');
  // Password Hooks
  const [password, setPassword] = useState('');
  const [isBadPassword, setisBadPassword] = useState(false);
  const [isPasswordOk, setisPasswordOk] = useState(false);
  //    Confirm Password Hooks
  const [confirmPassword, setconfirmPassword] = useState('');
  const [isBadConfirmPassword, setisBadConfirmPassword] = useState(false);
  const [isConfirmPasswordOk, setisConfirmPasswordOk] = useState(false);
  //
  const [ShowDialogue, setShowDialogue] = useState(false);

  const [isPasswordVisible, setisPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, setisConfirmPasswordVisible] =
    useState(true);

  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  const handlePasswordReset = () => {
    if (password.length < 7) {
      setisBadPassword(true);
    }
    if (confirmPassword.length < 6) {
      setisBadConfirmPassword(true);
    }
    if (password.length > 6 && password == confirmPassword) {
      CreateNewPassword();
    } else {
      setisBadConfirmPassword(true);
    }
  };
  const CreateNewPassword = () => {
    setShowDialogue(true);
  };
  function checkIsFieldsOK() {
    if (password.length >= 1) {
      setisBadPassword(false);
      setisPasswordOk(true);
    } else {
      setisPasswordOk(false);
    }
    if (confirmPassword.length >= 9) {
      setisBadConfirmPassword(false);
      setisConfirmPasswordOk(true);
    } else {
      setisConfirmPasswordOk(false);
    }
  }
  function gotoLogin() {
    navigation.replace('Login');
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
            Create your new password to login
          </Text>

          <Input
            placeHolder={'Enter your password'}
            marginVeriticle={12}
            leftIcon={require('../../assets/icons/lock.png')}
            rightIcon={
              isPasswordVisible
                ? require('../../assets/icons/view.png')
                : require('../../assets/icons/hide.png')
            }
            secureTextEntry={isPasswordVisible}
            error={isBadPassword}
            ok={isPasswordOk}
            value={password}
            onChange={text => {
              setPassword(text);
              checkIsFieldsOK();
            }}
            password={true}
            onRIghtIconPress={() => setisPasswordVisible(!isPasswordVisible)}
          />
          {isBadPassword ? (
            <Text style={styles.error}>
              *The password you entered is wrong minium password is 6 characters
            </Text>
          ) : (
            <View></View>
          )}

          <Input
            placeHolder={'Enter your confirm password'}
            marginVeriticle={12}
            leftIcon={require('../../assets/icons/lock.png')}
            rightIcon={
              isConfirmPasswordVisible
                ? require('../../assets/icons/view.png')
                : require('../../assets/icons/hide.png')
            }
            secureTextEntry={isConfirmPasswordVisible}
            error={isBadConfirmPassword}
            ok={isConfirmPasswordOk}
            value={confirmPassword}
            onChange={text => {
              setconfirmPassword(text);
              checkIsFieldsOK();
            }}
            password={true}
            onRIghtIconPress={() =>
              setisConfirmPasswordVisible(!isConfirmPasswordVisible)
            }
          />
          {isBadConfirmPassword ? (
            <Text style={styles.error}>
              *Please enter both password are same
            </Text>
          ) : (
            <View></View>
          )}

          <Button
            bgColor={THEME_COLORS.green}
            paddingVerticle={14}
            title={'Create Password'}
            textColor={THEME_COLORS.white}
            marginVerticle={20}
            onpress={handlePasswordReset}
          />

          {/* {isBadPassword ? (
            <View style={[styles.inputHandling, {marginTop: 0}]}>
              <Text style={styles.error}>*The password you entered is wrong</Text>
              <Text style={styles.forgetPassword}></Text>
            </View>
          ) : null} */}
          <DialogueBox
            isvisible={ShowDialogue}
            buttonText={'Login'}
            description={'You have successfully reset your password.'}
            title={'Success'}
            onpress={gotoLogin}
          />
        </View>
      </ScrollView>
    </View>
  );
}
