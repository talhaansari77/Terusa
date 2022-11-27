import {View, Text, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {images} from '../../../assets/images';
import {Spacer} from '../../../components/Spacer';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomGradientButton from '../../../components/CustomGradientButton';
import GradientContainer from '../../../components/GradientContainer';
import RestoreWalletHeader from './Molecules/RestoreWalletHeader';
import RestoreItem from './Molecules/RestoreItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RestoreWalletSecond = ({navigation, route}) => {
  console.log('navigateData', route?.params);
  const [recoveryPhase, setRecoveryPhase] = useState({
    phase7: '',
    phase8: '',
    phase9: '',
    phase10: '',
    phase11: '',
    phase12: '',
  });

  const RestorWalletArray = [
    {
      id: 1,
      no: 7,
      value: recoveryPhase.phase7,
      onChangeText: newText7 => {
        setRecoveryPhase({...recoveryPhase, phase7: newText7});
      },
    },
    {
      id: 2,
      no: 8,
      value: recoveryPhase.phase8,
      onChangeText: newText8 => {
        setRecoveryPhase({...recoveryPhase, phase8: newText8});
      },
    },
    {
      id: 3,
      no: 9,
      value: recoveryPhase.phase9,
      onChangeText: newText9 => {
        setRecoveryPhase({...recoveryPhase, phase9: newText9});
      },
    },
    {
      id: 4,
      no: 10,
      value: recoveryPhase.phase10,
      onChangeText: newText10 => {
        setRecoveryPhase({...recoveryPhase, phase10: newText10});
      },
    },
    {
      id: 5,
      no: 11,
      value: recoveryPhase.phase11,
      onChangeText: newText11 => {
        setRecoveryPhase({...recoveryPhase, phase11: newText11});
      },
    },
    {
      id: 6,
      no: 12,
      value: recoveryPhase.phase12,
      onChangeText: newText12 => {
        setRecoveryPhase({...recoveryPhase, phase12: newText12});
      },
    },
  ];

  const onSetRecoveryPhase = async () => {
    temp = [];

    if (recoveryPhase.phase7 == '' && recoveryPhase.phase8 == '') {
      alert('Please enter recovery phase');
    } else if (recoveryPhase.phase9 == '' && recoveryPhase.phase10 == '') {
      alert('Please enter recovery phase');
    } else if (recoveryPhase.phase11 == '' || recoveryPhase.phase12 == '') {
      alert('Please enter recovery phase');
    } else {

      temp.push(
        route?.params?.phrases?.[0].phase1,
        route?.params?.phrases?.[0].phase2,
        route?.params?.phrases?.[0].phase3,
        route?.params?.phrases?.[0].phase4,
        route?.params?.phrases?.[0].phase5,
        route?.params?.phrases?.[0].phase6,
        recoveryPhase.phase7,
        recoveryPhase.phase8,
        recoveryPhase.phase9,
        recoveryPhase.phase10,
        recoveryPhase.phase11,
        recoveryPhase.phase12,
      );
      await AsyncStorage.setItem('RecoveryWallet', JSON.stringify(temp));
      // }
  
      console.log('RecoveryData', temp);
      navigation.navigate('MainStack',{screen:"RecoveryScreen"})
 
    }




    // navigation.navigate('RestoreSuccessful');

    // navigation.navigate('RestoreWalletSecond',{phrases:temp});
  };
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
        <ScrollView>

      <SafeAreaView>
        <RestoreWalletHeader />

        <View style={{width: '100%', padding: 20}}>
          {RestorWalletArray.map((walletArray, index) => (
            <RestoreItem walletArray={walletArray} index={index} key={index} />
            // <View key={index}>
            //   <GradientContainer
            //     height={60}
            //     marginBottom={20}
            //     alignItems={'center'}
            //     flexDirection={'row'}>
            //     <CustomText
            //       label={walletArray.no}
            //       color={colors.white}
            //       fontSize={15}
            //       fontFamily={'Montserrat-bold'}
            //     />

            //     <CustomTextInput
            //       placeholder="------------"
            //       placeholderTextColor={colors.white}
            //       paddingHorizontal={10}
            //     />
            //   </GradientContainer>
            // </View>
          ))}
        </View>

        {/* <Spacer height={20} /> */}
        <CustomGradientButton
          title="Next"
          width="60%"
          fontSize={23}
          height={verticalScale(40)}
          borderRadius={moderateScale(10)}
          alignSelf={'center'}
          onPress={onSetRecoveryPhase}
        />
      </SafeAreaView>

      </ScrollView>

    </ImageBackground>
  );
};

export default RestoreWalletSecond;
