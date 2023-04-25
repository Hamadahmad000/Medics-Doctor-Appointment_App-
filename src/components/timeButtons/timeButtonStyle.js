import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';

const styles = StyleSheet.create({
  date: {
    fontSize: APP_FONT_SIZE.xxs,
    fontFamily: APP_FONT_FAMILIY.interRegular,
    color: THEME_COLORS.black,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'center',

    width: '31%',
    borderRadius: 15,
    // marginRight: 12,
    marginVertical: 8,
  },
});

export default styles;
