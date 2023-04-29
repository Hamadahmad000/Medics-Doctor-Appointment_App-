import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './splashStyle';
import {THEME_COLORS} from '../../constant/Theme';
import {StackActions, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // handleUser();
    handleUserUsingAsync();
  }, []);
  //  handling State using firebase

  // const handleUser = async () => {
  //   auth().onAuthStateChanged(state => {
  //     if (state == null) {
  //       setTimeout(() => {
  //         navigation.dispatch(StackActions.replace('Onboarding'));
  //       }, 2000);
  //     }
  //     if (state !== null) {
  //       console.log('world');
  //       setTimeout(() => {
  //         navigation.dispatch(StackActions.replace('BottomTab'));
  //       }, 2000);
  //     }
  //   });
  // };

  //  Handling user using AsyncStorage

  const handleUserUsingAsync = () => {
    setTimeout(() => {
      AsyncStorage.getItem('LOGGEDIN').then(state => {
        if (state == 'true') {
          navigation.dispatch(StackActions.replace('BottomTab'));
        } else {
          navigation.dispatch(StackActions.replace('Onboarding'));
        }
      });
    }, 2000);
  };

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
