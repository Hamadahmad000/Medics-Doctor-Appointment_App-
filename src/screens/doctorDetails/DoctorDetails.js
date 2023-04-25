import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './doctorDetailsStyle';
import Header from '../../components/header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import TopDoctorsListCards from '../../components/topDoctorsListCards/TopDoctorsListCards';
import DateButtons from '../../components/dateButtons/DateButtons';
import {DATES, TIME_TABLE} from '../../constant/DoctorDetailsConstant';
import TimeButton from '../../components/timeButtons/TimeButton';
import Button from '../../components/button/Button';
import {THEME_COLORS} from '../../constant/Theme';
import SCREEN_SIZE from '../../utils/utils';
export default function DoctorDetails() {
  const [selectedDate, setselectedDate] = useState(3);
  const [selectedTime, setselectedTime] = useState(4);
  const [isTimeButtonDisabled, setisTimeButtonDisabled] = useState(0);
  const navigation = useNavigation();
  const route = useRoute().params.DOCTOR;
  const routeIndex = useRoute().params.INDEX;
  function handleBack() {
    navigation.goBack();
  }
  function bookAppointment() {
    navigation.navigate('Appointment', {
      DOCTOR_DETAILS: route,
    });
  }

  return (
    <View style={styles.container} key={routeIndex}>
      <Header
        leftIcon={require('../../assets/icons/back.png')}
        onLeftIconPress={handleBack}
        title={'Doctor Detail'}
        rightIcon={require('../../assets/icons/dots.png')}
      />
      <View style={styles.doctorInfo}>
        <TopDoctorsListCards
          doctorName={route.name}
          skill={route.skill}
          image={route.image}
          borderDisabled={true}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{minHeight: '100%'}}
        scrollEnabled={true}>
        <Text style={styles.about}>About</Text>
        <Text style={styles.aboutInfo}>{route.about}</Text>
        <View style={styles.dateButtons}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {DATES.map((item, index) => {
              return (
                <DateButtons
                  keyValue={item.key}
                  date={item.date}
                  day={item.day}
                  onpress={() => setselectedDate(item.key)}
                  selected={selectedDate}
                  key={item.key}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.devider}></View>
        <View style={styles.TimeButtons}>
          {TIME_TABLE.map((item, index) => {
            return (
              <TimeButton
                keyValue={item.key}
                time={item.time}
                onpress={() => setselectedTime(item.key)}
                selected={selectedTime}
                disabled={isTimeButtonDisabled}
                key={item.key}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.BookingDiv}>
        <TouchableOpacity style={styles.chatButton}>
          <Image
            source={require('../../assets/icons/message_stroke.png')}
            style={styles.chatButtonIcon}
          />
        </TouchableOpacity>
        <View style={styles.BookingButton}>
          <Button
            bgColor={THEME_COLORS.green}
            title={'Book Apointment'}
            textColor={THEME_COLORS.white}
            paddingVerticle={15}
            onpress={bookAppointment}
          />
        </View>
      </View>
    </View>
  );
}
