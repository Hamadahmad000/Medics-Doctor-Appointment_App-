import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './topDoctorsStyle';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import TopDoctorsListCards from '../../components/topDoctorsListCards/TopDoctorsListCards';
import TOP_DOCTOS from '../../constant/TopDoctorsConstant';
export default function TopDoctors() {
  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  const selectDoctor = (details, index) => {
    navigation.navigate('DoctorDetail', {
      DOCTOR: details,
      INDEX: index,
    });
  };
  const handleTopDoctosList = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => selectDoctor(item, index)}>
        <TopDoctorsListCards
          doctorName={item.name}
          image={item.image}
          key={item.key}
          skill={item.skill}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Header
        leftIcon={require('../../assets/icons/back.png')}
        onLeftIconPress={handleBack}
        title={'Top Doctor'}
        rightIcon={require('../../assets/icons/dots.png')}
      />

      <View style={{marginHorizontal: 24, paddingBottom: 90}}>
        <FlatList
          data={TOP_DOCTOS}
          renderItem={handleTopDoctosList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
