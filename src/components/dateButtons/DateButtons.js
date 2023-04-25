import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './dateButtonsStyle';
import {THEME_COLORS} from '../../constant/Theme';

export default function DateButtons({date, day, keyValue, selected, onpress}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          borderWidth: selected == keyValue ? 0 : 0.2,
          backgroundColor:
            selected == keyValue ? THEME_COLORS.green : THEME_COLORS.white,
        },
      ]}
      key={keyValue}
      onPress={onpress}>
      <Text
        style={[
          styles.day,
          {
            color:
              selected == keyValue ? THEME_COLORS.white : THEME_COLORS.black,
          },
        ]}>
        {day}
      </Text>
      <Text
        style={[
          styles.date,
          {
            color:
              selected == keyValue ? THEME_COLORS.white : THEME_COLORS.black,
          },
        ]}>
        {date}
      </Text>
    </TouchableOpacity>
  );
}
