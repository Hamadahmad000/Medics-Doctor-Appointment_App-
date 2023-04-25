import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.white,
  },
  heading: {
    fontFamily: APP_FONT_FAMILIY.interBold,
    fontSize: APP_FONT_SIZE.xl,
    color: THEME_COLORS.black,
    paddingVertical: 8,
  },
  section: {
    paddingHorizontal: 24,
    paddingVertical: 13,
  },
  description: {
    fontSize: APP_FONT_SIZE.h4,
    fontFamily: APP_FONT_FAMILIY.interRegular,
    lineHeight: 24,
    marginBottom: 12,
    width: '90%',
  },
  resendCodeDiv: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  leftText: {
    fontSize: APP_FONT_SIZE.h4,
    fontFamily: APP_FONT_FAMILIY.interRegular,
  },
  resend: {
    fontSize: APP_FONT_SIZE.h4,
    fontFamily: APP_FONT_FAMILIY.interRegular,
    marginLeft: 8,
    color: THEME_COLORS.green,
  },
});

export default styles;
