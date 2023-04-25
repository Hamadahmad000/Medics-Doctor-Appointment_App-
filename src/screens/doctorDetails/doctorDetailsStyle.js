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
  },
  doctorInfo: {
    marginHorizontal: 18,
  },
  about: {
    fontSize: APP_FONT_SIZE.h4,
    marginHorizontal: 24,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: THEME_COLORS.black,
    marginVertical: 10,
  },
  aboutInfo: {
    fontSize: 12,
    fontFamily: APP_FONT_FAMILIY.interMedium,
    marginHorizontal: 24,
    lineHeight: 20,
  },
  dateButtons: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginVertical: 30,
  },
  devider: {
    height: 0.2,

    marginHorizontal: 24,
    backgroundColor: '#E8F3f1',
  },
  TimeButtons: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginVertical: 30,
    // width: SCREEN_SIZE.SCREEN_WIDTH,
    height: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    width: '80%',
  },
});

export default styles;
