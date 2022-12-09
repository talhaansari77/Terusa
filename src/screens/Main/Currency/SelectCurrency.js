import {View, Text, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import SelectCurrencyBody from './Molecules/SelectCurrencyBody';
import SelectCurrencyHeader from './Molecules/SelectCurrencyHeader';
import {images} from '../../../assets/images';
import { colors } from '../../../utils/Colors';
import CustomText from '../../../components/CustomText';
import { Montserrat } from '../../../utils/Fonts';
import CustomButton from '../../../components/CustomButton';
import { Spacer } from '../../../components/Spacer';

const SelectCurrency = () => {
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
      <SafeAreaView >
        <ScrollView>

        <View style={{width:"100%", padding:20}}>
        <SelectCurrencyHeader />
        <SelectCurrencyBody />
        <Spacer height={20}/>


        <CustomText
        label={'Your payment currency is used to display your balance, transactions,and purchase cryptocurrency throughout the app '}
        fontSize={13}
        color={colors.white}
        fontFamily={Montserrat.Regular}
      />
      <Spacer height={20}/>

      <CustomButton title="Confirm"
      height={45}
      borderRadius={10}
      />
        </View>

        </ScrollView>



      </SafeAreaView>
    </ImageBackground>
  );
};

export default SelectCurrency;
