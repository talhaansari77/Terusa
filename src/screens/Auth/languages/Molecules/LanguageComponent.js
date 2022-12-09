import {View, Text, Platform, Image} from 'react-native';
import React, {useState} from 'react';
import {Spacer} from '../../../../components/Spacer';
import {images} from '../../../../assets/images';
import {PH20} from '../../../../utils/CommonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, Divider} from 'react-native-elements';
import CustomText from '../../../../components/CustomText';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const LanguageComponent = ({label,originalName, index, setIndex, cIndex, navigation}) => {
  return (
    <PH20>
      <Spacer height={10} />
      <TouchableOpacity
        onPress={() => {
          setIndex(index);
          navigation.navigate('OnBoarding');
        }}
        activeOpacity={0.7}
        style={{
          paddingHorizontal: scale(15),
          paddingVertical: verticalScale(7),
          // borderColor: colors.white,
          // borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderRadius: moderateScale(10),
        }}>
        <View style={{flex: 9}}>
          <CustomText
            label={label}
            fontSize={12}
            color={colors.white}
            // alignSelf={'center'}
            // textAlign={'center'}
          />
          <Spacer height={2} />
          <CustomText
            label={originalName}
            fontSize={10}
            color={colors.white}
            // alignSelf={'center'}
            // textAlign={'center'}
          />
        </View>
        <Spacer width={10} />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {index === cIndex ? (
            <Image
              source={images.CheckMark}
              style={{height: 30, width: 20, alignSelf: 'center'}}
              resizeMode={'contain'}
            />
          ) : (
            <></>
          )}
        </View>
      </TouchableOpacity>
      <Spacer height={10} />
      <Divider width={1} />
    </PH20>
  );
};
export default LanguageComponent;
