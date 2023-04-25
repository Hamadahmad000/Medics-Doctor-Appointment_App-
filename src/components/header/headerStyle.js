import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  leftIcon: {
    width: 18,
    height: 18,
    tintColor: THEME_COLORS.black,
    marginLeft: 30,
    // marginTop: 64,
  },
  rightIcon: {
    marginRight: 24,
    tintColor: THEME_COLORS.black,
  },
  title: {
    fontSize: APP_FONT_SIZE.h4,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: THEME_COLORS.black,
  },
  leftTitle: {
    fontSize: APP_FONT_SIZE.xl,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: THEME_COLORS.black,
    marginLeft: 30,
  },
});

export default styles;
