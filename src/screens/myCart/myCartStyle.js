import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';

const styles = StyleSheet.create({
  cartLogo: {
    height: 100,
    width: 100,
    marginRight: 20,
    tintColor: THEME_COLORS.iconGray,
  },
  BookingDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: THEME_COLORS.white,
    paddingHorizontal: 24,
    paddingVertical: 5,
  },
  chatButton: {
    height: 50,
    width: 50,
    backgroundColor: THEME_COLORS.chillyWhite,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  chatButtonIcon: {
    height: 20,
    width: 20,
  },
  BookingButton: {
    width: '60%',
  },
  leftTextTotal: {
    fontSize: APP_FONT_SIZE.h5,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: THEME_COLORS.black,
  },
  totalFeeInner: {
    fontSize: APP_FONT_SIZE.h5,
    fontFamily: APP_FONT_FAMILIY.interMedium,
  },
  totalFeee: {
    fontSize: APP_FONT_SIZE.h3,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: THEME_COLORS.black,
  },
  paymentIcon: {
    height: 30,
    width: 40,
  },
  paymentMethod: {
    borderWidth: 0.3,
    borderColor: THEME_COLORS.iconGray,
  },
});

export default styles;
