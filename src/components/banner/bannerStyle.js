import {StyleSheet} from 'react-native';
import {APP_FONT_FAMILIY, THEME_COLORS} from '../../constant/Theme';

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: THEME_COLORS.chillyWhite,
    marginHorizontal: 24,
    paddingHorizontal: 26,
    paddingVertical: 21,
    borderRadius: 10,
  },
  title: {
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: 18,
    color: THEME_COLORS.black,
    lineHeight: 25,
  },
  leftConten: {
    width: '60%',
  },
  bannerButton: {
    width: 100,
    marginTop: 20,
  },
  whiteBG: {
    height: 113,
    width: 113,
    backgroundColor: THEME_COLORS.white,
    borderRadius: 60,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  bannerImage: {
    height: '120%',
    position: 'absolute',
    bottom: 0,
    right: -200,
  },
});

export default styles;
