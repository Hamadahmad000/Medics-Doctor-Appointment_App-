import {StyleSheet} from 'react-native';
import {THEME_COLORS} from '../../constant/Theme';
import SCREEN_SIZE from '../../utils/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: THEME_COLORS.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 50,
    alignItems: 'center',
    height: SCREEN_SIZE.SCREEN_HEIGHT / 11.5,
  },
  icon: {
    height: 23,
    width: 23,
    // marginVertical: 28,
    tintColor: THEME_COLORS.TabIcon,
  },
});

export default styles;
