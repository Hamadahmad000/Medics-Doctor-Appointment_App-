import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    padding: 15,
    borderWidth: 0.3,
    borderRadius: 8,
    borderColor: THEME_COLORS.iconGray,
    marginVertical: 10,
  },
  doctorName: {
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: APP_FONT_SIZE.h3,
    color: THEME_COLORS.black,
  },
  skill: {
    fontFamily: APP_FONT_FAMILIY.interMedium,
    fontSize: APP_FONT_SIZE.xxs,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  icon: {
    height: 12,
    width: 12,
  },
  text: {
    fontFamily: APP_FONT_FAMILIY.interMedium,
    fontSize: APP_FONT_SIZE.xxs,
    marginLeft: 5,
  },
  infoInner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 14,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
