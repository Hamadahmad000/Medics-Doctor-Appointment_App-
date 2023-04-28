import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Chat from '../chat/Chat';
import {useSelector} from 'react-redux';
import styles from './allStyle';
import SCREEN_SIZE from '../../utils/utils';

export default function All() {
  const chatData = useSelector(state => state.bookDoctor);

  const handleChatList = (item, index) => {
    return (
      <Chat
        contactName={item.name}
        deliverStatus={require('../../assets/icons/coolicon.png')}
        isNewMessageIcon={false}
        lastChatTime={'10.10'}
        profileimg={item.image}
        recentMessage={'Hello world'}
        key={index}
      />
    );
  };

  const HandleChatListComp = () => {
    return <View>{chatData.map(handleChatList)}</View>;
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{minHeight: SCREEN_SIZE.SCREEN_HEIGHT / 1.4}}>
      <View style={styles.container}>
        {chatData.length == 0 ? (
          <View style={styles.noChatContainer}>
            <Text style={styles.noChat}>Welcome</Text>
            <Text style={styles.noChat}>start new conversion</Text>
          </View>
        ) : (
          <HandleChatListComp />
        )}
      </View>
    </ScrollView>
  );
}
