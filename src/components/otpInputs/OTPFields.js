import {View, Text, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './otpFieldsStyle';
import {THEME_COLORS} from '../../constant/Theme';
export default function OTPFields({
  field1,
  field2,
  field3,
  field4,
  setfield1,
  setfield2,
  setfield3,
  setfield4,
  onchange,
}) {
  const f1 = useRef();
  const f2 = useRef();
  const f3 = useRef();
  const f4 = useRef();
  return (
    <View style={styles.otpInputDiv}>
      <TextInput
        style={[
          styles.otpInputs,
          {
            backgroundColor: field1
              ? THEME_COLORS.white
              : THEME_COLORS.lightgray,
            borderWidth: field1 ? 1 : 0,
            borderColor: THEME_COLORS.green,
          },
        ]}
        keyboardType="number-pad"
        maxLength={1}
        ref={f1}
        value={field1}
        onChangeText={text => {
          if (text.length >= 1) {
            f2.current.focus();
          } else if (text.length < 1) {
            f1.current.focus();
          }
          setfield1(text);
        }}
      />
      <TextInput
        style={[
          styles.otpInputs,
          {
            backgroundColor: field2
              ? THEME_COLORS.white
              : THEME_COLORS.lightgray,
            borderWidth: field2 ? 1 : 0,
            borderColor: THEME_COLORS.green,
          },
        ]}
        keyboardType="number-pad"
        maxLength={1}
        ref={f2}
        value={field2}
        onChangeText={text => {
          if (text.length >= 1) {
            f3.current.focus();
          } else if (text.length < 1) {
            f1.current.focus();
          }
          setfield2(text);
        }}
      />
      <TextInput
        style={[
          styles.otpInputs,
          {
            backgroundColor: field3
              ? THEME_COLORS.white
              : THEME_COLORS.lightgray,
            borderWidth: field3 ? 1 : 0,
            borderColor: THEME_COLORS.green,
          },
        ]}
        keyboardType="number-pad"
        maxLength={1}
        ref={f3}
        value={field3}
        onChangeText={text => {
          if (text.length >= 1) {
            f4.current.focus();
          } else if (text.length < 1) {
            f2.current.focus();
          }
          setfield3(text);
        }}
      />
      <TextInput
        style={[
          styles.otpInputs,
          {
            backgroundColor: field4
              ? THEME_COLORS.white
              : THEME_COLORS.lightgray,
            borderWidth: field4 ? 1 : 0,
            borderColor: THEME_COLORS.green,
          },
        ]}
        keyboardType="number-pad"
        maxLength={1}
        ref={f4}
        value={field4}
        onChangeText={text => {
          onchange();
          if (text.length >= 1) {
            f4.current.focus();
          } else if (text.length < 1) {
            f3.current.focus();
          }
          setfield4(text);
          console.log('working');
        }}
      />
    </View>
  );
}
