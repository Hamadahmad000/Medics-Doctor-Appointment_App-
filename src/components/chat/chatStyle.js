import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    paddingVertical: 10,
    // marginVertical: 10,
  },
  ProfileImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  name: {
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: APP_FONT_SIZE.h4,
    color: THEME_COLORS.black,
  },
  recentMessage: {
    fontFamily: APP_FONT_FAMILIY.interRegular,
    fontSize: 12,
  },
  chatTime: {
    fontFamily: APP_FONT_FAMILIY.interRegular,
    fontSize: 12,
  },
  newMessageIcon: {
    height: 13,
    width: 13,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_COLORS.green,
    position: 'absolute',
    bottom: 7,
    right: 0,
  },
  newMessageText: {
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: 9,
    color: THEME_COLORS.white,
  },
  messageDeliverStatus: {
    height: 10,
    width: 15,
    position: 'absolute',
    bottom: 7,
    right: 0,
    tintColor: THEME_COLORS.iconGray,
  },
});

export default styles;
