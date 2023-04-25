import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './splashStyle';
import {THEME_COLORS} from '../../constant/Theme';
import {StackActions, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
const Splash = () => {
  const navigation = useNavigation();
  const [isUserLoggedIn, setisUserLoggedIn] = useState(true);

  useEffect(() => {
    auth().onAuthStateChanged(state => {
      state !== null ? setisUserLoggedIn(true) : setisUserLoggedIn(false);
    });
    setTimeout(() => {
      checkUser();
    }, 2000);
  }, []);

  //   Detect and Check User Info
  console.log(isUserLoggedIn);
  const checkUser = async () => {
    try {
      // const constrolRoute = isUserLoggedIn == true ? 'Home' : 'Onboarding';
      navigation.dispatch(
        StackActions.replace(isUserLoggedIn ? 'BottomTab' : 'Onboarding'),
      );
    } catch (error) {
      console.log(error);
    }
  };

  //   Navigate user to Next Screen

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={THEME_COLORS.green} />
      <View style={styles.iconDiv}>
        <Image
          source={require('../../assets/icons/Plus.png')}
          style={styles.icon}
        />
        <Text style={styles.appName}>Medics</Text>
      </View>
    </View>
  );
};

export default Splash;
