import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';
import SCREEN_SIZE from '../../utils/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.white,
    // paddingBottom: 20,
  },
  doctorInfo: {
    marginHorizontal: 18,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  about: {
    fontSize: APP_FONT_SIZE.h4,

    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: THEME_COLORS.black,
    marginVertical: 10,
  },
  change: {
    fontFamily: APP_FONT_FAMILIY.interRegular,
    fontSize: APP_FONT_SIZE.xxs,
    lineHeight: 14,
  },
  BookingDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // left: 0,
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
  TimingDiv: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginVertical: 5,
    alignItems: 'center',
  },
  leftButton: {
    backgroundColor: THEME_COLORS.chillyWhite,
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 15,
  },
  leftButtonIcon: {
    height: 15,
    width: 15,
  },
  orderDate: {
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: APP_FONT_SIZE.h5,
    color: THEME_COLORS.black,
    lineHeight: 16,
  },
  devider: {
    height: 0.5,

    marginHorizontal: 24,
    backgroundColor: '#E8F3f1',
    marginVertical: 13,
  },
  paymentDetailsInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginVertical: 6,
  },
  leftText: {
    fontSize: APP_FONT_SIZE.h5,
    fontFamily: APP_FONT_FAMILIY.interRegular,
  },
  rightText: {
    fontFamily: APP_FONT_FAMILIY.interRegular,
    fontSize: APP_FONT_SIZE.h5,
    color: THEME_COLORS.black,
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
});

export default styles;
