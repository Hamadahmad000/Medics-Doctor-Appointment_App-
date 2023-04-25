import {StyleSheet} from 'react-native';
import {APP_FONT_FAMILIY} from '../../constant/Theme';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
  },
  icon: {
    height: 20,
    width: 20,
  },
});

export default styles;
