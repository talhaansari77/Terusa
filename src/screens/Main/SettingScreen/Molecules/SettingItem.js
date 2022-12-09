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
import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {images} from '../../../../assets/images';
import {colors} from '../../../../utils/Colors';
import SettingRender from './SettingRender';
import { useIsFocused } from '@react-navigation/native';

const SettingItem = ({navigation}) => {

  const [AsyncData, setAsyncData] = useState([])
const [counter, setCounter] = useState(0)

  console.log("AsyncData",AsyncData[0])


  useEffect(() => {
    GetSwitchData();
  }, []);

  const GetSwitchData = async () => { 
    let temp=[]
    let notifResponse = await AsyncStorage?.getItem('notifi');
    let soundResponse = await AsyncStorage?.getItem('sound');
    let fingerResponse = await AsyncStorage?.getItem('finger');
    let faceIdResponse = await AsyncStorage?.getItem('Face');
    temp.push({
      noti:notifResponse,
      sound:soundResponse,
      finger:fingerResponse,
      face:faceIdResponse
    })
    setAsyncData(temp)
  };
  const SettingFlatListdata = [
    {
      id: 1,
      title: 'Enable Notifications',
      subTitle: 'Show a notification when  funds are received',
      image: images.BellImage,
      blackImage: images.BellIconBlue,
      SwitchBtn: true,
      enable:AsyncData?.[0]?.noti,
      onValueChange: async () => {
        setChecked({...checked, btn1: !checked.btn1});
        await AsyncStorage.setItem('notifi', 'Notification');
      },
      currency: false,
      touchable: false,
    },
    {
      id: 2,
      title: 'Enable Sounds',
      subTitle: 'Play sounds when sending receving &  exechanging funds.',
      image: images.SoundImage,
      blackImage: images.SoundBlueIcon,
      SwitchBtn: true,
      currency: false,
      touchable: false,
      enable:AsyncData?.[0]?.sound,


      onValueChange: async () => {
        setChecked({...checked, btn1: !checked.btn1});
        await AsyncStorage.setItem('sound', 'Sound');
      },
    },
    {
      id: 3,
      title: 'Currency',
      subTitle: 'set your perferred local Currency',
      image: images.CurrencyImage,
      blackImage: images.DollerBlueIcon,
      SwitchBtn: false,
      currency: true,
      touchable: true,
      onPress: () => {
        navigation.navigate('SelectCurrency');
      },
    },
    {
      id: 4,
      title: 'Restore Wallet',
      subTitle:
        'Overwrite your current Mobile Wallet using a 12-word recovery pharse',
      image: images.RestoredWalletImage,
      blackImage: images.RestorIconBlue,
      SwitchBtn: false,
      currency: false,
      touchable: true,
      onPress: () => {
        navigation.navigate('RestoreWalletDetail');
      },
    },
    {
      id: 5,
      title: 'Add FingerPrint',
      subTitle: 'Add FingerPrint for Security',
      image: images.fingerprint,
      blackImage: images.LightThemeIcon,
      SwitchBtn: true,
      enable:AsyncData?.[0]?.finger,


      onValueChange: async () => {
        setChecked({...checked, btn1: !checked.btn1});
        await AsyncStorage.setItem('finger', 'FingerPrint');
      },

      currency: false,

      touchable: true,
    },
    {
      id: 6,
      title: 'Face Id',
      subTitle: 'Add FingerPrint for Security',
      image: images.faceId,
      blackImage: images.LightThemeIcon,
      SwitchBtn: true,
      currency: false,
      touchable: true,
     enable:AsyncData?.[0]?.face,
      // value: checked,
      onValueChange: async () => {
        // setChecked(!checked)
        setChecked({...checked, btn1: !checked.btn1});

        await AsyncStorage.setItem('Face', 'FaceId');
      },
    },
    {
      id: 7,
      title: 'Two Factor Authentication',
      subTitle: 'Add FingerPrint for Security',
      image: images.twoFA,
      SwitchBtn: false,

      blackImage: images.LightThemeIcon,
      onPress: () => {
        navigation.navigate('FingerPrintScreen');
      },
      currency: false,
      touchable: true,
    },
  ];

  setTimeout(() => {
    setCounter(1)
  }, 100);
  
  return (
    <View>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.paddingBottom}
        data={SettingFlatListdata}
        renderItem={({item, index}) => (
          <SettingRender item={item} index={index} counter={counter} />
        )}
      />
    </View>
  );
};

export default SettingItem;

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
