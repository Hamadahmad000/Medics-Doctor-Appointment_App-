import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat, Bubble, Send, InputToolbar} from 'react-native-gifted-chat';
import AppView from '../../components/AppView/AppView';
import {APP_FONT_FAMILIY, THEME_COLORS} from '../../constant/Theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../components/button/Button';
import AppText from '../../components/AppText/AppText';
import DoctorDetails from '../doctorDetails/DoctorDetails';
import styles from './chatStyle';
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setinputText] = useState('');

  const route = useRoute().params;
  const {DOCTORDETAILS} = route;
  const navigation = useNavigation();
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Sir How i can help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: DOCTORDETAILS.image,
        },
      },
    ]);
  }, []);
  const onSend = messages => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  };
  //
  const customStyle = {
    backgroundColor: inputText == '' ? THEME_COLORS.white : THEME_COLORS.green,
    borderColor: THEME_COLORS.iconGray,
    borderWidth: inputText == '' ? 0.2 : 0,
  };
  const customTextStyle = {
    color: inputText == '' ? THEME_COLORS.black : THEME_COLORS.white,
  };
  const handleRenderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: THEME_COLORS.chatleft,
            borderTopRightRadius: 8,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            paddingHorizontal: 5,
            paddingTop: 8,
            maxWidth: '65%',
          },
          right: {
            backgroundColor: THEME_COLORS.green,
            maxWidth: '65%',
            paddingHorizontal: 5,
            paddingTop: 8,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
        }}
        textStyle={{
          right: {
            fontFamily: APP_FONT_FAMILIY.interRegular,
            fontSize: 14,
            lineHeight: 20,
          },
          left: {
            fontFamily: APP_FONT_FAMILIY.interRegular,
            fontSize: 14,
            lineHeight: 20,
          },
        }}
      />
    );
  };
  const handleInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        accessoryStyle={{}}
        primaryStyle={{
          width: '90%',

          position: 'absolute',
          bottom: 10,
          borderWidth: 0,
          marginHorizontal: 24,
          //   marginTop: 20,
          paddingVertical: 5,
        }}
        containerStyle={{
          //   backgroundColor: 'red',
          borderWidth: 0,
          width: '100%',
          //   marginTop: 20,
        }}
      />
    );
  };
  const handleRenderSend = props => {
    return (
      <Send {...props} containerStyle={{width: '30%', marginRight: 5}}>
        <AppView
          width={'100%'}
          style={customStyle}
          alignItems={'center'}
          paddingVertical={12}
          borderRadius={32}>
          <AppText
            style={customTextStyle}
            appFontSize={14}
            fontStyle={'interSemiBold'}>
            Send
          </AppText>
        </AppView>
      </Send>
    );
  };
  function handleBackBtnPress() {
    navigation.goBack();
  }
  return (
    <AppView appColor={'white'} flex={1}>
      <AppView
        marginHorizontal={24}
        paddingVertical={20}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <AppView flexDirection={'row'} alignItems={'center'}>
          <TouchableOpacity onPress={handleBackBtnPress}>
            <Image
              source={require('../../assets/icons/back.png')}
              resizeMode="contain"
              style={styles.backbtn}
            />
          </TouchableOpacity>
          <AppText
            appFontSize={'h4'}
            fontStyle={'interSemiBold'}
            marginLeft={20}
            textColor={'black'}>
            {DOCTORDETAILS.name}
          </AppText>
        </AppView>
        <AppView flexDirection={'row'} alignItems={'center'}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/video_call.png')}
              resizeMode="contain"
              style={styles.videoCallIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/audio_call.png')}
              resizeMode="contain"
              style={styles.audioCallIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/dots.png')}
              resizeMode="contain"
              style={styles.optionsIcon}
            />
          </TouchableOpacity>
        </AppView>
      </AppView>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={handleRenderBubble}
        alwaysShowSend
        renderSend={handleRenderSend}
        renderInputToolbar={handleInputToolbar}
        renderAvatarOnTop
        messagesContainerStyle={{paddingBottom: 10}}
        onInputTextChanged={text => setinputText(text)}
      />
    </AppView>
  );
};

export default Chat;
