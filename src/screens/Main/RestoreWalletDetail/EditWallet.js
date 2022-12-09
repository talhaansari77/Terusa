import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import commonStyles, {PH10} from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import AppHeader from '../../../components/AppHeader';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {Montserrat} from '../../../utils/Fonts';
import {Spacer} from '../../../components/Spacer';
import MultiConContainer from './Molecules/MultiConContainer';
import {scale, verticalScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditWallet = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Spacer height={Platform.OS === 'ios' ? 40 : 5} />

      <ImageBackground
        source={images.BackgroundImage}
        resizeMode="cover"
        style={commonStyles.img}>
        <PH10>
          <AppHeader
            onPress={() => {
              navigation.goBack();
            }}
            //   marginLeft={10}
            img={images.BackArrow}
            txt={'Wallets'}
            width={23}
            heigth={20}
            fontSize={18}
            rigthWidth={20}
            rightImg={images.del}
            
              rightOnPress={() => alert('Are your sure')}
          />
          <Spacer height={10} />

          <View style={styles.fieldSet}>
            <Text style={styles.legend}>Name</Text>
            <CustomText
              label={'Multi-Coin Wallets'}
              color={colors.white}
              fontSize={15}
              fontFamily={Montserrat.SemiBold}
            />
          </View>
          <Spacer height={30} />

          <TouchableOpacity
            style={{
              flexDirection: 'row',

              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>

            <Ionicons name="document-text" size={24} color={colors.white} />
            <Spacer width={15} />
            <CustomText
              label={'Show your secret phrase'}
              color={colors.white}
              fontSize={15}
              fontFamily={Montserrat.SemiBold}
            />
              </View>
            <Ionicons name="chevron-forward" size={24} color={colors.white} />
          </TouchableOpacity>
          <Spacer height={20} />
          <CustomText
              label={'If your lose access to device, your funds will be lost unless you backup'}
              color={colors.white}
              fontSize={14}
              fontFamily={Montserrat.Regular}
            />
        </PH10>
      </ImageBackground>
    </View>
  );
};

export default EditWallet;

const styles = StyleSheet.create({
  fieldSet: {
    // margin: 10,
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(15),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eee',
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: 'bold',
    color: colors.white,
    backgroundColor: 'rgb(48,62,96)',
  },
});
