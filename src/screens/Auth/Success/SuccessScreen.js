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
  import {colors, ListItem} from 'react-native-elements';
  import {Spacer} from '../../../components/Spacer';
  import CustomText from '../../../components/CustomText';
  import commonStyles, {PH20, PH30} from '../../../utils/CommonStyles';
  import {images} from '../../../assets/images';
  import Icon from 'react-native-vector-icons/Ionicons';
  import GradientCircleBtn from '../../../components/GradientCircleBtn';
  import CustomGradientButton from '../../../components/CustomGradientButton';
  import {Roboto} from '../../../utils/Fonts';
import SuccessLoader from '../../../utils/Success';


const SuccessScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Spacer height={Platform.OS === 'ios' ? 40 : 10} />
      <Image
        source={images.SecurityEnableIcon}
        style={{height: 180, width: '50%', alignSelf: 'center'}}
        resizeMode={'contain'}
      />
      <Spacer height={50} />
      <SuccessLoader />
      <Spacer height={20} />
      <CustomText
        label={'Congratulation'}
        fontSize={28}
        color={colors.white}
        alignSelf={'center'}
        fontWeight={'bold'}
      />
      <Spacer height={20} />

      <PH30>
        <CustomText
          label={
            'Your wallet has been created'
            
          }
          fontSize={12}
          color={colors.white}
          alignSelf={'center'}
          textAlign={'center'}
        />
      </PH30>
      <Spacer height={100} />
     
      {/* Footer */}
      <CustomGradientButton title={'Open Wallet'} onPress={()=>navigation.navigate('MainStack',{screen:'ImportCoin'})} />
      <Spacer height={30} />
    </View>
  )
}

export default SuccessScreen