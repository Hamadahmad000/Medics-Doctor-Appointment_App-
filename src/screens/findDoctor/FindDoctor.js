import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './findDoctorStyle';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import Input from '../../components/input/Input';

export default function FindDoctor() {
  const [search, setsearch] = useState('');
  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../assets/icons/back.png')}
        onLeftIconPress={handleBack}
        title={'Find Doctors'}
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
      <View style={styles.headings}>
        <Text style={styles.headingTitle}>Category</Text>
      </View>
      <View style={styles.options}>
        <View style={styles.optionsDivs}>
          <TouchableOpacity style={styles.optionsButtons}>
            <Image
              source={require('../../assets/icons/stethoscope.png')}
              style={styles.optionIcons}
            />
          </TouchableOpacity>
          <Text style={styles.optionsTitles}>Doctor</Text>
        </View>
        <View style={styles.optionsDivs}>
          <TouchableOpacity style={styles.optionsButtons}>
            <Image
              source={require('../../assets/icons/plast.png')}
              style={styles.optionIcons}
            />
          </TouchableOpacity>
          <Text style={styles.optionsTitles}>Pharmacy</Text>
        </View>
        <View style={styles.optionsDivs}>
          <TouchableOpacity style={styles.optionsButtons}>
            <Image
              source={require('../../assets/icons/hospital.png')}
              style={styles.optionIcons}
            />
          </TouchableOpacity>
          <Text style={styles.optionsTitles}>Hospitals</Text>
        </View>
        <View style={styles.optionsDivs}>
          <TouchableOpacity style={styles.optionsButtons}>
            <Image
              source={require('../../assets/icons/transport.png')}
              style={styles.optionIcons}
            />
          </TouchableOpacity>
          <Text style={styles.optionsTitles}>Ambulance</Text>
        </View>
      </View>
    </View>
  );
}
