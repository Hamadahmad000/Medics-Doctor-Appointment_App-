import {StyleSheet} from 'react-native';
import {APP_FONT_FAMILIY, THEME_COLORS} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
    height: 125,
  },
  doctorImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  doctorName: {
    fontSize: 13,
    fontFamily: APP_FONT_FAMILIY.interMedium,
    color: THEME_COLORS.textNavy,
    marginTop: 5,
  },
});

export default styles;
