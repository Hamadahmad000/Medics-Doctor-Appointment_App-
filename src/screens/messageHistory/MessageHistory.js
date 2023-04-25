import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './messageHistoryStyle';
import Header from '../../components/header/Header';
import All from '../../components/All/All';
import Groups from '../../components/groups/Groups';
import Private from '../../components/private/Private';
import {THEME_COLORS} from '../../constant/Theme';

export default function MessageHistory() {
  const [isScreenMode, setisScreenMode] = useState('1');
  function selectScreenMode(Mode) {
    setisScreenMode(Mode);
  }
  return (
    <View style={styles.container}>
      <Header
        leftTitle={'Message'}
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
            All
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
            Group
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
            Private
          </Text>
        </TouchableOpacity>
      </View>
      {isScreenMode == '1' ? (
        <All />
      ) : isScreenMode == '2' ? (
        <Groups />
      ) : (
        <Private />
      )}
      <TouchableOpacity style={styles.newContact}>
        <Image
          source={require('../../assets/icons/chat.png')}
          style={styles.newChatIcon}
        />
      </TouchableOpacity>
    </View>
  );
}
