import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './scheduleStyle';
import Header from '../../components/header/Header';
import All from '../../components/All/All';
import Groups from '../../components/groups/Groups';
import Private from '../../components/private/Private';
import {THEME_COLORS} from '../../constant/Theme';
import Upcomming from '../../components/upcomming/Upcomming';
import Completed from '../../components/Completed/Completed';
import Canceled from '../../components/Canceled/Canceled';

export default function Schedule() {
  const [isScreenMode, setisScreenMode] = useState('1');
  function selectScreenMode(Mode) {
    setisScreenMode(Mode);
  }
  return (
    <View style={styles.container}>
      <Header
        leftTitle={'Schedule'}
        rightIcon={require('../../assets/icons/search.png')}
        rightIconSize={22}
      />
      <View style={styles.screenMode}>
        <TouchableOpacity
          style={[
            styles.optionsSelector,
            {
              backgroundColor:
                isScreenMode == '1'
                  ? THEME_COLORS.green
                  : THEME_COLORS.chillyWhite,
            },
          ]}
          onPress={() => selectScreenMode('1')}>
          <Text
            style={[
              styles.options,
              {
                color:
                  isScreenMode == '1' ? THEME_COLORS.white : THEME_COLORS.black,
              },
            ]}>
            Upcomming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionsSelector,
            {
              backgroundColor:
                isScreenMode == '2'
                  ? THEME_COLORS.green
                  : THEME_COLORS.chillyWhite,
            },
          ]}
          onPress={() => selectScreenMode('2')}>
          <Text
            style={[
              styles.options,
              {
                color:
                  isScreenMode == '2' ? THEME_COLORS.white : THEME_COLORS.black,
              },
            ]}>
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionsSelector,
            {
              backgroundColor:
                isScreenMode == '3'
                  ? THEME_COLORS.green
                  : THEME_COLORS.chillyWhite,
            },
          ]}
          onPress={() => selectScreenMode('3')}>
          <Text
            style={[
              styles.options,
              {
                color:
                  isScreenMode == '3' ? THEME_COLORS.white : THEME_COLORS.black,
              },
            ]}>
            Canceled
          </Text>
        </TouchableOpacity>
      </View>
      {isScreenMode == '1' ? (
        <Upcomming />
      ) : isScreenMode == '2' ? (
        <Completed />
      ) : (
        <Canceled />
      )}
    </View>
  );
}
