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
import React, {useEffect} from 'react';
import AppHeader from '../../../components/AppHeader';
import styled from 'react-native-styled-components';
import {images} from '../../../assets/images';
import {scale} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingItem from './Molecules/SettingItem';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PH20>
        <AppHeader
          img={images.wallet}
          txt={'Settings'}
          fontSize={18}
          onPress={() => navigation.navigate('WalletScreen')}
        /> 
        <SettingItem navigation={navigation} />
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
