import {ScrollView} from 'react-native';
import React from 'react';
import {THEME_COLORS} from '../../constant/Theme';

const AppScrollView = ({
  children,
  style,
  contentContainerStyle,
  containerBottomPending,
  containerTopPending,
  appColor,
  minHeight,
}) => {
  extraStyle = {};
  containerExtraStyle = {};
  if (containerBottomPending) {
    containerExtraStyle.paddingBottom = containerBottomPending;
  }
  if (containerTopPending) {
    containerExtraStyle.paddingTop = containerTopPending;
  }
  if (minHeight) {
    containerExtraStyle.minHeight = minHeight;
  }
  if (appColor) {
    const appColor1 = THEME_COLORS[appColor];
    extraStyle.backgroundColor = appColor1;
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[style, extraStyle]}
      contentContainerStyle={[contentContainerStyle, containerExtraStyle]}>
      {children}
    </ScrollView>
  );
};

export default AppScrollView;
