import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './orButtonStyle';

export default function OrButton({
  buttonWidth,
  bgColor,
  border,
  borderColor,
  title,
  marginVerticle,
  paddingVerticle,
  textColor,
  onpress,
  icon,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: buttonWidth,
          backgroundColor: bgColor,
          marginVertical: marginVerticle ? marginVerticle : 0,
          borderWidth: border ? border : 0,
          borderColor: borderColor ? borderColor : 'black',
        },
      ]}
      onPress={() => (onpress ? onpress() : null)}>
      {icon ? <Image source={icon} style={styles.icon} /> : null}
      <Text
        style={[
          styles.buttonText,
          {
            paddingVertical: paddingVerticle ? paddingVerticle : 0,
            color: textColor ? textColor : 'black',
          },
        ]}>
        {title}
      </Text>
      <View style={{width: 15}}></View>
    </TouchableOpacity>
  );
}
