import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

const SCREEN_SIZE = {
  SCREEN_HEIGHT: height,
  SCREEN_WIDTH: width,
};

export default SCREEN_SIZE;
