import {StyleSheet} from 'react-native';
import {APP_FONT_FAMILIY, THEME_COLORS} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
  },
  noChatContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  noChat: {
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: 20,
    color: THEME_COLORS.black,
  },
});

export default styles;
