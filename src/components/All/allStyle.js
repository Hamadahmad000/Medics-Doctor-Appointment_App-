import {StyleSheet} from 'react-native';
import {APP_FONT_FAMILIY, THEME_COLORS} from '../../constant/Theme';
import SCREEN_SIZE from '../../utils/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
