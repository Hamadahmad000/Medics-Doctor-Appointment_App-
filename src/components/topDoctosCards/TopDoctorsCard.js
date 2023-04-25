import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './topDoctorsCardStyle';

export default function TopDoctorsCard({
  doctorName,
  skill,
  rating,
  location,
  image,
  handleOnPress,
}) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleOnPress}>
      <Image source={image} resizeMode="contain" style={styles.image} />
      <View style={{}}>
        <Text style={styles.doctorName}>{doctorName}</Text>
        <Text style={styles.doctorSkill}>{skill}</Text>

        <View style={styles.ratingDiv}>
          <View style={styles.ratingBox}>
            <Image
              source={require('../../assets/icons/star.png')}
              resizeMode="contain"
              style={styles.startIcon}
            />
            <Text style={styles.rating}>4.7</Text>
          </View>
          <View style={styles.locationBox}>
            <Image
              source={require('../../assets/icons/location-pin.png')}
              resizeMode="contain"
              style={styles.locationIcon}
            />
            <Text style={styles.loaction}>900m away</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
