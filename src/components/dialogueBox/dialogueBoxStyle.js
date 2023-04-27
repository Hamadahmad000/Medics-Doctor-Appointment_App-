import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';
const styles = StyleSheet.create({
  box: {
    backgroundColor: THEME_COLORS.white,
    padding: 20,
    borderRadius: 24,
  },
  iconDiv: {
    height: 100,
    width: 100,
    backgroundColor: THEME_COLORS.halfWhite,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 40,
  },
  icon: {
    height: 35,
    width: 35,
    tintColor: THEME_COLORS.green,
  },
  title: {
    alignSelf: 'center',
    fontSize: APP_FONT_SIZE.medium,
    color: THEME_COLORS.black,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: APP_FONT_SIZE.h4,
    fontFamily: APP_FONT_FAMILIY.interRegular,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 24,
    width: '80%',
  },
  buttonDiv: {
    width: '60%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  bottomButtonText: {
    fontSize: APP_FONT_SIZE.h4,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: THEME_COLORS.green,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default styles;
