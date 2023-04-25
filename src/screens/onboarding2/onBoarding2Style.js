import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_COLORS.white,
  },
  onBoarding2: {
    alignItems: 'center',
  },
  badgeIcon: {
    width: 66,
    height: 66,
    tintColor: THEME_COLORS.green,
  },
  iconDiv: {
    alignItems: 'center',
  },
  badgeTitle: {
    fontFamily: APP_FONT_FAMILIY.Montserrat_Bold,
    color: THEME_COLORS.green,
    fontSize: APP_FONT_SIZE.xxl,
  },
  headline: {
    fontFamily: APP_FONT_FAMILIY.interBold,
    fontSize: APP_FONT_SIZE.large,
    color: THEME_COLORS.black,
    marginTop: 30,
    lineHeight: 29,
    letterSpacing: 1,
  },
  description: {
    fontFamily: APP_FONT_FAMILIY.interRegular,
    width: 311,
    textAlign: 'center',
    marginTop: 9,
    fontSize: APP_FONT_SIZE.h4,
  },
  registrationButton: {
    width: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 60,
  },
});

export default styles;
