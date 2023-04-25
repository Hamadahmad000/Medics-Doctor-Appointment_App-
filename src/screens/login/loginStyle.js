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
    paddingBottom: 20,
  },
  inputDivs: {
    marginHorizontal: 24,
    marginTop: 10,
  },
  inputHandling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  error: {
    fontSize: 11,
    fontFamily: APP_FONT_FAMILIY.interRegular,
    color: '#FF5C5C',
  },
  forgetPassword: {
    fontFamily: APP_FONT_FAMILIY.interRegular,
    fontSize: APP_FONT_SIZE.h5,
    fontWeight: '500',
    color: THEME_COLORS.green,
  },
  registrationMode: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftSideText: {
    fontSize: 15,
    fontFamily: APP_FONT_FAMILIY.interRegular,
  },
  signUpbutton: {
    fontSize: 15,
    fontFamily: APP_FONT_FAMILIY.interRegular,
    color: THEME_COLORS.green,
    marginLeft: 10,
  },
  optionDevider: {
    flexDirection: 'row',
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  deviderLine: {
    height: 0.4,
    backgroundColor: THEME_COLORS.iconGray,
    width: '40%',
  },
  or: {
    fontFamily: APP_FONT_FAMILIY.interRegular,
    fontSize: APP_FONT_SIZE.h4,
  },
  orButtonsDiv: {
    paddingHorizontal: 24,
  },
  accountError: {
    alignSelf: 'center',
    color: 'red',
    fontSize: APP_FONT_SIZE.h5,
    fontFamily: APP_FONT_FAMILIY.interRegular,
  },
});

export default styles;
