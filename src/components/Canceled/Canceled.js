import {View, Text} from 'react-native';
import React from 'react';
import styles from './canceledStyle';

export default function Canceled() {
  return (
    <View style={styles.container}>
      <Text style={[styles.Text]}>0 Canceled</Text>
    </View>
  );
}
