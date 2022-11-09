import {
  Button,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../../../assets/images';
// import WelcomeScreen from './Styles/WelcomeScreen'
import React from 'react';
import CustomGradientButton from '../../../components/CustomGradientButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';
import {Spacer} from '../../../components/Spacer';
import SepratorLine from '../../../components/SepratorLine';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Montserrat} from '../../../utils/Fonts';

const Welcome = ({navigation}) => {
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
      <Spacer height={65} />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.WelcomeScreenImage}
          resizeMode="contain"
          style={{height: verticalScale(300), width: '50%'}}
        />
      </View>
      <Spacer height={25} />

      <SepratorLine height={6} />
      <Spacer height={15} />

      <Text
        style={{
          fontSize: verticalScale(20),
          textAlign: 'center',
          paddingVertical: 13,
          fontFamily: Montserrat.SemiBold,
          color: colors.white,
        }}>
        WELCOME TO CRYPTO
      </Text>
      <Spacer height={5} />
      <View
        style={{width: '100%', justifyContent: 'center', alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: 14,
            // ...Fonts.style.mediumBluegrey,
            fontFamily: 'Montserrat-Regular',
            textAlign: 'center',
            paddingHorizontal: 50,
            color: colors.white,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industr Lorem Ipsum sim text.
        </Text>
      </View>
      <View style={{height: '20%', justifyContent: 'flex-end'}}>
        <CustomGradientButton
          title="GET STARTED"
          width="100%"
          fontSize={18}
          iconMarginRight={moderateScale(30)}
          fontFamily={Montserrat.SemiBold}
          backgroundColor={colors.primary}
          height={verticalScale(40)}
          borderRadius={moderateScale(50)}
          onPress={() => {
            navigation.navigate('MainStack');
          }}
          icons={
            <FontAwesome5 name="chevron-right" size={20} color={colors.white} />
          }
        />
        <Spacer height={15} />

        <TouchableOpacity onPress={() => navigation.navigate('MainStack',{screen:"RestoreWallet"})}>
          <Text 
            style={{
              textAlign: 'center',
              fontSize: verticalScale(12),
              color: colors.white,
            }}>
            I already have wallet
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Spacer height={70} /> */}
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
