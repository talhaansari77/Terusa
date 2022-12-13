import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {images} from '../../../../assets/images';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {Montserrat} from '../../../../utils/Fonts';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const MultiConContainer = ({navigation}) => {
  // const navigation = useNavigation();
  const coinArray = [
    'Multi-Coin Wallets 1',
    'Multi-Coin Wallets 2',
    'Main Wallets 3',
    'Main Wallets 4',
  ];
  return (
    <View>
      {coinArray.map(item => {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: verticalScale(20),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.sendContainer}
                activeOpacity={0.6}
                //   onPress={() => {
                //     navigation.navigate('SendAmount');
                //   }}
              >
                <Image
                  source={images.walletshield}
                  style={{width: 20, height: 20, tintColor: colors.white}}
                />
              </TouchableOpacity>

              <View>
                <CustomText
                  label={item}
                  color={colors.white}
                  fontSize={15}
                  fontFamily={Montserrat.SemiBold}
                  marginLeft={20}
                />
                <CustomText
                  label={'Multi-Coin Wallets'}
                  color={colors.darkGray}
                  fontSize={12}
                  fontFamily={Montserrat.Regular}
                  marginLeft={20}
                />
              </View>
            </View>
            <TouchableOpacity 
              onPress={() => navigation.navigate('AuthStack',{screen:'EditWallet'})}>
              <Entypo
                name="dots-three-vertical"
                color={colors.darkGray}
                size={moderateScale(20)}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default MultiConContainer;

const styles = StyleSheet.create({
  sendContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: '10%',
    borderWidth: 0.5,
  },
});
