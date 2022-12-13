import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {images} from '../../../assets/images';
import commonStyles, {PH10} from '../../../utils/CommonStyles';
import CustomText from '../../../components/CustomText';
import {Montserrat, Roboto} from '../../../utils/Fonts';
import {colors} from '../../../utils/Colors';
import {Spacer} from '../../../components/Spacer';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SelectPercent from './Molecules/SelectPercent';
import CustomButton from '../../../components/CustomButton';
import CustomGradientButton from '../../../components/CustomGradientButton';

const SwapScreen = ({navigation}) => {
  const persentArray = ['25%', '50%', '75%', '100%'];
  return (
    <SafeAreaView>
      <ImageBackground
        source={images.BackgroundImage}
        resizeMode="cover"
        style={commonStyles.img}>
        <Spacer height={20} />
        <CustomText
          label={'Swap'}
          fontSize={18}
          fontFamily={Roboto.SemiBold}
          color={colors.white}
          alignSelf="center"
        />
        <Spacer height={20} />
        <PH10>
          <View
          // style={{j}}
          >
            <View
              style={{
                ...styles.swapContainer,
                borderTopLeftRadius: scale(7),
                borderTopRightRadius: scale(7),
              }}>
              <View
                style={{
                  height: '100%',
                  width: '60%',
                  justifyContent: 'space-around',
                }}>
                <CustomText
                  label={'You Pay'}
                  fontSize={12}
                  fontFamily={Roboto.SemiBold}
                  color={colors.bluegrey}
                />
                <CustomText
                  label={'0'}
                  fontSize={17}
                  fontFamily={Roboto.SemiBold}
                  color={colors.white}
                />
                <CustomText
                  label={'Balance:0 ETH'}
                  fontSize={12}
                  fontFamily={Roboto.SemiBold}
                  color={colors.bluegrey}
                />
              </View>

              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  width: '40%',
                }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={images.BitCoinImage}
                    style={{width: 25, height: 25, borderRadius: 99}}
                  />
                  <View style={{width: '60%'}}>
                    <CustomText
                      label={'ETH'}
                      fontSize={17}
                      numberOfLines={1}
                      fontFamily={Roboto.SemiBold}
                      color={colors.white}
                      marginLeft={10}
                      marginRight={15}
                    />
                  </View>

                  <MaterialIcons
                    name="navigate-next"
                    color={colors.white}
                    size={moderateScale(25)}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                ...styles.swapContainer,
                borderBottomLeftRadius: scale(7),
                borderBottomRightRadius: scale(7),
              }}>
              <View
                style={{
                  height: '100%',
                  width: '60%',
                  justifyContent: 'space-around',
                }}>
                <CustomText
                  label={'You Get'}
                  fontSize={12}
                  fontFamily={Roboto.SemiBold}
                  color={colors.bluegrey}
                />
                <CustomText
                  label={'0'}
                  fontSize={17}
                  fontFamily={Roboto.SemiBold}
                  color={colors.white}
                />
                <CustomText
                  label={'Balance:0 DAL'}
                  fontSize={12}
                  fontFamily={Roboto.SemiBold}
                  color={colors.bluegrey}
                />
              </View>

              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  width: '40%',
                }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    navigation.navigate('AddSwap');
                  }}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={images.dashLogo}
                    style={{width: 25, height: 25, borderRadius: 99}}
                  />
                  <View style={{width: '60%'}}>
                    <CustomText
                      label={'DASH'}
                      fontSize={17}
                      numberOfLines={1}
                      fontFamily={Roboto.SemiBold}
                      color={colors.white}
                      marginLeft={10}
                      marginRight={15}
                    />
                  </View>

                  {/* <CustomText
                    label={'DASH'}

                    fontSize={17}
                    fontFamily={Roboto.SemiBold}
                    color={colors.white}
                    marginLeft={5}
                    marginRight={15}
                  /> */}
                  <MaterialIcons
                    name="navigate-next"
                    color={colors.white}
                    size={moderateScale(25)}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.sendContainer}
              activeOpacity={0.6}
              //   onPress={() => {
              //     navigation.navigate('SendAmount');
              //   }}
            >
              <Image
                source={images.updown}
                style={{width: 20, height: 20, tintColor: colors.white}}
              />
            </TouchableOpacity>
          </View>
          <Spacer height={10} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {persentArray.map(item => {
              return <SelectPercent item={item} />;
            })}
          </View>
          <Spacer height={10} />

          <CustomText
            label="1 ETH = 1,215.4564 DAL"
            color={colors.white}
            fontSize={14}
            fontFamily={Roboto.SemiBold}
            alignSelf="center"
          />
          <Spacer height={10} />
          <CustomGradientButton
          title="Swap"
          width="100%"
          fontSize={18}
          iconMarginRight={moderateScale(30)}
          fontFamily={Montserrat.SemiBold}
          backgroundColor={colors.primary}
          height={verticalScale(35)}
          borderRadius={moderateScale(10)}
          onPress={() => {
            navigation.navigate('languagesScreen');
          }}
         
        />
        </PH10>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SwapScreen;

const styles = StyleSheet.create({
  swapContainer: {
    width: '100%',
    height: verticalScale(100),

    borderWidth: 0.3,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(10),
  },
  sendContainer: {
    width: 40,
    height: 40,
    borderRadius: 200,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: '10%',
    position: 'absolute',
    borderWidth: 0.5,
    left: '85%',
    top: '42%',
  },
});
