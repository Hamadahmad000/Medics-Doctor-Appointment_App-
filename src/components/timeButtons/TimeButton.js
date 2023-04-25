import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './timeButtonStyle';
import {THEME_COLORS} from '../../constant/Theme';

export default function TimeButton({
  time,
  keyValue,
  selected,
  onpress,
  disabled,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          borderWidth: selected == keyValue ? 0 : 0.2,
          borderColor:
            disabled == keyValue
              ? THEME_COLORS.disabled
              : THEME_COLORS.iconGray,
          backgroundColor:
            selected == keyValue ? THEME_COLORS.green : THEME_COLORS.white,
        },
      ]}
      key={keyValue}
      onPress={onpress}>
      <Text
        style={[
          styles.date,
          {
            color:
              selected == keyValue
                ? THEME_COLORS.white
                : disabled == keyValue
                ? THEME_COLORS.disabled
                : THEME_COLORS.black,
          },
        ]}>
        {time}
      </Text>
    </TouchableOpacity>
  );
}
