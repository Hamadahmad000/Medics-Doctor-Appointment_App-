import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 129,
    height: 129,
  },
  appName: {
    fontSize: 50,
    fontFamily: APP_FONT_FAMILIY.Montserrat_Bold,
    letterSpacing: 1,
    color: THEME_COLORS.white,
    lineHeight: 61,
  },
  iconDiv: {
    alignItems: 'center',
  },
});

export default styles;
