import {StyleSheet} from 'react-native';
import {THEME_COLORS} from '../../constant/Theme';

const styles = StyleSheet.create({
  backbtn: {
    height: 15,
    width: 10,
    tintColor: THEME_COLORS.black,
  },
  videoCallIcon: {
    height: 13,
    width: 20,
  },
  audioCallIcon: {
    height: 17,
    width: 17,
    marginHorizontal: 18,
  },
  optionsIcon: {
    height: 17,
    width: 17,
  },
});

export default styles;
