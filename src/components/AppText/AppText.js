import {View, Text} from 'react-native';
import React from 'react';
import {hexToRgbA} from '../../helper/ThemeHelper';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';
import {getFontFamily} from '../../utils/utils';

const AppText = ({
  children,
  textAlign,
  fontWeight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  textColor,
  appFontSize,
  textColorOpacity,
  fontStyle,
  alignSelf,
  style,
  marginHorizontal,
}) => {
  const extraStyle = {};

  if (textAlign) {
    extraStyle.textAlign = textAlign;
  }
  if (alignSelf) {
    extraStyle.alignSelf = alignSelf;
  }
  if (fontWeight) {
    extraStyle.fontWeight = fontWeight;
  }
  if (marginTop) {
    extraStyle.marginTop = marginTop;
  }
  if (marginBottom) {
    extraStyle.marginBottom = marginBottom;
  }
  if (marginLeft) {
    extraStyle.marginLeft = marginLeft;
  }
  if (marginRight) {
    extraStyle.marginRight = marginRight;
  }
  if (marginHorizontal) {
    extraStyle.marginHorizontal = marginHorizontal;
  }
  if (marginVertical) {
    extraStyle.marginVertical = marginVertical;
  }
  if (paddingHorizontal) {
    extraStyle.paddingHorizontal = paddingHorizontal;
  }
  if (paddingVertical) {
    extraStyle.paddingVertical = paddingVertical;
  }
  if (paddingTop) {
    extraStyle.paddingTop = paddingTop;
  }
  if (paddingBottom) {
    extraStyle.paddingBottom = paddingBottom;
  }
  if (paddingLeft) {
    extraStyle.paddingLeft = paddingLeft;
  }
  if (paddingRight) {
    extraStyle.paddingRight = paddingRight;
  }

  //
  if (textColor) {
    let textColor1 = THEME_COLORS[textColor];
    if (textColorOpacity) {
      textColor1 = hexToRgbA(textColor, textColorOpacity);
    }
    extraStyle.color = textColor1;
  }
  //
  if (appFontSize) {
    let fontSize = APP_FONT_SIZE.h4;
    if (typeof appFontSize === 'string') {
      fontSize = APP_FONT_SIZE[appFontSize];
    }
    if (typeof appFontSize === 'number') {
      fontSize = appFontSize;
    }
    extraStyle.fontSize = fontSize;
  }
  //
  if (fontStyle) {
    const FinalfontFamily = APP_FONT_FAMILIY[fontStyle];
    extraStyle.fontFamily = FinalfontFamily;
  }

  return <Text style={[style, extraStyle]}>{children}</Text>;
};

export default AppText;
