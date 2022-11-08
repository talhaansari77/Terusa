import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React from 'react';
import AppHeader from '../../../components/AppHeader';
import styled from 'react-native-styled-components';
import {images} from '../../../assets/images';
import {scale} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';

const SettingScreen = ({navigation}) => {
  const [checked, setChecked] = useState({
    notfication: false,
    sound: false,
  });

  const setNotfication = () => {
    setChecked({...checked, notfication: !checked.notfication});
  };

  const setSound = () => {
    setChecked({...checked, sound: !checked.sound});
  };

  const SettingFlatListdata = [
    {
      title: 'Enable Notifications',
      subTitle: 'Show a notification when  funds are received',
      image: images.BellImage,
      blackImage: images.BellIconBlue,
      SwitchBtn: true,
      currency: false,
      touchable: false,
    },
    {
      title: 'Enable Sounds',
      subTitle: 'Play sounds when sending receving &  exechanging funds.',
      image: images.SoundImage,
      blackImage: images.SoundBlueIcon,
      SwitchBtn: true,
      currency: false,
      touchable: false,
    },
    {
      title: 'Currency',
      subTitle: 'set your perferred local Currency',
      image: images.CurrencyImage,
      blackImage: images.DollerBlueIcon,
      SwitchBtn: false,
      currency: true,
      touchable: true,
    },
    {
      title: 'Restore Wallet',
      subTitle:
        'Overwrite your current Mobile Wallet using a 12-word recovery pharse',
      image: images.RestoredWalletImage,
      blackImage: images.RestorIconBlue,
      SwitchBtn: false,
      currency: false,
      touchable: true,
    },
    // {
    //   title: 'Theme',
    //   subTitle: 'Change your Screens Theme',
    //   image: images.DarkThemeIcon,
    //   blackImage: images.LightThemeIcon,
    //   SwitchBtn: true,
    //   currency: false,
    //   touchable: false,
    // },
    {
      title: 'Add FingerPrint',
      subTitle: 'Add FingerPrint for Security',
      image: images.fingerprint,
      blackImage: images.LightThemeIcon,
      // SwitchBtn: true,
      currency: false,
      touchable: true,
    },
    {
      title: 'Face Id',
      subTitle: 'Add FingerPrint for Security',
      image: images.faceId,
      blackImage: images.LightThemeIcon,
      SwitchBtn: true,
      currency: false,
      touchable: true,
    },
    {
      title: 'Two Factor Authentication',
      subTitle: 'Add FingerPrint for Security',
      image: images.twoFA,
      blackImage: images.LightThemeIcon,
      SwitchBtn: true,
      currency: false,
      touchable: true,
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <PH20>
        <AppHeader
          img={images.wallet}
          txt={'Settings'}
          fontSize={18}
          onPress={() => navigation.navigate('WalletScreen')}
        />
        {/* <Spacer height={10}/> */}
        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.paddingBottom}
          data={SettingFlatListdata}
          renderItem={({item, index}) => (
            <View style={[styles.shadowContainer, styles.marginTop]}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.8, y: 0.0}}
                colors={[colors.darkGreyBlueSecond, colors.dusk]}
                style={styles.flatListView}>
                <TouchableOpacity
                  onPress={() => {
                    index === 2 && navigation.navigate('SelectCurrency');
                    index === 3 && navigation.navigate('RestoreWallet');
                    index === 5 && navigation.navigate('FingerPrintScreen');
                  }}
                  disabled={item.touchable === true ? false : true}
                  style={styles.flatListInnerView}>
                  <Image
                    source={item.image}
                    style={styles.flatListInnerImage}
                  />
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.flatListInnerShortTitle}>
                      {item.title}
                    </Text>
                    {item.currency == true && (
                      <View style={styles.currencyTextView}>
                        <Text style={styles.currencyText}>USD</Text>
                      </View>
                    )}
                    {index === 0 && (
                      <View style={styles.toggleView}>
                        <Switch
                          ios_backgroundColor={colors.primary}
                          value={checked.notfication}
                          onValueChange={setNotfication}
                        />
                      </View>
                    )}
                    {index === 1 && (
                      <View style={styles.toggleView}>
                        <Switch
                          ios_backgroundColor={colors.primary}
                          value={checked.sound}
                          // onValueChange={value => setChecked(value)}
                          onValueChange={setSound}
                        />
                      </View>
                    )}
                    {index === 4 && item.SwitchBtn == true && (
                      <View style={styles.toggleView}>
                        <Switch
                          value={checked.global}
                          // onValueChange={value => setChecked(value)}
                          onValueChange={onGlobal}
                        />
                      </View>
                    )}
                    <View style={styles.subTitleView}>
                      <Text style={styles.subTitle}>{item.subTitle}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          )}
        />
      </PH20>
    </SafeAreaView>
  );
};

export default SettingScreen;

const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});
const PH20 = styled(View, {
  paddingHorizontal: scale(20),
});

const styles = StyleSheet.create({
  flatList: {},
  flatListView: {
    width: '100%',
    padding: 15,
    justifyContent: 'center',
    shadowColor: colors.darkBlack,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 13,
    borderColor: colors.darkGreyBlue,
  },
  flatListInnerView: {
    flexDirection: 'row',
  },
  flatListInnerImage: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  itemDetailsView: {
    width: '100%',
    justifyContent: 'center',
    left: 5,
  },
  flatListInnerShortTitle: {
    width: '70%',
    paddingLeft: 8,
    //...Fonts.style.boldWhite
    color: colors.white,
    fontWeight: 'bold',
  },
  switchToggleView: {
    right: 35,
    position: 'absolute',
  },
  containerStyle: {
    width: 30,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#ccc',
    padding: 0,
  },
  circleStyle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.lightBlueGrey,
  },
  subTitleView: {
    width: '70%',
    top: 3,
  },
  subTitle: {
    fontSize: 12,
    paddingLeft: 8,
    //...Fonts.style.mediumBluegrey
    color: colors.bluegrey,
    fontWeight: '400',
  },
  currencyText: {
    fontSize: 16,
    //...Fonts.style.semiBoldWhite
    color: colors.white,
    fontWeight: '400',
  },
  currencyTextView: {
    right: 35,
    position: 'absolute',
  },
  shadowContainer: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  marginTop: {
    marginTop: 10,
  },
  paddingBottom: {
    paddingBottom: 25,
  },
  toggleView: {
    right: 35,
    position: 'absolute',
  },
});
