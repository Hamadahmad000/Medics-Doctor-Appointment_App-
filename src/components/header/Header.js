import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './headerStyle';
import AppView from '../AppView/AppView';
import AppText from '../AppText/AppText';

export default function Header({
  leftIcon,
  rightIcon,
  title,
  onLeftIconPress,
  leftTitle,
  rightIconSize,
  cartValue,
  onRightIconPress,
}) {
  return (
    <View style={styles.container}>
      {leftIcon ? (
        <TouchableOpacity onPress={onLeftIconPress}>
          <Image
            source={leftIcon}
            style={styles.leftIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : leftTitle ? (
        <Text style={styles.leftTitle}>{leftTitle}</Text>
      ) : (
        <View></View>
      )}
      {title ? <Text style={styles.title}>{title}</Text> : <View></View>}
      {rightIcon ? (
        rightIcon == 'cart' ? (
          <AppView>
            <TouchableOpacity
              onPress={() => (onRightIconPress ? onRightIconPress() : null)}>
              <AppView
                alignItems={'center'}
                justifyContent={'center'}
                appColor={'red'}
                width={15}
                height={15}
                borderRadius={50}
                style={styles.cartItemCount}>
                <AppText appFontSize={'h6'} textColor={'white'}>
                  {cartValue}
                </AppText>
              </AppView>
              <Image
                source={require('../../assets/icons/shopping-cart.png')}
                style={[
                  styles.rightIcon,
                  {
                    height: rightIconSize ? rightIconSize : 18,
                    width: rightIconSize ? rightIconSize : 18,
                  },
                ]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </AppView>
        ) : (
          <Image
            source={rightIcon}
            style={[
              styles.rightIcon,
              {
                height: rightIconSize ? rightIconSize : 18,
                width: rightIconSize ? rightIconSize : 18,
              },
            ]}
            resizeMode="contain"
          />
        )
      ) : (
        <View style={{width: 50}}></View>
      )}
    </View>
  );
}
