import {View, Text, Image} from 'react-native';
import React from 'react';
import AppView from '../AppView/AppView';
import styles from './starsStyle';

const Stars = () => {
  return (
    <AppView flexDirection={'row'}>
      <Image
        source={require('../../assets/icons/star.png')}
        style={styles.startimage}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/icons/star.png')}
        style={styles.startimage}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/icons/star.png')}
        style={styles.startimage}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/icons/star.png')}
        style={styles.startimage}
        resizeMode="contain"
      />
    </AppView>
  );
};

export default Stars;
