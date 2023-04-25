import {View, Text} from 'react-native';
import React from 'react';
import styles from './descriptionStyle';
import * as Animatable from 'react-native-animatable';
export default function Description(props) {
  return (
    // <Animatable.Text style={styles.DocDescription} animation={'fadeIn'}>
    //   {props.currentState == 0
    //     ? 'Consult only with a doctor you trust'
    //     : props.currentState == 1
    //     ? 'Find a lot of specialist doctors in one place'
    //     : 'Get connect our Online Consultation'}
    // </Animatable.Text>
    <View>
      {props.currentState == 0 ? (
        <Animatable.Text
          style={styles.DocDescription}
          animation={'fadeIn'}
          duration={1500}>
          Consult only with a doctor you trust
        </Animatable.Text>
      ) : props.currentState == 1 ? (
        <Animatable.Text style={styles.DocDescription} animation={'fadeIn'}>
          Find a lot of specialist doctors in one place
        </Animatable.Text>
      ) : (
        <Animatable.Text style={styles.DocDescription} animation={'fadeIn'}>
          Get connect our Online Consultation
        </Animatable.Text>
      )}
    </View>
  );
}
