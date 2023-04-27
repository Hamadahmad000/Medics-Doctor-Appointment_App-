import {View, Text} from 'react-native';
import React from 'react';
import styles from './completedStyle';

export default function Completed() {
  return (
    <View style={styles.container}>
      <Text style={[styles.Text]}>0 Completed</Text>
    </View>
  );
}
