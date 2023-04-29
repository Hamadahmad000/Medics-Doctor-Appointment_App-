import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppView from '../AppView/AppView';
import styles from './pharmacyProductsStyle';
import AppText from '../AppText/AppText';

const PharmacyProducts = ({
  image,
  name,
  price,
  quantity,
  index,
  onButtonPress,
}) => {
  return (
    <AppView
      paddingVertical={10}
      marginLeft={24}
      paddingHorizontal={8}
      style={styles.container}
      borderRadius={12}>
      <AppView
        alignItems={'center'}
        paddingVertical={20}
        paddingHorizontal={25}>
        <Image source={image} style={styles.img} resizeMode="contain" />
      </AppView>
      <AppText
        appFontSize={'xxs'}
        fontStyle={'interSemiBold'}
        textColor={'black'}>
        {name}
      </AppText>
      <AppText appFontSize={9} fontStyle={'interMedium'} textColor={'black'}>
        {quantity}
      </AppText>
      <AppView
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        paddingVertical={6}>
        <AppText
          appFontSize={'xs'}
          fontStyle={'interSemiBold'}
          textColor={'black'}>
          {price}
        </AppText>
        <TouchableOpacity onPress={onButtonPress}>
          <Image
            source={require('../../assets/icons/addition.png')}
            style={styles.addLogo}
          />
        </TouchableOpacity>
      </AppView>
    </AppView>
  );
};

export default PharmacyProducts;
