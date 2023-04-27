import {StyleSheet} from 'react-native';
import {APP_FONT_FAMILIY, THEME_COLORS} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Text: {
    color: THEME_COLORS.black,
    fontFamily: APP_FONT_FAMILIY.interBold,
  },
});

export default styles;
