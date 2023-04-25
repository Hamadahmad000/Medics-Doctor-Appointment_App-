import {View, Text} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './loaderStyle';
import Lottie from 'lottie-react-native';
export default function Loader({isVisible}) {
  return (
    <Modal isVisible={isVisible} backdropOpacity={0} animationIn={'fadeIn'}>
      <View style={styles.container}>
        <Lottie source={require('../../assets/v-3.json')} autoPlay loop />
      </View>
    </Modal>
  );
}
