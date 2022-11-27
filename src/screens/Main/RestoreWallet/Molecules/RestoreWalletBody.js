import {View, Text, ScrollView,KeyboardAvoidingView} from 'react-native';
import React, {useState, useEffect} from 'react';
import GradientContainer from '../../../../components/GradientContainer';
import CustomText from '../../../../components/CustomText';
import CustomTextInput from '../../../../components/CustomTextInput';
import {colors} from '../../../../utils/Colors';
import RestoreItem from './RestoreItem';
import CustomGradientButton from '../../../../components/CustomGradientButton';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RestoreWalletBody = ({navigation}) => {
  const [recoveryPhase, setRecoveryPhase] = useState({
    phase1: '',
    phase2: '',
    phase3: '',
    phase4: '',
    phase5: '',
    phase6: '',
  });

  const RestorWalletArray = [
    {
      id: 1,
      no: 1,
      value: recoveryPhase.phase1,
      onChangeText: newText1 => {
        setRecoveryPhase({...recoveryPhase, phase1: newText1});
      },
    },
    {
      id: 2,
      no: 2,
      value: recoveryPhase.phase2,
      onChangeText: newText2 => {
        setRecoveryPhase({...recoveryPhase, phase2: newText2});
      },
    },
    {
      id: 3,
      no: 3,
      value: recoveryPhase.phase3,
      onChangeText: newText3 => {
        setRecoveryPhase({...recoveryPhase, phase3: newText3});
      },
    },
    {
      id: 4,
      no: 4,
      value: recoveryPhase.phase4,
      onChangeText: newText4 => {
        setRecoveryPhase({...recoveryPhase, phase4: newText4});
      },
    },
    {
      id: 5,
      no: 5,
      value: recoveryPhase.phase5,
      onChangeText: newText5 => {
        setRecoveryPhase({...recoveryPhase, phase5: newText5});
      },
    },
    {
      id: 6,
      no: 6,
      value: recoveryPhase.phase6,
      onChangeText: newText6 => {
        setRecoveryPhase({...recoveryPhase, phase6: newText6});
      },
    },
  ];

  const onSetRecoveryPhase = () => {
    temp = [];

    if (recoveryPhase.phase1 == '' && recoveryPhase.phase2 == '') {
      alert('Please enter recovery phase');
    } else if (recoveryPhase.phase3 == '' && recoveryPhase.phase4 == '') {
      alert('Please enter recovery phase');
    } else if (recoveryPhase.phase5 == '' || recoveryPhase.phase6 == '') {
      alert('Please enter recovery phase');
    } else {
      temp.push(recoveryPhase);
      console.log('RecoveryData', temp.length);

       navigation.navigate('RestoreWalletSecond',{phrases:temp});
    }

    // navigation.navigate('RestoreWalletSecond',{phrases:temp});
  };
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>


    <View style={{width: '100%', padding: 20}}>

      {RestorWalletArray.map((walletArray, index) => (
        <RestoreItem walletArray={walletArray} index={index} key={index} />
        // <View key={index}>
        //   <GradientContainer
        //     height={60}
        //     marginBottom={20}
        //     alignItems={"center"}
        //     flexDirection={"row"}
        //     >
        //     <CustomText
        //       label={walletArray.no}
        //       color={colors.white}
        //       fontSize={15}
        //       fontFamily={'Montserrat-bold'}
        //     />

        //     <CustomTextInput
        //     value={walletArray.value}
        //     // onChangeText={(item)=>
        //     //   console.log("itemValue",item)
        //     // }

        //       placeholder="------------"
        //       placeholderTextColor={colors.white}
        //       paddingHorizontal={10}
        //     />
        //   </GradientContainer>
        // </View>
      ))}

      <CustomGradientButton
        title="Next"
        width="60%"
        fontSize={20}
        // backgroundColor={colors.primary}
        height={verticalScale(40)}
        borderRadius={moderateScale(10)}
        // alignSelf={'center'}
        onPress={onSetRecoveryPhase}
      />

    </View>
    </KeyboardAvoidingView>

  );
};

export default RestoreWalletBody;
