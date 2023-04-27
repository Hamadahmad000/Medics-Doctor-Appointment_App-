import {View, Text} from 'react-native';
import React from 'react';
import styles from './upCommingStyle';
import UpCommingSchedulCard from '../upcommingSchedulCard/UpCommingSchedulCard';

const Upcomming = () => {
  return (
    <View style={styles.container}>
      <UpCommingSchedulCard />
    </View>
  );
};

export default Upcomming;
