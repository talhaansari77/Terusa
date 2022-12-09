import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Platform,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {CheckBox, colors, ListItem} from 'react-native-elements';
import {Spacer} from '../../../components/Spacer';
import CustomText from '../../../components/CustomText';
import commonStyles, {PH20, PH30} from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientCircleBtn from '../../../components/GradientCircleBtn';
import CustomGradientButton from '../../../components/CustomGradientButton';
import {Roboto} from '../../../utils/Fonts';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const terms = [
  {
    id: 1,
    text: 'If lose my secret phrase my funds will be lost forever',
  },
  {
    id: 2,
    text: 'If expose or share my secret phrase to anybody, my funds will get stolen',
  },
  {
    id: 3,
    text: 'Terusa support will never reach out to ask for it',
  },
];

const TermCondition = ({navigation}) => {
  // const [counter, setCounter] = useState(0);
  let counter = 0;
  const TermTab = ({label}) => (
    <PH20>
      <View
        style={{
          paddingHorizontal: scale(15),
          paddingVertical: verticalScale(7),
          borderColor: colors.white,
          borderWidth: 1,
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
            alignSelf={'center'}
            textAlign={'center'}
          />
        </View>
        <Spacer width={10} />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <BouncyCheckbox
            size={25}
            fillColor={colors.primary}
            unfillColor={colors.white}
            // innerIconStyle={{borderWidth: 2}}
            onPress={value => {
              value ? (counter = counter + 1) : (counter = counter - 1);
            }}
          />
        </View>
      </View>
      <Spacer height={10} />
    </PH20>
  );
  return (
    <View style={{flex: 1}}>
      <Spacer height={Platform.OS === 'ios' ? 40 : 10} />

      <Spacer height={20} />
      <CustomText
        label={'Back up your wallet now!'}
        fontSize={28}
        color={colors.white}
        alignSelf={'center'}
        textAlign={'center'}
        fontWeight={'bold'}
      />
      <Spacer height={20} />
      <PH30>
        <CustomText
          label={
            'In the next screen you will secret phrase (12 words) that allows you to recover a wallet'
          }
          fontSize={14}
          color={colors.white}
          alignSelf={'center'}
          textAlign={'center'}
        />
      </PH30>
      <Spacer height={50} />

      <Image
        source={images.SecurityImage}
        style={{height: verticalScale(150), width: '50%', alignSelf: 'center'}}
        resizeMode={'contain'}
      />
      <Spacer height={50} />
      {terms.map(t => (
        <TermTab label={t.text} />
      ))}

      {/* Footer */}
      <CustomGradientButton
        title={'Continue'}
        onPress={() => {
          if (counter === 3) navigation.navigate('PhraseScreen');
        }}
      />
      <Spacer height={30} />
    </View>
  );
};

export default TermCondition;
