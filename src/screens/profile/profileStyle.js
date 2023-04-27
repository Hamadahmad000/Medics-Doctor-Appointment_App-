import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';
import SCREEN_SIZE from '../../utils/utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.synergy,
    flex: 1,
  },
  userProfileImg: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 50,
  },
  profile: {
    alignItems: 'center',
  },
  userName: {
    marginTop: 19,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: APP_FONT_SIZE.h3,
    color: THEME_COLORS.white,
  },
  innerimage: {
    height: 27,
    width: 30,
  },
  innerRating: {
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: APP_FONT_SIZE.h6,
    color: THEME_COLORS.white,
    marginTop: 9,
  },
  innerRatingCount: {
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: APP_FONT_SIZE.h4,
    color: THEME_COLORS.white,
  },
  innerInfo: {
    alignItems: 'center',
    width: SCREEN_SIZE.SCREEN_WIDTH / 3,
  },
  userHealthInfo: {
    marginVertical: 31,
    flexDirection: 'row',

    width: SCREEN_SIZE.SCREEN_WIDTH,

    alignItems: 'center',
  },
  verticleDevider: {
    width: 1,
    backgroundColor: THEME_COLORS.white,
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraicon: {
    height: 12,
    width: 12,
  },
  changeProfileIcon: {
    height: 22,
    width: 22,
    backgroundColor: THEME_COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 3,
    right: -4,
  },
  optionIcon: {
    height: 20,
    tintColor: THEME_COLORS.white,
    width: 17,
  },
  optionButton: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  //
  bottom: {
    backgroundColor: THEME_COLORS.white,

    width: SCREEN_SIZE.SCREEN_WIDTH,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bottomIconImage: {
    height: 20,
    tintColor: THEME_COLORS.green,
  },
  bottomLeftIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_COLORS.chillyWhite,
    height: 44,
    width: 44,
    borderRadius: 50,
  },
  bottomText: {
    fontSize: APP_FONT_SIZE.h4,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: THEME_COLORS.black,
    marginLeft: 18,
  },
  bottomInnerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightArrowIcon: {
    height: 16,
    width: 20,
  },
  bottomInner: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 18,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  horizontalDevider: {
    height: 0.3,
    backgroundColor: THEME_COLORS.disabled,
    marginHorizontal: 24,
  },
});

export default styles;
