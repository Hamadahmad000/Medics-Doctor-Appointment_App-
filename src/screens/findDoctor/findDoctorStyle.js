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
    height: 30,
    width: 30,
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
    marginTop: 20,
  },
  headingTitle: {
    fontSize: APP_FONT_SIZE.h4,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: THEME_COLORS.black,
  },
  optionsBottom: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
    justifyContent: 'space-between',
  },
  recommendedDoctor: {
    marginHorizontal: 24,
  },
  recentDoctolist: {
    justifyContent: 'space-between',
    width: '100%',
    marginHorizontal: 24,
  },
  // recentDoctorsDiv: {flex: 1},
});

export default styles;
