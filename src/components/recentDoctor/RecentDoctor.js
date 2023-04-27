import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './resentDoctorStyle';

export default function RecentDoctor({image, names}) {
  return (
    <TouchableOpacity style={[styles.container]}>
      <Image source={image} style={styles.doctorImage} />
      <Text style={[styles.doctorName]}>{names.slice(0, 10)}</Text>
    </TouchableOpacity>
  );
}
