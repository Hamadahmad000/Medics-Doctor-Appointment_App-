import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';
import {hexToRgbA} from '../../helper/ThemeHelper';

const styles = StyleSheet.create({
  cardContainer: {
    width: '18%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: THEME_COLORS.iconGray,
    justifyContent: 'center',

    marginHorizontal: 12,
  },
  image: {
    height: 57,
    width: 57,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
  startIcon: {
    height: 11,
    width: 11,
  },
  locationIcon: {
    height: 11,
    width: 11,
    tintColor: THEME_COLORS.iconGray,
    // marginLeft: '3%',
    // marginRight: '2%',
  },
  doctorName: {
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: APP_FONT_SIZE.h5,
    lineHeight: 16,
    color: THEME_COLORS.black,
  },
  doctorSkill: {
    fontFamily: APP_FONT_FAMILIY.interMedium,
    fontSize: 12,
    paddingBottom: 5,
  },
  ratingDiv: {
    flexDirection: 'row',
    //  marginTop: '4%'
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: hexToRgbA(THEME_COLORS.green, 0.3),
    paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 0,
  },
  rating: {
    fontFamily: APP_FONT_FAMILIY.interMedium,
    fontSize: 10,
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loaction: {
    fontFamily: APP_FONT_FAMILIY.interMedium,
    fontSize: 10,
  },
});

export default styles;
