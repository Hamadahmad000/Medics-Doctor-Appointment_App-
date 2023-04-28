import {View, Text} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText/AppText';

const Pharmacy = () => {
  return (
    <View>
      <AppText
        appFontSize={null}
        textColor={'black'}
        style={{color: 'red'}}
        fontStyle={'interRegular'}>
        Pharmacy
      </AppText>
    </View>
  );
};

export default Pharmacy;
