import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const GradientContainer = props => {
  return (
    <View
      style={{
        width: props.width || '100%',
        height: verticalScale(props.height || 100),
        borderRadius: moderateScale(props.borderRadius || 10),
        overflow: 'hidden',
        flexDirection:"row"
        // margin:scale(props.padding ||10 )
      }}>
      <LinearGradient
        style={{width: '100%', height: '100%', padding: props.padding || 10}}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.8, y: 0.0}}
        colors={[colors.darkGreyBlueSecond, colors.dusk]}>
        {props.children}
      </LinearGradient>
    </View>
  );
};

export default GradientContainer;

const styles = StyleSheet.create({});
