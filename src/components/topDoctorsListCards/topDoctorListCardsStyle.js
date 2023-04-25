import {StyleSheet} from 'react-native';
import {
  APP_FONT_FAMILIY,
  APP_FONT_SIZE,
  THEME_COLORS,
} from '../../constant/Theme';
import {hexToRgbA} from '../../helper/ThemeHelper';

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    alignItems: 'center',

    borderRadius: 12,

    borderColor: THEME_COLORS.iconGray,
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 8,
    paddingVertical: 10,
  },
  image: {
    height: 111,
    width: 111,
    borderRadius: 12,
    alignSelf: 'center',
    // marginVertical: 20,
    marginRight: 18,
  },
  startIcon: {
    height: 13,
    width: 13,
  },
  locationIcon: {
    height: 13,
    width: 13,
    tintColor: THEME_COLORS.iconGray,
    // marginLeft: '3%',
    // marginRight: '2%',
  },
  doctorName: {
    fontFamily: APP_FONT_FAMILIY.interSemiBold,
    fontSize: APP_FONT_SIZE.h3,
    lineHeight: 21,
    color: THEME_COLORS.black,
  },
  doctorSkill: {
    fontFamily: APP_FONT_FAMILIY.interMedium,
    fontSize: 12,
    paddingBottom: 5,
  },
  ratingDiv: {
    // flexDirection: 'row',
    //  marginTop: '4%'
    alignItems: 'flex-start',
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: hexToRgbA(THEME_COLORS.green, 0.3),
    paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  rating: {
    fontFamily: APP_FONT_FAMILIY.interMedium,
    fontSize: 12,
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  loaction: {
    fontFamily: APP_FONT_FAMILIY.interMedium,
    fontSize: 14,
    paddingLeft: 5,
  },
});

export default styles;
