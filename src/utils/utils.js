import {Dimensions} from 'react-native';
import {APP_FONT_FAMILIY} from '../constant/Theme';

export function getFontFamily(familyStyle) {
  const fontFamily = APP_FONT_FAMILIY[familyStyle];
  return fontFamily;
}

const {height, width} = Dimensions.get('screen');

const SCREEN_SIZE = {
  SCREEN_HEIGHT: height,
  SCREEN_WIDTH: width,
};

export default SCREEN_SIZE;
