import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import AppScrollView from '../../components/appScrollView/AppScrollView';
import Header from '../../components/header/Header';
import CartItems from '../../components/cartItems/CartItems';
import {useNavigation} from '@react-navigation/native';
import FlatListControl from '../../components/flatListControl/FlatListControl';
import {useDispatch, useSelector} from 'react-redux';
import {RemoveFromCart} from '../../store/slices/PharmacySlice';
import AppText from '../../components/AppText/AppText';
import AppView from '../../components/AppView/AppView';
import styles from './myCartStyle';
import Button from '../../components/button/Button';
import {THEME_COLORS} from '../../constant/Theme';
import SCREEN_SIZE from '../../utils/utils';
import DialogueBox from '../../components/dialogueBox/DialogueBox';

const MyCart = () => {
  const [taxes, settaxes] = useState(1);
  const [totalPrice, settotalPrice] = useState('');
  const [value, setvalue] = useState([]);
  const [showPopup, setshowPopup] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.pharmacy);

  function handleBack() {
    navigation.goBack();
  }
  const handleDeleteCart = index => {
    dispatch(RemoveFromCart(index));
  };
  function handleCheckout() {
    setshowPopup(true);
  }
  function handleGotoHome() {
    navigation.replace('BottomTab');
  }

  return (
    <AppView flex={1} appColor={'white'}>
      <Header
        onLeftIconPress={handleBack}
        leftIcon={require('../../assets/icons/back.png')}
        title={'My Cart'}
      />

      {cartData == '' ? (
        <AppView alignItems={'center'} justifyContent={'center'} flex={1}>
          <Image
            resizeMode="contain"
            source={require('../../assets/icons/shopping-cart.png')}
            style={styles.cartLogo}
          />
          <AppText
            fontStyle={'interSemiBold'}
            appFontSize={22}
            marginTop={10}
            alignSelf={'center'}>
            No item
          </AppText>
        </AppView>
      ) : (
        <AppView flex={1}>
          <AppScrollView
            appColor={'white'}
            minHeight={SCREEN_SIZE.SCREEN_HEIGHT}>
            <AppView flex={1}>
              {cartData.map((list, index) => {
                // console.log(parseFloat(list.price.slice(1, 2)));
                console.log(eval(list.maxPrice));
                // setvalue([...value, list.maxPrice]);
                return (
                  <CartItems
                    key={index}
                    image={list.image}
                    name={list.name}
                    price={list.price}
                    quantity={list.quanity}
                    handleDeleteItem={() => handleDeleteCart(index)}
                  />
                );
              })}
              <AppText
                appFontSize={16}
                fontStyle={'interSemiBold'}
                textColor={'black'}
                marginHorizontal={24}
                marginVertical={15}>
                Payment Detail
              </AppText>
              <AppView flexDirection={'row'} justifyContent={'space-between'}>
                <AppText
                  appFontSize={14}
                  fontStyle={'interRegular'}
                  textColor={'black'}
                  marginHorizontal={24}>
                  Subtotal
                </AppText>
                <AppText
                  appFontSize={14}
                  fontStyle={'interRegular'}
                  textColor={'black'}
                  marginHorizontal={24}>
                  $25.98
                </AppText>
              </AppView>
              <AppView
                flexDirection={'row'}
                justifyContent={'space-between'}
                marginVertical={16}>
                <AppText
                  appFontSize={14}
                  fontStyle={'interRegular'}
                  textColor={'black'}
                  marginHorizontal={24}>
                  Taxes
                </AppText>
                <AppText
                  appFontSize={14}
                  fontStyle={'interRegular'}
                  textColor={'black'}
                  marginHorizontal={24}>
                  {`$${taxes}.00`}
                </AppText>
              </AppView>
              <AppView flexDirection={'row'} justifyContent={'space-between'}>
                <AppText
                  appFontSize={14}
                  fontStyle={'interSemiBold'}
                  textColor={'black'}
                  paddingBottom={20}
                  marginHorizontal={24}>
                  Total
                </AppText>
                <AppText
                  appFontSize={14}
                  fontStyle={'interSemiBold'}
                  textColor={'black'}
                  marginHorizontal={24}>
                  {cartData !== null &&
                    `$${
                      parseFloat(Math.round(cartData[0].price.slice(1, 3))) +
                      taxes
                    }.${parseFloat(cartData[0].price.slice(3, 5))}`}
                </AppText>
              </AppView>
              <AppText
                appFontSize={16}
                fontStyle={'interSemiBold'}
                textColor={'black'}
                marginHorizontal={24}
                marginVertical={15}>
                Payment Detail
              </AppText>
              <AppView
                flexDirection={'row'}
                justifyContent={'space-between'}
                marginHorizontal={24}
                alignItems={'center'}
                paddingVertical={10}
                borderRadius={12}
                marginVertical={10}
                marginBottom={80}
                style={styles.paymentMethod}
                paddingHorizontal={15}>
                <Image
                  source={require('../../assets/icons/visa.png')}
                  resizeMode="contain"
                  style={styles.paymentIcon}
                />
                <AppText appFontSize={14} fontStyle={'interRegular'}>
                  Change
                </AppText>
              </AppView>
            </AppView>
          </AppScrollView>
          <View style={styles.BookingDiv}>
            <View>
              <Text style={styles.totalFeeInner}>Total</Text>
              <Text style={styles.totalFeee}>{'$90'}</Text>
            </View>
            <View style={styles.BookingButton}>
              <Button
                bgColor={THEME_COLORS.green}
                title={'Checkout'}
                textColor={THEME_COLORS.white}
                paddingVerticle={15}
                onpress={handleCheckout}
              />
            </View>
          </View>
        </AppView>
      )}
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

export default MyCart;
