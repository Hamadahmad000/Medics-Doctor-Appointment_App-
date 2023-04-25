import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './buttonStyle';
import {THEME_COLORS} from '../../constant/Theme';

export default function Button({
  buttonWidth,
  bgColor,
  border,
  borderColor,
  title,
  marginVerticle,
  paddingVerticle,
  textColor,
  onpress,
  disabled,
  textFontSize,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: buttonWidth,
          backgroundColor: disabled ? THEME_COLORS.iconGray : bgColor,
          marginVertical: marginVerticle ? marginVerticle : 0,
          borderWidth: border ? border : 0,
          borderColor: borderColor ? borderColor : 'black',
        },
      ]}
      onPress={() => (onpress ? onpress() : null)}
      disabled={disabled ? disabled : false}>
      <Text
        style={[
          styles.buttonText,
          {
            paddingVertical: paddingVerticle ? paddingVerticle : 0,
            color: textColor ? textColor : 'black',
            fontSize: textFontSize ? textFontSize : 16,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
