import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 26,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: THEME_COLORS.lightgray,
    alignSelf: 'center',

    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 24,
  },
  inputLeftIcon: {},
  inputRightIcon: {},
  input: {
    fontFamily: APP_FONT_FAMILIY.interRegular,
    flex: 1,
    fontSize: APP_FONT_SIZE.h4,
    marginHorizontal: 13,
    marginVertical: 3,
  },
});

export default styles;
