import {View, Text, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {THEME_COLORS} from '../../constant/Theme';

const AppView = ({
  flex,
  flexGrow,
  alignSelf,
  alignItems,
  justifyContent,
  width,
  height,
  paddingHorizontal,
  paddingVertical,
  paddingRight,
  paddingLeft,
  paddingBottom,
  paddingTop,
  marginBottom,
  marginTop,
  borderRadius,
  style,
  children,
  useKeyboardView,
  useSafeAreaView,
  flexDirection,
  appColor,
  marginHorizontal,
  marginVertical,
  marginLeft,
  marginRight,
}) => {
  const extraStyle = {};
  if (flex) {
    extraStyle.flex = 1;
  }
  if (flexGrow) {
    extraStyle.flexGrow = flexGrow;
  }
  if (alignSelf) {
    extraStyle.alignSelf = alignSelf;
  }

  if (alignItems) {
    extraStyle.alignItems = alignItems;
  }

  if (width) {
    extraStyle.width = width;
  }
  if (height) {
    extraStyle.height = height;
  }
  if (paddingHorizontal) {
    extraStyle.paddingHorizontal = paddingHorizontal;
  }
  if (paddingVertical) {
    extraStyle.paddingVertical = paddingVertical;
  }
  if (paddingRight) {
    extraStyle.paddingRight = paddingRight;
  }
  if (paddingLeft) {
    extraStyle.paddingLeft = paddingLeft;
  }
  if (paddingBottom) {
    extraStyle.paddingBottom = paddingBottom;
  }
  if (paddingTop) {
    extraStyle.paddingTop = paddingTop;
  }
  if (marginHorizontal) {
    extraStyle.marginHorizontal = marginHorizontal;
  }
  if (marginVertical) {
    extraStyle.marginVertical = marginVertical;
  }
  if (marginLeft) {
    extraStyle.marginLeft = marginLeft;
  }
  if (marginRight) {
    extraStyle.marginRight = marginRight;
  }

  if (marginBottom) {
    extraStyle.marginBottom = marginBottom;
  }

  if (marginTop) {
    extraStyle.marginTop = marginTop;
  }
  if (flexDirection) {
    extraStyle.flexDirection = flexDirection;
  }

  if (borderRadius) {
    extraStyle.borderRadius = borderRadius;
  }
  if (justifyContent) {
    extraStyle.justifyContent = justifyContent;
  }
  if (appColor) {
    const appColor1 = THEME_COLORS[appColor];
    extraStyle.backgroundColor = appColor1;
  }

  if (useKeyboardView) {
    return (
      <SafeAreaView style={[style, extraStyle]}>
        <KeyboardAvoidingView behavior="padding" style={[style, extraStyle]}>
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
  if (useSafeAreaView) {
    return <SafeAreaView style={[style, extraStyle]}>{children}</SafeAreaView>;
  }
  return <View style={[style, extraStyle]}>{children}</View>;
};

export default AppView;
