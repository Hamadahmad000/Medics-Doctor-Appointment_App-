import {View, Text} from 'react-native';
import React from 'react';
import styles from './Style';

const UpCommingSchedulCard = ({
  name,
  skill,
  onCancelPress,
  onReschedulePress,
  image,
}) => {
  return (
    <View style={[styles.container]}>
      <Text>UpCommingSchedulCard</Text>
    </View>
  );
};

export default UpCommingSchedulCard;
