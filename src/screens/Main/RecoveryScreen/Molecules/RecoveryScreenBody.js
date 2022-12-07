import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import styled from 'react-native-styled-components';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import GradientContainer from '../../../../components/GradientContainer';
import {Spacer} from '../../../../components/Spacer';
import CustomGradientButton from '../../../../components/CustomGradientButton';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomTextInput from '../../../../components/CustomTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecoveryScreenBody = ({navigation}) => {
  const [RecoveryData, setRecoveryData] = useState([]);

  const [recoveryPhase, setRecoveryPhase] = useState({
    phase1: '',
    phase2: '',
    phase3: '',
    phase4: '',
    phase5: '',
    phase6: '',
    phase7: '',
    phase8: '',
    phase9: '',
    phase10: '',
    phase11: '',
    phase12: '',
  });

  console.log('RecoveryData12', RecoveryData);

  useEffect(() => {
    getRecovery();
  }, []);

  const getRecovery = async () => {
    await AsyncStorage.getItem('RecoveryWallet')
      .then(resp => JSON.parse(resp))
      .then(json => {
        setRecoveryData(json);
      });
  };
  const RecoveryArray = [
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
    {
      id: 7,
      no: 7,
      value: recoveryPhase.phase7,
      onChangeText: newText7 => {
        setRecoveryPhase({...recoveryPhase, phase7: newText7});
      },
    },
    {
      id: 8,
      no: 8,
      value: recoveryPhase.phase8,
      onChangeText: newText8 => {
        setRecoveryPhase({...recoveryPhase, phase8: newText8});
      },
    },
    {
      id: 9,
      no: 9,
      value: recoveryPhase.phase9,
      onChangeText: newText9 => {
        setRecoveryPhase({...recoveryPhase, phase9: newText9});
      },
    },
    {
      id: 10,
      no: 10,
      value: recoveryPhase.phase10,
      onChangeText: newText10 => {
        setRecoveryPhase({...recoveryPhase, phase10: newText10});
      },
    },
    {
      id: 11,
      no: 11,
      value: recoveryPhase.phase11,
      onChangeText: newText11 => {
        setRecoveryPhase({...recoveryPhase, phase11: newText11});
      },
    },
    {
      id: 12,
      no: 12,
      value: recoveryPhase.phase12,
      onChangeText: newText12 => {
        setRecoveryPhase({...recoveryPhase, phase12: newText12});
      },
    },
  ];

  const onRecoveryPhase = () => {
    console.log('jjfj');

    tempRecovery = [];
    tempRecovery.push(
      recoveryPhase.phase1,
      recoveryPhase.phase2,
      recoveryPhase.phase3,
      recoveryPhase.phase4,
      recoveryPhase.phase5,
      recoveryPhase.phase6,

      recoveryPhase.phase7,
      recoveryPhase.phase8,
      recoveryPhase.phase9,
      recoveryPhase.phase10,
      recoveryPhase.phase11,
      recoveryPhase.phase12,
    );

    let TempRecoveryData = tempRecovery.map(item => {
      return item;
    });
    let asyncRecoveryData = RecoveryData.map(item => {
      return item;
    });

    let responseData =
      TempRecoveryData.toString() === asyncRecoveryData.toString();

    if (responseData == true) {

      navigation.reset({
        index: 0,
        routes: [{name: 'MainStack',screen: 'DashBoard'}]
      });
      // navigation.navigate('MainStack', {screen: 'DashBoard'});
    } else {
      alert('Please enter correct Recovery Phrase ');
    }

  };

  return (
    <View>
      <Container>
        <GradientContainer height={400}>
          <View style={{width: '100%', paddingHorizontal: 40}}>
            <CustomText
              color={colors.darkGray}
              fontSize={12}
              textAlign={'center'}
              fontWeight={'400'}
              fontFamily={'Montserrat-regular'}
              alignSelf={'center'}
              label={
                'Write down your 12 words recovery phrase in correct order'
              }
            />
          </View>

          <FlatList
            data={RecoveryArray}
            renderItem={({item, index}) => (
              <View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingVertical: 4,
                    top: 10,
                    marginTop: 5,
                    paddingBottom: 10,
                  }}>
                  <CustomText
                    label={item.no}
                    color={colors.white}
                    fontSize={15}
                    fontFamily={'Montserrat-bold'}
                    marginTop={10}
                    marginLeft={10}
                  />
                  <CustomTextInput
                    value={item.value}
                    onChangeText={item.onChangeText}
                    placeholder="------------"
                    placeholderTextColor={colors.white}
                    paddingHorizontal={10}
                  />
                </View>
              </View>
            )}
          />
        </GradientContainer>
      </Container>
      <Spacer height={20} />
      <View style={{width: '100%', paddingHorizontal: 60}}>
        <CustomText
          color={colors.darkGray}
          fontSize={11}
          textAlign={'center'}
          fontWeight={'400'}
          fontFamily={'Montserrat-regular'}
          alignSelf={'center'}
          label={
            'Lorem Ipsum is simply dummy text of text of the printing lorem ipsum is good suprem and typesetting industry.'
          }
        />
      </View>

      <Spacer height={25} />

      <CustomGradientButton
        x1={0.0}
        y1={0.25}
        x2={0.8}
        y2={0.0}
        title="Continues"
        width="90%"
        fontSize={15}
        height={verticalScale(35)}
        // justifyContent={'center'}
        borderRadius={moderateScale(10)}
        // alignSelf={'center'}
        fontFamily={'Montserrat-bold'}
        onPress={onRecoveryPhase}
      />
    </View>
  );
};

const Container = styled(View, {
  shadowColor: colors.black,
  width: '100%',
  padding: 15,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,
});

export default RecoveryScreenBody;
