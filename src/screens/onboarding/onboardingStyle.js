import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';
import SCREEN_SIZE from '../../utils/utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.white,
    flex: 1,
  },
  onBoardingImage: {
    height: '80%',
    width: 321,
    marginTop: 30,
    position: 'absolute',
    bottom: 0,
  },
  slidersTop: {
    width: SCREEN_SIZE.SCREEN_WIDTH,

    alignItems: 'center',
    height: SCREEN_SIZE.SCREEN_HEIGHT / 1.6,
    // height: '140%',
    justifyContent: 'center',
  },

  bottom: {
    backgroundColor: THEME_COLORS.halfWhite,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: SCREEN_SIZE.SCREEN_HEIGHT / 3.2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  skipButtonDiv: {
    height: 56,
    width: 56,
    backgroundColor: THEME_COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  skipButton: {
    height: 25,
    width: 25,
    tintColor: THEME_COLORS.white,
  },
  screenIndicator: {
    height: 4,
    width: 12,

    borderRadius: 56,
    marginRight: 3,
  },
  index: {
    flexDirection: 'row',
  },
  bottomInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SCREEN_SIZE.SCREEN_WIDTH - 100,
    alignSelf: 'center',

    marginBottom: 30,
  },
  skipButtonTop: {
    fontSize: APP_FONT_SIZE.h4,
    position: 'absolute',
    top: 30,
    right: 22,
    lineHeight: 19,
    fontFamily: APP_FONT_FAMILIY.interRegular,
  },
});

export default styles;
