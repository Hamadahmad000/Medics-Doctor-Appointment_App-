import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';

const styles = StyleSheet.create({
  day: {
    fontSize: 10,
    fontFamily: APP_FONT_FAMILIY.interRegular,
  },
  date: {
    fontSize: APP_FONT_SIZE.h3,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: THEME_COLORS.black,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: 'center',

    width: 50,
    borderRadius: 10,
    marginRight: 12,
  },
});

export default styles;
