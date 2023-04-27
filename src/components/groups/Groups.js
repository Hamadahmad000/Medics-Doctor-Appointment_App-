import {View, Text} from 'react-native';
import React from 'react';
import styles from './groupsStyle';

export default function Groups() {
  return (
    <View style={styles.container}>
      <Text style={[styles.Text]}>No Group Found</Text>
    </View>
  );
}
