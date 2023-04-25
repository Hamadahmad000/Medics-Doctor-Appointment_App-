import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './headerStyle';

export default function Header({
  leftIcon,
  rightIcon,
  title,
  onLeftIconPress,
  leftTitle,
  rightIconSize,
}) {
  return (
    <View style={styles.container}>
      {leftIcon ? (
        <TouchableOpacity onPress={onLeftIconPress}>
          <Image
            source={leftIcon}
            style={styles.leftIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : leftTitle ? (
        <Text style={styles.leftTitle}>{leftTitle}</Text>
      ) : (
        <View></View>
      )}
      {title ? <Text style={styles.title}>{title}</Text> : <View></View>}
      {rightIcon ? (
        <Image
          source={rightIcon}
          style={[
            styles.rightIcon,
            {
              height: rightIconSize ? rightIconSize : 18,
              width: rightIconSize ? rightIconSize : 18,
            },
          ]}
          resizeMode="contain"
        />
      ) : (
        <View style={{width: 50}}></View>
      )}
    </View>
  );
}
