import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './upCommingStyle';
import UpCommingSchedulCard from '../upcommingSchedulCard/UpCommingSchedulCard';
import {useSelector} from 'react-redux';
import AppScrollView from '../appScrollView/AppScrollView';

const Upcomming = () => {
  const scheduleData = useSelector(state => state.bookDoctor);

  const handleSchedulelIstData = (item, index) => {
    return (
      <UpCommingSchedulCard
        key={index}
        image={item.image}
        name={item.name}
        skill={item.skill}
      />
    );
  };
  const HandleScheduleList = () => {
    return <View>{scheduleData.map(handleSchedulelIstData)}</View>;
  };
  return (
    <AppScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        {scheduleData.length == 0 ? (
          <View style={styles.noChatContainer}>
            <Text style={styles.noChat}>Welcome</Text>
            <Text style={styles.noChat}>start new Schedule</Text>
          </View>
        ) : (
          <HandleScheduleList />
        )}
      </View>
    </AppScrollView>
  );
};

export default Upcomming;
