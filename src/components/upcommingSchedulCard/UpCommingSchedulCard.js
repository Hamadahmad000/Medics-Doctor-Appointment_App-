import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Style';
import Button from '../button/Button';
import {THEME_COLORS} from '../../constant/Theme';

const UpCommingSchedulCard = ({
  name,
  skill,
  onCancelPress,
  onReschedulePress,
  image,
}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Text style={styles.doctorName}>{name}</Text>
          <Text style={styles.skill}>{skill}</Text>
        </View>
        <Image source={image} style={styles.img} />
      </View>
      <View style={styles.info}>
        <View style={styles.infoInner}>
          <Image
            source={require('../../assets/icons/calender.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.text}>26/06/2022</Text>
        </View>
        <View style={styles.infoInner}>
          <Image
            source={require('../../assets/icons/clock.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.text}>10:30 AM</Text>
        </View>
        <View style={styles.infoInner}>
          <Image
            source={require('../../assets/icons/dotGreen.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.text}>Confirmed</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <Button
          bgColor={THEME_COLORS.buttonGray}
          buttonWidth={'48%'}
          title={'Cancel'}
          paddingVerticle={14}
          borderRadius={8}
        />
        <Button
          bgColor={THEME_COLORS.green}
          buttonWidth={'48%'}
          title={'Reschedule'}
          paddingVerticle={14}
          textColor={THEME_COLORS.white}
          borderRadius={8}
        />
      </View>
    </View>
  );
};

export default UpCommingSchedulCard;
