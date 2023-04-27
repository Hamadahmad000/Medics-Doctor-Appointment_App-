import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './chatStyle';

const Chat = ({
  isNewMessageIcon,
  profileimg,
  contactName,
  recentMessage,
  lastChatTime,
  deliverStatus,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={profileimg}
          resizeMode="contain"
          style={styles.ProfileImg}
        />
        <View>
          <Text style={styles.name}>{contactName}</Text>
          <Text style={styles.recentMessage}>{recentMessage}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.chatTime}>{lastChatTime}</Text>
        {isNewMessageIcon ? (
          <View style={styles.newMessageIcon}>
            <Text style={styles.newMessageText}>1</Text>
          </View>
        ) : (
          <Image
            source={deliverStatus}
            style={styles.messageDeliverStatus}
            resizeMode="contain"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Chat;
