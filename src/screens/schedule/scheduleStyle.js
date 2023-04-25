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
  screenMode: {
    marginLeft: 24,
    // width: '100%',
    backgroundColor: THEME_COLORS.chillyWhite,
    marginRight: 24,
    flexDirection: 'row',
    borderRadius: 8,
  },
  optionsSelector: {
    width: '33%',
    backgroundColor: THEME_COLORS.green,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  options: {
    fontSize: APP_FONT_SIZE.h5,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: 'white',
  },
  screens: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default styles;
