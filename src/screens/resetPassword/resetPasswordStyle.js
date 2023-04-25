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
  heading: {
    fontFamily: APP_FONT_FAMILIY.interBold,
    fontSize: APP_FONT_SIZE.xl,
    color: THEME_COLORS.black,
    paddingVertical: 8,
  },
  section: {
    paddingHorizontal: 24,
    paddingVertical: 13,
  },
  description: {
    fontSize: APP_FONT_SIZE.h4,
    fontFamily: APP_FONT_FAMILIY.interRegular,
    lineHeight: 24,
    marginBottom: 12,
  },
  resetMode: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME_COLORS.lightgray,
    width: '100%',
    padding: 5,
    borderRadius: 29,
    marginVertical: 12,
    borderWidth: 0.1,
    borderColor: THEME_COLORS.iconGray,
  },
  modeButton: {
    width: '50%',
    backgroundColor: THEME_COLORS.white,
    borderRadius: 29,
  },
  modeButtonText: {
    paddingVertical: 12,
    alignSelf: 'center',
    fontFamily: APP_FONT_FAMILIY.interMedium,
    fontSize: APP_FONT_SIZE.h5,
  },
});

export default styles;
