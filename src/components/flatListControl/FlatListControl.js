import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import PharmacyProducts from '../pharmacyProducts/PharmacyProducts';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AddToCart} from '../../store/slices/PharmacySlice';

const FlatListControl = ({data, horizontal}) => {
  const dispatch = useDispatch();
  function handleAddTOCart(item) {
    dispatch(AddToCart(item));
  }
  const navigation = useNavigation();

  const handleDataShow = ({item, index}) => {
    const viewDrugDetails = (drugsDetails, drugsID) => {
      navigation.navigate('DrugsDetails', {
        DRUGDETAILS: drugsDetails,
        DRUGID: drugsID,
      });
    };

    return (
      <TouchableOpacity onPress={() => viewDrugDetails(item, index)}>
        <PharmacyProducts
          key={index}
          name={item.name}
          image={item.image}
          price={item.price}
          index={index}
          onButtonPress={() => handleAddTOCart(item)}
        />
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={handleDataShow}
      horizontal={horizontal}
    />
  );
};

export default FlatListControl;
