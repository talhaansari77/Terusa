import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import GradientContainer from '../../../../components/GradientContainer';
import commonStyles from '../../../../utils/CommonStyles';
import {images} from '../../../../assets/images';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import {Roboto} from '../../../../utils/Fonts';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
// coin,name,number,amount,grading,img, onPress

const bitCoinerArray = [
  {
    id: 1,
    coin: 'Bitcoin',
    number: '0 BTC',
    amount: '$16,383.24',
    img: images.BitCoinImage,
    grading: '+1.15%',
    swap: false,
  },
  {
    id: 2,
    coin: 'Ethereum',
    number: '0 ETH',
    amount: '$12,363.21',
    img: images.dashLogo,
    grading: '-2.95%',
    swap: true,
  },
  {
    id: 3,
    coin: 'BNB Smart',
    number: '0 BNB',
    amount: '$13,63.21',
    img: images.UsdtIcon,
    grading: '- 2.95%',
    swap: true,
  },
  {
    id: 4,
    coin: 'BNB Beacon',
    number: '0 BNB',
    amount: '$2,363.21',
    img: images.DecryptoLogoIcon,
    grading: '-0.9%',
    swap: true,
  },
];

const BitCoineContainer = ({navigation}) => {
  const CoinRender = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={{flexDirection: 'row', alignItems:'center'}}
        onPress={() => {
          navigation.navigate('WalletScreen', {data: item});
        }}>
        <View
          style={{
            // height: '100%',
            justifyContent: 'center',
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <View style={styles.imgContainer}>
            <Image source={item.img} style={{height:"80%",width:"80%"}} />
          </View>
        </View>
        <View style={{width: '100%', marginLeft: verticalScale(10)}}>
          <View
            style={[
              styles.innerTxt,
              {
                marginTop: '8%',
              },
            ]}>
            <CustomText
              label={item.coin}
              fontSize={18}
              fontFamily={Roboto.SemiBold}
              color={colors.white}
            />

            <CustomText
              label={item.number}
              fontSize={16}
              fontFamily={Roboto.SemiBold}
              color={colors.white}
            />
          </View>
          {/* <Spacer height={7} /> */}
          <CustomText
            label={item.name}
            fontSize={13}
            fontWeight={'400'}
            fontFamily={Roboto.Light200}
            color={colors.darkGrey}
          />

          <View style={{flexDirection: 'row', marginTop: verticalScale(-5)}}>
            <CustomText
              label={item.amount}
              fontSize={14}
              fontWeight={'400'}
              fontFamily={Roboto.Light200}
              color={colors.cloudyBlue}
            />

            <CustomText
              label={item.grading}
              fontSize={14}
              fontWeight={'400'}
              fontFamily={Roboto.Light200}
              color={colors.red}
              marginLeft={8}
            />
          </View>
          <Spacer height={10} />
          <View style={styles.darkLine}></View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={{height: '100%'}}>
        <ImageBackground
          source={images.BackgroundImage}
          resizeMode="cover"
          style={commonStyles.img}>
          <FlatList
            data={bitCoinerArray}
            showsVerticalScrollIndicator={false}
            renderItem={CoinRender}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('AddMore')}
            activeOpacity={0.6}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: verticalScale(10),
            }}>
            <Image
              source={images.addToken}
              style={{width: 30, height: verticalScale(20)}}
            />

            <CustomText
              label={'Add Tokens'}
              fontSize={16}
              fontFamily={Roboto.SemiBold}
              color={colors.cloudyBlue}
              alignSelf="center"
              marginLeft={10}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </>
  );
};

export default BitCoineContainer;

const styles = StyleSheet.create({
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 99,
    overflow: 'hidden',
    justifyContent:"center",alignItems:"center"
  },
  innerTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '73%',

    alignItems: 'center',
  },
  darkLine: {
    width: '75%',
    height: 1,
    backgroundColor: colors.darkGrey,
  },
});
