import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: 24,
  },
  headings: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  headingTitle: {
    fontSize: APP_FONT_SIZE.h4,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    color: THEME_COLORS.black,
  },
  BannerImage: {
    width: '60%',
    height: 179,
    position: 'absolute',
    bottom: -20,
    right: 0,
  },
});

export default styles;
