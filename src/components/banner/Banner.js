import {View, Text, Image} from 'react-native';
import React, {Fragment} from 'react';

import Button from '../button/Button';
import {THEME_COLORS} from '../../constant/Theme';
import styles from './bannerStyle';
export default function Banner({
  title,
  buttonTitle,
  img,
  marginVertical,
  buttonWidth,
  buttonBorderRadiues,
  imgStyle,
}) {
  function handleOnBannerPress() {}

  const customStyle = {};

  if (marginVertical) {
    customStyle.marginVertical = marginVertical;
  }
  return (
    <View style={[styles.bannerContainer, customStyle]}>
      <View style={styles.leftConten}>
        <Text style={styles.title}>
          {title ? title : 'Early protection for your family health'}
        </Text>
        <View
          style={[
            styles.bannerButton,
            {width: buttonWidth ? buttonWidth : 100},
          ]}>
          <Button
            bgColor={THEME_COLORS.green}
            title={buttonTitle ? buttonTitle : 'Learn more'}
            textColor={THEME_COLORS.white}
            paddingVerticle={10}
            textFontSize={12}
            onpress={handleOnBannerPress}
            borderRadius={buttonBorderRadiues}
          />
        </View>
      </View>
      {img ? (
        <Image source={img} resizeMode="contain" style={imgStyle} />
      ) : (
        <Fragment>
          <View style={styles.whiteBG}></View>
          <Image
            source={require('../../assets/img/banner.png')}
            resizeMode="contain"
            style={styles.bannerImage}
          />
        </Fragment>
      )}
    </View>
  );
}
