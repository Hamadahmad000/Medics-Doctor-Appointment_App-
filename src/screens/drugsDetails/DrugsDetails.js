import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AppScrollView from '../../components/appScrollView/AppScrollView';
import AppView from '../../components/AppView/AppView';
import Header from '../../components/header/Header';
import styles from './drugsDetailsStyle';
import AppText from '../../components/AppText/AppText';
import {useDispatch, useSelector} from 'react-redux';
import {AddToCart} from '../../store/slices/PharmacySlice';
import Stars from '../../components/star/Stars';
import {THEME_COLORS} from '../../constant/Theme';
import Button from '../../components/button/Button';
import DialogueBox from '../../components/dialogueBox/DialogueBox';
import SCREEN_SIZE from '../../utils/utils';

const DrugsDetails = () => {
  const [cartCount, setcartCount] = useState(0);
  const [heart, setheart] = useState(0);
  const [showPopup, setshowPopup] = useState(false);
  const [totalItems, settotalItems] = React.useState(1);
  const route = useRoute().params;
  const navigation = useNavigation();
  const {DRUGDETAILS} = route;
  const dispatch = useDispatch();
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

  function handleFav() {
    dispatch(AddToCart(DRUGDETAILS));
  }
  function handleBottomCardBtn() {
    navigation.navigate('MyCart');
  }
  function handleBuyNow() {
    setshowPopup(true);
  }
  function handleGotoHome() {
    navigation.replace('BottomTab');
  }
  return (
    <AppView appColor={'white'} flex={1}>
      <Header
        leftIcon={require('../../assets/icons/back.png')}
        title={'Drugs Detail'}
        rightIcon={'cart'}
        cartValue={cartCount}
        onLeftIconPress={handleBack}
        onRightIconPress={handleCartClick}
      />
      <AppScrollView appColor={'white'} minHeight={SCREEN_SIZE.SCREEN_HEIGHT}>
        <Image source={DRUGDETAILS.image} style={styles.img} />
        <AppText
          fontStyle={'interSemiBold'}
          appFontSize={20}
          textColor={'black'}
          marginHorizontal={24}>
          {DRUGDETAILS.name}
        </AppText>
        <AppView
          flexDirection={'row'}
          marginHorizontal={24}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <AppText fontStyle={'interSemiBold'} appFontSize={16}>
            {DRUGDETAILS.quanity}
          </AppText>
          <TouchableOpacity
            onPress={() => {
              setheart(1);
              handleFav();
            }}>
            <Image
              source={
                heart == 0
                  ? require('../../assets/icons/heart.png')
                  : require('../../assets/icons/heart_filled.png')
              }
              style={styles.heartIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </AppView>
        <AppView
          marginHorizontal={24}
          flexDirection={'row'}
          alignItems={'center'}
          paddingVertical={10}>
          <Stars />
          <AppText
            textColor={'green'}
            appFontSize={14}
            marginLeft={5}
            fontStyle={'interSemiBold'}>
            4.0
          </AppText>
        </AppView>
        <AppView
          marginHorizontal={24}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <AppView
            flexDirection={'row'}
            alignItems={'center'}
            marginVertical={20}
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
              appFontSize={'h2'}
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
          <AppText
            fontStyle={'interSemiBold'}
            appFontSize={26}
            textColor={'black'}>
            {DRUGDETAILS.price}
          </AppText>
        </AppView>
        <AppText
          fontStyle={'interSemiBold'}
          appFontSize={20}
          textColor={'black'}
          paddingVertical={5}
          marginHorizontal={24}>
          {'Description'}
        </AppText>
        <AppText
          fontStyle={'interMedium'}
          appFontSize={12}
          paddingVertical={10}
          marginHorizontal={24}>
          OBH COMBI is a cough medicine containing, Paracetamol, Ephedrine HCl,
          and Chlorphenamine maleate which is used to relieve coughs accompanied
          by flu symptoms such as fever, headache, and sneezing... Read more
        </AppText>
      </AppScrollView>
      <View style={styles.BookingDiv}>
        <TouchableOpacity
          style={styles.chatButton}
          onPress={handleBottomCardBtn}>
          <Image
            source={require('../../assets/icons/shopping-cart.png')}
            style={styles.chatButtonIcon}
          />
        </TouchableOpacity>
        <View style={styles.BookingButton}>
          <Button
            bgColor={THEME_COLORS.green}
            title={'Buy Now'}
            textColor={THEME_COLORS.white}
            paddingVerticle={15}
            onpress={handleBuyNow}
          />
        </View>
      </View>
      <DialogueBox
        isvisible={showPopup}
        buttonText={'Back to Home'}
        description={
          'Your payment has been successful, you can have a consultation session with your trusted doctor'
        }
        title={'Payment Success'}
        onpress={handleGotoHome}
      />
    </AppView>
  );
};

export default DrugsDetails;
