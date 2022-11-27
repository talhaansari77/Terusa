import {View, Text, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {images} from '../../../assets/images';
import {Spacer} from '../../../components/Spacer';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomGradientButton from '../../../components/CustomGradientButton';
import RestoreWalletBody from './Molecules/RestoreWalletBody';
import RestoreWalletHeader from './Molecules/RestoreWalletHeader';

const RestoreWallet = ({navigation}) => {


  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
        <ScrollView>

      <SafeAreaView>
        <RestoreWalletHeader />

        <RestoreWalletBody navigation={navigation} />

        {/* <Spacer height={10} /> */}
     
      </SafeAreaView>

      </ScrollView>
    </ImageBackground>
  );
};

export default RestoreWallet;
