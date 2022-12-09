import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../../../components/CustomText';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import styled from 'react-native-styled-components';
import {images} from '../../../assets/images';
import {colors} from '../../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomGradientButton from '../../../components/CustomGradientButton';
import {Spacer} from '../../../components/Spacer';
import AppHeader from '../../../components/AppHeader';

const SendAmountScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <PH10>
        <AppHeader
          img={images.BackArrow}
          txt={'Bitcoin'}
          fontSize={18}
          rightImg={images.SettingImage}
          onPress={() =>
            navigation.navigate('MainStack', {screen: 'WalletScreen'})
          }
        />
        <Spacer height={30} />
        <View style={styles.bitcoinImageView}>
          <Image source={images.BitCoinImage} style={styles.bitcoinImage} />

          <Spacer height={10} />

          <View style={styles.bitCoinAddressView}>
            <TouchableOpacity style={styles.qrCodeButtonView}>
              <Image source={images.QrCodeImage} style={styles.qrCodeIcon} />
            </TouchableOpacity>
            <TextInput
              style={styles.bitCoinAddressTxtInput}
              placeholder={'Tab To Paste BitCoin Address'}
              onChangeText={searchText => this.setState({searchText})}
              placeholderTextColor={colors.cloudyBlue}
            />
          </View>
          <Spacer height={20} />

          <View style={styles.bitCoinAddressView}>
            <TextInput
              style={styles.bitCoinAddressTxtInput}
              placeholder={'AE Amount'}
              onChangeText={searchText => this.setState({searchText})}
              placeholderTextColor={colors.cloudyBlue}
            />
          </View>
          <Spacer height={20} />

          <Text style={styles.networkText}>Network Fee</Text>
          <Text style={styles.networkTextValue}>0.00023386 BTC</Text>

          <View style={styles.networkTextSeparatorLine} />

          <Spacer height={20} />

          <Text style={styles.networkText}>Transaction Fee</Text>
          <Text style={styles.networkTextValue}>0.00023386 BTC</Text>

          <View style={styles.networkTextSeparatorLine} />
          <Spacer height={20}/>

          <CustomGradientButton
            title={'Send AE'}
            {...styles.nextBtn}
            fontSize={13}
          />
        </View>
      </PH10>
    </SafeAreaView>
  );
};

export default SendAmountScreen;

const PH10 = styled(View, {
  paddingHorizontal: scale(20),
});

const styles = StyleSheet.create({
  bitcoinImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bitcoinImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  bitcoinImageBottomText: {
    fontSize: 20,
    color: colors.white,
    marginTop: 20,
  },
  btcTextView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  btcText: {
    fontSize: 14,
    color: colors.orange,
    width: '60%',
  },
  usdText: {
    fontSize: 14,
    color: colors.cloudyBlue,
  },
  btcTextValueView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  btcTextValue: {
    fontSize: 16,
    color: colors.white,
    width: '60%',
  },
  usdTextValue: {
    fontSize: 16,
    width: '20%',
    color: colors.white,
  },
  separatorLine: {
    width: '84%',
    height: 1,
    backgroundColor: colors.cloudyBlue,
    top: 3,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 19,
    backgroundColor: '#F2F6F6',
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 13,
  },
  circleInnerText: {
    fontSize: 10,
    alignItems: 'center',
    color: colors.white,
  },
  networkText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '600',
    marginTop: 8,
  },
  networkTextValue: {
    fontSize: 14,
    color: colors.cloudyBlue,
    marginTop: 8,
  },
  networkTextSeparatorLine: {
    width: '70%',
    height: 1,
    backgroundColor: colors.white,
    marginTop: 15,
  },
  remainingText: {
    fontSize: 16,
    color: colors.white,
    marginTop: 15,
  },
  remainingTextValue: {
    fontSize: 14,
    color: colors.cloudyBlue,
    marginTop: 8,
  },
  addIconStyle: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 8,
    left: 5,
  },
  bitCoinAddressView: {
    width: '100%',
    height: 40,
    backgroundColor: colors.darkTwo,
    flexDirection: 'row',
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: 5,
  },
  bitCoinAddressTxtInput: {
    color: colors.cloudyBlue,
    fontSize: 14,
    width: '70%',
    height: 45,
    alignSelf: 'center',
    left: 20,
  },
  qrCodeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  qrCodeButtonView: {
    right: 30,
    position: 'absolute',
  },
  nextBtn: {
    height: verticalScale(30),
    width: '80%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
});
