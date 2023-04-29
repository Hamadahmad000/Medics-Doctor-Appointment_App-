import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppView from '../AppView/AppView';
import styles from './cartItemsStyle';
import AppText from '../AppText/AppText';

const CartItems = ({handleDeleteItem, name, quantity, price, image}) => {
  const [totalItems, settotalItems] = React.useState(1);
  return (
    <AppView
      marginHorizontal={24}
      borderRadius={12}
      style={styles.container}
      marginVertical={10}
      justifyContent={'space-between'}
      flexDirection={'row'}>
      <Image source={image} style={styles.img} resizeMode="contain" />
      <AppView width={'27%'}>
        <AppText
          appFontSize={18}
          fontStyle={'interSemiBold'}
          textColor={'black'}>
          {name}
        </AppText>
        <AppText appFontSize={'xxs'} fontStyle={'interMedium'}>
          {quantity}
        </AppText>
        <AppView
          flexDirection={'row'}
          alignItems={'center'}
          marginTop={30}
          style={styles.quantityControl}>
          <TouchableOpacity
            onPress={() =>
              settotalItems(val => (totalItems > 1 ? val - 1 : 1))
            }>
            <Image
              source={require('../../assets/icons/minus.png')}
              resizeMode="contain"
              style={styles.decreaseItems}
            />
          </TouchableOpacity>
          <AppText
            appFontSize={'h4'}
            fontStyle={'interSemiBold'}
            textColor={'black'}
            paddingHorizontal={10}>
            {totalItems}
          </AppText>
          <TouchableOpacity onPress={() => settotalItems(val => val + 1)}>
            <Image
              source={require('../../assets/icons/addition.png')}
              style={styles.increaseItems}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </AppView>
      </AppView>
      <AppView
        width={'25%'}
        alignItems={'flex-end'}
        justifyContent={'flex-end'}>
        <AppText
          appFontSize={18}
          fontStyle={'interSemiBold'}
          textColor={'black'}>
          {price}
        </AppText>
      </AppView>
      <TouchableOpacity onPress={handleDeleteItem}>
        <Image
          source={require('../../assets/icons/trash-bin.png')}
          resizeMode="contain"
          style={styles.trash}
        />
      </TouchableOpacity>
    </AppView>
  );
};

export default CartItems;
