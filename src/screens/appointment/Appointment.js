import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './appointmentStyle';
import Header from '../../components/header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import TopDoctorsListCards from '../../components/topDoctorsListCards/TopDoctorsListCards';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Button from '../../components/button/Button';
import {THEME_COLORS} from '../../constant/Theme';
import GetDateTIme from '../../helper/DateTimeHelper';
import DialogueBox from '../../components/dialogueBox/DialogueBox';
export default function Appointment() {
  const [Date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showDialogueBox, setshowDialogueBox] = useState(false);

  const navigation = useNavigation();
  const route = useRoute().params.DOCTOR_DETAILS;
  useEffect(() => {
    setDate(GetDateTIme());
  }, []);

  function handleBack() {
    navigation.goBack();
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const selectedDate = date.toString();

    const x = selectedDate.split(' ');

    const time = x[4].split(':');
    // time[0] < 11 ? time[0] = time[0].slice(1,2)
    setDate(`${x[0]}, ${x[1]} ${x[2]}, ${x[3]} | ${time[0]}:${time[1]}`);

    hideDatePicker();
  };

  function handleBooking() {
    setshowDialogueBox(true);
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          leftIcon={require('../../assets/icons/back.png')}
          onLeftIconPress={handleBack}
          title={'Appointment'}
          rightIcon={require('../../assets/icons/dots.png')}
        />
        <View style={styles.doctorInfo}>
          <TopDoctorsListCards
            doctorName={route.name}
            skill={route.skill}
            image={route.image}
          />
        </View>
        <View style={styles.heading}>
          <Text style={styles.about}>Date</Text>
          <Text style={styles.change}>Chnage</Text>
        </View>
        <View style={styles.TimingDiv}>
          <TouchableOpacity style={styles.leftButton} onPress={showDatePicker}>
            <Image
              source={require('../../assets/icons/calenderFilled.png')}
              style={styles.leftButtonIcon}
            />
          </TouchableOpacity>
          <Text style={styles.orderDate}>{Date}</Text>
        </View>

        <View style={styles.heading}>
          <Text style={styles.about}>Reason</Text>
          <Text style={styles.change}>Chnage</Text>
        </View>
        <View style={styles.TimingDiv}>
          <TouchableOpacity style={styles.leftButton} onPress={showDatePicker}>
            <Image
              source={require('../../assets/icons/question.png')}
              style={styles.leftButtonIcon}
            />
          </TouchableOpacity>
          <Text style={styles.orderDate}>Chest pain</Text>
        </View>
        <View style={styles.devider}></View>
        <View style={styles.heading}>
          <Text style={styles.about}>Payment Detail</Text>
        </View>
        <View style={styles.paymentDetails}>
          <View style={styles.paymentDetailsInner}>
            <Text style={styles.leftText}>Consultation</Text>
            <Text style={styles.rightText}>{route.fee}</Text>
          </View>
          <View style={styles.paymentDetailsInner}>
            <Text style={styles.leftText}>Admin Free</Text>
            <Text style={styles.rightText}>{'$0.00'}</Text>
          </View>
          <View style={styles.paymentDetailsInner}>
            <Text style={styles.leftText}>Additional Discount</Text>
            <Text style={styles.rightText}>{'-'}</Text>
          </View>
          <View style={styles.paymentDetailsInner}>
            <Text style={styles.leftTextTotal}>Total</Text>
            <Text style={styles.rightText}>{route.fee}</Text>
          </View>
        </View>
        <View style={styles.devider}></View>
        <View style={styles.heading}>
          <Text style={styles.about}>Payment Method</Text>
        </View>
        <View style={styles.BookingDiv}>
          <View>
            <Text style={styles.totalFeeInner}>Total</Text>
            <Text style={styles.totalFeee}>{route.fee}</Text>
          </View>
          <View style={styles.BookingButton}>
            <Button
              bgColor={THEME_COLORS.green}
              title={'Booking'}
              textColor={THEME_COLORS.white}
              paddingVerticle={15}
              onpress={handleBooking}
            />
          </View>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <DialogueBox
          isvisible={showDialogueBox}
          buttonText={'Chat Doctor'}
          title={'Payment Success'}
          description={
            'Your payment has been successful, you can have a consultation session with your trusted doctor'
          }
          // onpress={handleDoctoChat}
        />
      </ScrollView>
    </View>
  );
}
