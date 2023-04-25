import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';
import SCREEN_SIZE from '../../utils/utils';
import {hexToRgbA} from '../../helper/ThemeHelper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.white,
    height: SCREEN_SIZE.SCREEN_HEIGHT / 1 - SCREEN_SIZE.SCREEN_HEIGHT / 38,
    width: '100%',
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  headerIcon: {
    height: 22,
    width: 22,
    tintColor: THEME_COLORS.black,
  },
  headerTitle: {
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: APP_FONT_SIZE.large,
    color: THEME_COLORS.black,
    width: '60%',
  },
  searchBar: {
    marginHorizontal: 24,
  },
  options: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
    justifyContent: 'space-between',
  },
  optionsButtons: {
    alignItems: 'center',
    width: 64,
    height: 56,

    justifyContent: 'center',
    backgroundColor: THEME_COLORS.white,
    borderRadius: 16,
  },
  optionIcons: {
    height: 25,
    width: 25,
  },
  optionsTitles: {
    fontSize: APP_FONT_SIZE.h5,
    fontFamily: APP_FONT_FAMILIY.interRegular,
  },
  optionsDivs: {
    alignItems: 'center',
  },
  headings: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  headingTitle: {
    fontSize: APP_FONT_SIZE.h4,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: THEME_COLORS.black,
  },
  ViewAllDoctorsButton: {
    fontFamily: APP_FONT_FAMILIY.interRegular,
    fontSize: APP_FONT_SIZE.h5,
    color: THEME_COLORS.green,
  },
  healthArticle: {
    marginHorizontal: 24,
    backgroundColor: THEME_COLORS.chillyWhite,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  healthArticleText: {
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: APP_FONT_SIZE.h5,
    width: '60%',
    color: THEME_COLORS.black,
  },
  healthArticleImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    position: 'absolute',
    right: 10,
    bottom: '25%',
    // top: '50%',
  },
});

export default styles;
