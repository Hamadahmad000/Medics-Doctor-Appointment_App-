import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './findDoctorStyle';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import Input from '../../components/input/Input';
import TopDoctorsListCards from '../../components/topDoctorsListCards/TopDoctorsListCards';
import {ScrollView} from 'react-native-gesture-handler';
import SCREEN_SIZE from '../../utils/utils';
import RecentDoctor from '../../components/recentDoctor/RecentDoctor';
import TOP_DOCTOS from '../../constant/TopDoctorsConstant';

export default function FindDoctor() {
  const [search, setsearch] = useState('');
  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  // function handleRecendDoctor() {
  //   navigation.navigate('')
  // }
  return (
    <ScrollView
      contentContainerStyle={{minHeight: SCREEN_SIZE.SCREEN_HEIGHT}}
      showsVerticalScrollIndicator={false}>
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
            <Text style={styles.optionsTitles}>General</Text>
          </View>
          <View style={styles.optionsDivs}>
            <TouchableOpacity style={styles.optionsButtons}>
              <Image
                source={require('../../assets/icons/lungs.png')}
                style={styles.optionIcons}
              />
            </TouchableOpacity>
            <Text style={styles.optionsTitles}>Lungs Specialists</Text>
          </View>
          <View style={styles.optionsDivs}>
            <TouchableOpacity style={styles.optionsButtons}>
              <Image
                source={require('../../assets/icons/tooth.png')}
                style={styles.optionIcons}
              />
            </TouchableOpacity>
            <Text style={styles.optionsTitles}>Dentiest</Text>
          </View>
          <View style={styles.optionsDivs}>
            <TouchableOpacity style={styles.optionsButtons}>
              <Image
                source={require('../../assets/icons/physichiatrist.png')}
                style={styles.optionIcons}
              />
            </TouchableOpacity>
            <Text style={styles.optionsTitles}>Psychiatrist</Text>
          </View>
        </View>
        <View style={styles.optionsBottom}>
          <View style={styles.optionsDivs}>
            <TouchableOpacity style={styles.optionsButtons}>
              <Image
                source={require('../../assets/icons/virus.png')}
                style={styles.optionIcons}
              />
            </TouchableOpacity>
            <Text style={styles.optionsTitles}>Covid-19</Text>
          </View>
          <View style={styles.optionsDivs}>
            <TouchableOpacity style={styles.optionsButtons}>
              <Image
                source={require('../../assets/icons/surgeon.png')}
                style={styles.optionIcons}
              />
            </TouchableOpacity>
            <Text style={styles.optionsTitles}>Surgeon</Text>
          </View>
          <View style={styles.optionsDivs}>
            <TouchableOpacity style={styles.optionsButtons}>
              <Image
                source={require('../../assets/icons/electrocardiogram.png')}
                style={styles.optionIcons}
              />
            </TouchableOpacity>
            <Text style={styles.optionsTitles}>Cardiologist</Text>
          </View>
          <View style={styles.optionsDivs}>
            <TouchableOpacity style={styles.optionsButtons}></TouchableOpacity>
          </View>
        </View>
        <View style={styles.headings}>
          <Text style={styles.headingTitle}>Recommended Doctors</Text>
        </View>
        <TouchableOpacity style={styles.recommendedDoctor}>
          <TopDoctorsListCards
            doctorName={'Dr. Marcus Horizon'}
            skill={'Chardiologist'}
            image={require('../../assets/img/Top_Doctors/1.png')}
          />
        </TouchableOpacity>
        <View style={styles.recentDoctorsDiv}>
          <View style={styles.headings}>
            <Text style={styles.headingTitle}>Your Recent Doctors</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.recentDoctolist}
            showsHorizontalScrollIndicator={false}>
            {TOP_DOCTOS.map((list, index) => {
              return (
                <RecentDoctor
                  names={list.name}
                  image={list.image}
                  key={index}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
