import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from './onboardingStyle';
import {THEME_COLORS} from '../../constant/Theme';
import {ONBOARDING_SLIDES} from '../../constant/OnBoardingConstant';
import SCREEN_SIZE from '../../utils/utils';
import Description from '../../components/boardingDescription/Description';
import {useNavigation} from '@react-navigation/native';

export default function Onboarding() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const navigation = useNavigation();
  const ref = useRef();
  const handleOnboardingItes = ({item, intex}) => {
    return (
      <View style={styles.slidersTop}>
        <Image
          source={item.image}
          style={styles.onBoardingImage}
          resizeMode="contain"
        />
      </View>
    );
  };
  const nextScreen = () => {
    setcurrentIndex(currentIndex + 1);
    ref.current.scrollToIndex({
      animated: true,
      index: parseInt(currentIndex) + 1,
    });
  };
  const gotoRegisteration = () => {
    navigation.replace('OnBoarding2');
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={THEME_COLORS.white}
        barStyle={'dark-content'}
      />
      <View>
        <Animated.FlatList
          ref={ref}
          data={ONBOARDING_SLIDES}
          renderItem={handleOnboardingItes}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => {
            const event = e.nativeEvent.contentOffset.x;
            setcurrentIndex(
              parseInt((event / SCREEN_SIZE.SCREEN_WIDTH).toFixed(0)),
            );
            console.log(currentIndex);
          }}
        />
        <View style={styles.bottom}>
          <Description currentState={currentIndex} />
          <View style={styles.bottomInner}>
            <View style={styles.index}>
              {ONBOARDING_SLIDES.map((_, index) => {
                return (
                  <View
                    style={[
                      styles.screenIndicator,
                      {
                        backgroundColor:
                          index == currentIndex ? THEME_COLORS.green : 'gray',
                      },
                    ]}
                    key={index}
                  />
                );
              })}
            </View>
            <TouchableOpacity
              style={styles.skipButtonDiv}
              onPress={
                ONBOARDING_SLIDES.length - 1 == currentIndex
                  ? gotoRegisteration
                  : nextScreen
              }>
              <Image
                source={require('../../assets/icons/arrow-right.png')}
                style={styles.skipButton}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.skipButtonTop} onPress={gotoRegisteration}>
        Skip
      </Text>
    </View>
  );
}
