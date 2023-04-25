import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';
import SCREEN_SIZE from '../../utils/utils';

const styles = StyleSheet.create({
  container: {
    height: SCREEN_SIZE.SCREEN_HEIGHT / 1 - SCREEN_SIZE.SCREEN_HEIGHT / 6,
    width: '100%',
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
  newContact: {
    height: 55,
    width: 55,
    backgroundColor: THEME_COLORS.green,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: THEME_COLORS.green,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 6.32,
    elevation: 13,
    position: 'absolute',
    right: 20,
    // top: '81%',
    bottom: 20,
  },
  newChatIcon: {
    height: 20,
    width: 20,
  },
});

export default styles;
