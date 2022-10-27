import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {images} from '../../../assets/images';
import {Spacer} from '../../../components/Spacer';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomGradientButton from '../../../components/CustomGradientButton';

const RestoreWallet = ({navigation}) => {
  const RestorWalletArray = [
    {
      id: 1,
      no: 1,
    },
    {
      id: 2,
      no: 2,
    },
    {
      id: 3,
      no: 3,
    },
    {
      id: 4,
      no: 4,
    },
    {
      id: 5,
      no: 5,
    },
    {
      id: 6,
      no: 6,
    },
  ];
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
      <SafeAreaView>
        <CustomText
          label={'Restore Wallet'}
          alignSelf={'center'}
          fontSize={15}
          color={colors.white}
          fontFamily={'Montserrat-Bold'}
        />
        <Spacer height={30} />
        <View style={{width: '100%', paddingHorizontal: 50}}>
          <CustomText
            label={
              'Type your 12-word recovery phrase restore you existing wallet'
            }
            alignSelf={'center'}
            textAlign={'center'}
            fontSize={12}
            color={colors.lighBlue}
            fontFamily={'Montserrat-regular'}
          />
        </View>

        <View style={{width: '100%', padding: 20}}>
          {RestorWalletArray.map((walletArray, index) => (
            <View key={index}>
              <LinearGradient
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.8, y: 0.0}}
                colors={[
                  colors.darkGreyBlueThired,
                  colors.darkGreyBlueThired,
                  colors.duskSecond,
                ]}
                style={{
                  height: verticalScale(55),
                  alignItems: 'center',
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginBottom: 20,
                  width:"100%", 
                  paddingHorizontal:20
                }}>
                <CustomText
                  label={walletArray.no}
                  color={colors.white}
                  fontSize={15}
                  fontFamily={'Montserrat-bold'}
                />
                
                <CustomTextInput
                  placeholder="------------"
                  placeholderTextColor={colors.white}
                  paddingHorizontal={10}
                />
              </LinearGradient>
            </View>
          ))}
        </View>

        <Spacer height={20} />
        <CustomGradientButton
          title="Next"
          width="60%"
          fontSize={23}
          // backgroundColor={colors.primary}
          height={verticalScale(40)}
          borderRadius={moderateScale(10)}
          alignSelf={'center'}
          onPress={() => {
            navigation.navigate('RestoreWalletSecond');
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RestoreWallet;
