import {View, Text} from 'react-native';
import React from 'react';
import styles from './privateStyle';

export default function Private() {
  return (
    <View style={styles.container}>
      <Text style={[styles.Text]}>No Private Chat</Text>
    </View>
  );
}
