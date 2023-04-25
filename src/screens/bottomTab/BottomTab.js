import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './bottomTabStyle';
import Home from '../home/Home';
import MessageHistory from '../messageHistory/MessageHistory';
import Schedule from '../schedule/Schedule';
import Profile from '../profile/Profile';
import {THEME_COLORS} from '../../constant/Theme';

export default function BottomTab() {
  const [screen, setScreen] = useState(0);
  function handleScreen1() {
    setScreen(0);
  }
  function handleScreen2() {
    setScreen(1);
  }
  function handleScreen3() {
    setScreen(2);
  }
  function handleScreen4() {
    setScreen(3);
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={THEME_COLORS.white}
          barStyle={'dark-content'}
        />
        {screen == 0 ? (
          <Home />
        ) : screen == 1 ? (
          <MessageHistory />
        ) : screen == 2 ? (
          <Schedule />
        ) : (
          <Profile />
        )}
        <View style={styles.bottomTab}>
          <TouchableOpacity style={styles.button} onPress={handleScreen1}>
            <Image
              source={
                screen == 0
                  ? require('../../assets/icons/homeFilled.png')
                  : require('../../assets/icons/home.png')
              }
              style={[
                styles.icon,
                {
                  tintColor:
                    screen == 0 ? THEME_COLORS.green : THEME_COLORS.TabIcon,
                },
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleScreen2}>
            <Image
              source={
                screen == 1
                  ? require('../../assets/icons/mailFilled.png')
                  : require('../../assets/icons/mail.png')
              }
              style={[
                styles.icon,
                {
                  tintColor:
                    screen == 1 ? THEME_COLORS.green : THEME_COLORS.TabIcon,
                },
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleScreen3}>
            <Image
              source={
                screen == 2
                  ? require('../../assets/icons/calenderFilled.png')
                  : require('../../assets/icons/calender.png')
              }
              style={[
                styles.icon,
                {
                  tintColor:
                    screen == 2 ? THEME_COLORS.green : THEME_COLORS.TabIcon,
                },
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleScreen4}>
            <Image
              source={
                screen == 3
                  ? require('../../assets/icons/user2Filled.png')
                  : require('../../assets/icons/user2.png')
              }
              style={[
                styles.icon,
                {
                  tintColor:
                    screen == 3 ? THEME_COLORS.green : THEME_COLORS.TabIcon,
                },
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
