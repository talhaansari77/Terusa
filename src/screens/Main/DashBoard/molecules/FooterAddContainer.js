import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../../../assets/images';
import commonStyles from '../../../../utils/CommonStyles';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const FooterAddContainer = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{width: '10%'}}></View>

      <TouchableOpacity
        activeOpacity={0.6}
        style={{width: 150, height: 300, marginBottom: verticalScale(30)}}>
        <Image
          style={commonStyles.img}
          resizeMode="contain"
          source={images.addMoreSecond}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          width: moderateScale(40),
          height: verticalScale(70),
          alignSelf: 'flex-end',
          marginRight: moderateScale(10),
        }}>
        <Image
          style={commonStyles.img}
          // resizeMode="cover"
          source={images.upArrowImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FooterAddContainer;

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '13%',
    alignSelf: 'center',

    alignItems: 'center',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
