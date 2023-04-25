import {StyleSheet} from 'react-native';
import {APP_FONT_FAMILIY, APP_FONT_SIZE} from '../../constant/Theme';

const styles = StyleSheet.create({
  otpInputDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 32,
  },
  otpInputs: {
    height: 60,
    width: 60,
    borderRadius: 16,

    textAlign: 'center',
    fontSize: APP_FONT_SIZE.xl,
    fontFamily: APP_FONT_FAMILIY.interBold,
  },
});

export default styles;
