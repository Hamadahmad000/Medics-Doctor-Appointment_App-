import {View, Text, Image} from 'react-native';
import React from 'react';

import Button from '../button/Button';
import {THEME_COLORS} from '../../constant/Theme';
import styles from './bannerStyle';
export default function Banner() {
  function handleOnBannerPress() {}
  return (
    <View style={styles.bannerContainer}>
      <View style={styles.leftConten}>
        <Text style={styles.title}>
          Early protection for your family health
        </Text>
        <View style={styles.bannerButton}>
          <Button
            bgColor={THEME_COLORS.green}
            title={'Learn more'}
            textColor={THEME_COLORS.white}
            paddingVerticle={10}
            textFontSize={12}
            onpress={handleOnBannerPress}
          />
        </View>
      </View>
      <View style={styles.whiteBG}></View>
      <Image
        source={require('../../assets/img/banner.png')}
        resizeMode="contain"
        style={styles.bannerImage}
      />
    </View>
  );
}
