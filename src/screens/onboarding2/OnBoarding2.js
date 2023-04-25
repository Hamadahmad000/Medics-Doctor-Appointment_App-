import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import styles from './onBoarding2Style';
import {THEME_COLORS} from '../../constant/Theme';
import Button from '../../components/button/Button';
import {useNavigation} from '@react-navigation/native';

export default function OnBoarding2() {
  const navigation = useNavigation();
  const handleScreenMode = mode => {
    navigation.navigate(mode);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={THEME_COLORS.white}
        barStyle={'dark-content'}
      />
      <View style={styles.onBoarding2}>
        <View style={styles.iconDiv}>
          <Image
            source={require('../../assets/icons/Plus.png')}
            style={styles.badgeIcon}
          />
          <Text style={styles.badgeTitle}>Medics</Text>
        </View>
        <Text style={styles.headline}>Let’s get started!</Text>
        <Text style={styles.description}>
          Login to enjoy the features we’ve provided, and stay healthy!
        </Text>
      </View>
      <View style={styles.registrationButton}>
        <Button
          bgColor={THEME_COLORS.green}
          title={'Login'}
          buttonWidth={'50%'}
          paddingVerticle={16}
          textColor={'white'}
          onpress={() => handleScreenMode('Login')}
        />
        <Button
          bgColor={THEME_COLORS.white}
          title={'Sign Up'}
          buttonWidth={'50%'}
          paddingVerticle={16}
          textColor={THEME_COLORS.green}
          marginVerticle={16}
          border={1}
          borderColor={THEME_COLORS.green}
          onpress={() => handleScreenMode('Signup')}
        />
      </View>
    </View>
  );
}
