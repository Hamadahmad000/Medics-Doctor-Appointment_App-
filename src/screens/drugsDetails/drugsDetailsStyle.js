import {StyleSheet} from 'react-native';
import {THEME_COLORS} from '../../constant/Theme';

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginVertical: 10,
  },
  heartIcon: {
    height: 20,
    width: 20,
  },
  increaseItems: {
    height: 30,
    width: 30,
  },
  decreaseItems: {
    height: 20,
    width: 28,
  },
  quantityControl: {
    // position: 'absolute',
    // bottom: 3,
  },
  BookingDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: THEME_COLORS.white,
    paddingHorizontal: 24,
    paddingVertical: 5,
  },
  chatButton: {
    height: 50,
    width: 50,
    backgroundColor: THEME_COLORS.chillyWhite,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  chatButtonIcon: {
    height: 20,
    width: 20,
    tintColor: THEME_COLORS.green,
  },
  BookingButton: {
    width: '80%',
  },
});

export default styles;
