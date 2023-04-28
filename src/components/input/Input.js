import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './inputStyle';
import {THEME_COLORS} from '../../constant/Theme';

export default function Input({
  leftIcon,
  leftIconSize,
  placeHolder,
  rightIcon,
  marginVeriticle,
  rightIconSize,
  value,
  onChange,
  error,
  ok,
  password,
  useRightIcon,
  secureTextEntry,
  onRIghtIconPress,
  keyBoardType,
  paddingVerticle,
  ref,
}) {
  return (
    <View
      style={[
        styles.inputContainer,
        {
          marginVertical: marginVeriticle ? marginVeriticle : 0,
          borderColor: error ? 'red' : THEME_COLORS.iconGray,
          borderWidth: error ? 1 : 0.2,
        },
      ]}>
      {leftIcon ? (
        <Image
          source={leftIcon}
          style={[
            styles.inputLeftIcon,
            {
              height: leftIconSize ? leftIconSize : 20,
              width: leftIconSize ? leftIconSize : 20,
              tintColor: error ? 'red' : THEME_COLORS.iconGray,
              tintColor: ok ? THEME_COLORS.green : THEME_COLORS.iconGray,
            },
          ]}
          resizeMode="contain"
        />
      ) : null}
      <TextInput
        placeholder={placeHolder}
        ref={ref ? ref : null}
        style={[
          styles.input,
          {paddingVertical: paddingVerticle ? paddingVerticle : 9},
        ]}
        value={value}
        onChangeText={text => onChange(text)}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        keyboardType={keyBoardType ? keyBoardType : 'default'}
      />
      {useRightIcon ? (
        error ? null : ok ? (
          <Image
            source={rightIcon}
            style={[
              styles.inputRightIcon,
              {
                height: rightIconSize ? rightIconSize : 20,
                width: rightIconSize ? rightIconSize : 20,
                tintColor: ok ? THEME_COLORS.green : THEME_COLORS.iconGray,
              },
            ]}
            resizeMode="contain"
          />
        ) : null
      ) : null}
      {password ? (
        <TouchableOpacity onPress={onRIghtIconPress}>
          <Image
            source={rightIcon}
            style={[
              styles.inputRightIcon,
              {
                height: rightIconSize ? rightIconSize : 20,
                width: rightIconSize ? rightIconSize : 20,
                tintColor: ok ? THEME_COLORS.green : THEME_COLORS.iconGray,
              },
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
