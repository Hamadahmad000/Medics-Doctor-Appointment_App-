import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';
import SCREEN_SIZE from '../../utils/utils';

const styles = StyleSheet.create({
  DocDescription: {
    fontSize: APP_FONT_SIZE.large,
    lineHeight: 29,
    // paddingTop: 53,
    width: SCREEN_SIZE.SCREEN_WIDTH - 100,
    alignSelf: 'center',
    // paddingHorizontal: 10,
    fontFamily: APP_FONT_FAMILIY.interBold,
    color: THEME_COLORS.black,
  },
});

export default styles;
