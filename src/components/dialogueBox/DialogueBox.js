import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './dialogueBoxStyle';
import Button from '../button/Button';
import {THEME_COLORS} from '../../constant/Theme';
export default function DialogueBox({
  title,
  description,
  buttonText,
  onpress,
  isvisible,
  icon,
  bottomButton,
  bottomButtonText,
  onBottomButtonPress,
}) {
  return (
    <Modal isVisible={isvisible} animationInTiming={1000} coverScreen={true}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.box}>
          <View style={styles.iconDiv}>
            <Image
              source={icon ? icon : require('../../assets/icons/ok.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.buttonDiv}>
            <Button
              bgColor={THEME_COLORS.green}
              title={buttonText}
              paddingVerticle={16}
              textColor={THEME_COLORS.white}
              onpress={onpress}
            />
          </View>
          {bottomButton ? (
            <TouchableOpacity
              onPress={onBottomButtonPress ? onBottomButtonPress : null}>
              <Text style={styles.bottomButtonText}>{bottomButtonText}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </Modal>
  );
}
