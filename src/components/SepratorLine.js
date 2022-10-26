import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils/Colors';

const SepratorLine = () => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center',}}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.8, y: 0.0}}
        colors={[colors.niceBlue, colors.blueWithPurple]}
        style={{width: '30%', height: 5,}}
      />
    </View>
  );
};

export default SepratorLine;
