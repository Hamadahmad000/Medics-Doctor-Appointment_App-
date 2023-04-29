import {StyleSheet} from 'react-native';
import {THEME_COLORS} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 0.2,
    borderColor: THEME_COLORS.iconGray,
  },
  img: {
    height: 60,
    width: 60,
    margin: 30,
  },
  increaseItems: {
    height: 18,
    width: 18,
  },
  decreaseItems: {
    height: 15,
    width: 14,
  },
  quantityControl: {
    position: 'absolute',
    bottom: 3,
  },
  trash: {
    height: 18,
    width: 18,
    tintColor: THEME_COLORS.iconGray,
    position: 'absolute',
    right: 10,
    top: 0,
     
  },
});

export default styles;
