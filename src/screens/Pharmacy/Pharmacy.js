import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppView from '../../components/AppView/AppView';
import AppScrollView from '../../components/appScrollView/AppScrollView';
import Header from '../../components/header/Header';
import styles from './pharmacyStyle';
import Input from '../../components/input/Input';
import Banner from '../../components/banner/Banner';
import {useNavigation} from '@react-navigation/native';
import FlatListControl from '../../components/flatListControl/FlatListControl';
import {
  PHARMACY_PRODUCTS_A,
  PHARMACY_PRODUCTS_B,
} from '../../constant/PharmacyConstant';
import {useSelector} from 'react-redux';

const Pharmacy = () => {
  const [search, setsearch] = useState('');
  const [cartCount, setcartCount] = useState(0);
  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  function handleCartClick() {
    navigation.navigate('MyCart');
  }
  const cartData = useSelector(state => state.pharmacy);

  useEffect(() => {
    setcartCount(cartData.length > 0 ? cartData.length : 0);
  }, [cartData]);

  return (
    <AppScrollView appColor={'white'} flex={1} containerBottomPending={20}>
      <Header
        leftIcon={require('../../assets/icons/back.png')}
        title={'Pharmacy'}
        rightIcon={'cart'}
        cartValue={cartCount}
        onLeftIconPress={handleBack}
        onRightIconPress={handleCartClick}
      />

      <View style={styles.searchBar}>
        <Input
          placeHolder={'Find a doctor'}
          leftIcon={require('../../assets/icons/search.png')}
          paddingVerticle={6}
          value={search}
          onChange={setsearch}
        />
      </View>
      <Banner
        marginVertical={25}
        buttonWidth={150}
        buttonTitle={'Upload Prescription'}
        buttonBorderRadiues={8}
        img={require('../../assets/img/PharmacyBanner.png')}
        imgStyle={styles.BannerImage}
      />
      <View style={styles.headings}>
        <Text style={styles.headingTitle}>Popular Product</Text>
        <TouchableOpacity>
          <Text style={styles.ViewAllDoctorsButton}>See all</Text>
        </TouchableOpacity>
      </View>
      <AppView flexDirection={'row'} paddingRight={24}>
        <FlatListControl data={PHARMACY_PRODUCTS_A} horizontal={true} />
      </AppView>
      <View style={styles.headings}>
        <Text style={[styles.headingTitle, {marginTop: 20}]}>
          Product on Sale
        </Text>
        <TouchableOpacity>
          <Text style={styles.ViewAllDoctorsButton}>See all</Text>
        </TouchableOpacity>
      </View>
      <AppView flexDirection={'row'} paddingRight={24}>
        <FlatListControl data={PHARMACY_PRODUCTS_B} horizontal={true} />
      </AppView>
    </AppScrollView>
  );
};

export default Pharmacy;
