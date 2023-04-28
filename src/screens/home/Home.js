import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './homeStyle';
import Input from '../../components/input/Input';
import Banner from '../../components/banner/Banner';
import TopDoctorsCard from '../../components/topDoctosCards/TopDoctorsCard';
import TOP_DOCTOS from '../../constant/TopDoctorsConstant';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const [search, setsearch] = useState('');
  const navigation = useNavigation();
  function viewTopDoctors() {
    navigation.navigate('TopDoctors');
  }
  function gotoFindDoctor() {
    navigation.navigate('FindDoctor');
  }
  const selectDoctor = (details, index) => {
    navigation.navigate('DoctorDetail', {
      DOCTOR: details,
      INDEX: index,
    });
  };

  function handlePharmacy() {
    navigation.navigate('Pharmacy');
  }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Find your desire healt solution
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/bell-ring.png')}
              style={styles.headerIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <Input
            placeHolder={'Search doctor, drugs, articles...'}
            leftIcon={require('../../assets/icons/search.png')}
            paddingVerticle={6}
            value={search}
            onChange={setsearch}
          />
        </View>
        <View style={styles.options}>
          <View style={styles.optionsDivs}>
            <TouchableOpacity
              style={styles.optionsButtons}
              onPress={gotoFindDoctor}>
              <Image
                source={require('../../assets/icons/stethoscope.png')}
                style={styles.optionIcons}
              />
            </TouchableOpacity>
            <Text style={styles.optionsTitles}>Doctor</Text>
          </View>
          <View style={styles.optionsDivs}>
            <TouchableOpacity
              style={styles.optionsButtons}
              onPress={handlePharmacy}>
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
        <Banner />
        <View style={styles.topDoctors}>
          <View style={styles.headings}>
            <Text style={styles.headingTitle}>Top Doctor</Text>
            <TouchableOpacity onPress={viewTopDoctors}>
              <Text style={styles.ViewAllDoctorsButton}>See all</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginHorizontal: 12,
            }}>
            {/* <FlatList data={TOP_DOCTOS} renderItem={handleTop_Doctors} /> */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {TOP_DOCTOS.map((item, index) => {
                return (
                  <TopDoctorsCard
                    doctorName={item.name}
                    image={item.image}
                    skill={item.skill}
                    key={item.key}
                    handleOnPress={() => selectDoctor(item, index)}
                  />
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.headings}>
            <Text style={styles.headingTitle}>Health article</Text>
            <TouchableOpacity>
              <Text style={styles.ViewAllDoctorsButton}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.healthArticle}>
            <Text style={styles.healthArticleText}>
              The key to a healthy diet is to eat the right amount of calories
              for how active you are so you balance the energy you consume with
              the energy you use.
            </Text>
            <Image
              source={require('../../assets/img/Top_Doctors/1.png')}
              style={styles.healthArticleImage}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
