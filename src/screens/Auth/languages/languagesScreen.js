import {View, Text, Platform, Image, ScrollView} from 'react-native';
import React, { useState } from 'react';
import AppHeader from '../../../components/AppHeader';
import {Spacer} from '../../../components/Spacer';
import {images} from '../../../assets/images';
import {PH20} from '../../../utils/CommonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CustomText from '../../../components/CustomText';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import LanguageComponent from './Molecules/LanguageComponent';

const languagesScreen = ({navigation}) => {
  const [selected, setSelected] = useState(false);
  const [cIndex, setIndex] = useState(-1);
  const languagesList = [
    {
      id: 1,
      name: 'English',
      originalName: 'English',
    },
    {
      id: 2,
      name: 'Spanish',
      originalName: 'Española',
    },
    {
      id: 3,
      name: 'Korean',
      originalName: '한국인',
    },
    {
      id: 4,
      name: 'Russian',
      originalName: 'Русский',
    },
    {
      id: 5,
      name: 'Italian',
      originalName: 'Italiana',
    },
    {
      id: 6,
      name: 'German',
      originalName: 'Deutsch',
    },
    {
      id: 7,
      name: 'French',
      originalName: 'Français',
    },
    {
      id: 8,
      name: 'Thai',
      originalName: 'ไทย',
    },
    {
      id: 9,
      name: 'Chinese',
      originalName: '中国人',
    },
    {
      id: 10,
      name: 'Portuguese',
      originalName: 'Português',
    },
    {
      id: 11,
      name: 'Arabic',
      originalName: 'عربي',
    },
  ];

  

  return (
    <View style={{flex: 1}}>
      <Spacer height={Platform.OS === 'ios' ? 40 : 5} />
      <PH20>
        <AppHeader
          img={images.BackArrow}
          txt={'Language'}
          fontSize={18}
          // rightImg={images.SettingImage}
          onPress={() => navigation.goBack()}
          rightOnPress={() => navigation.navigate('Language')}
        />
      </PH20>
      <ScrollView showsVerticalScrollIndicator={false}>

      {languagesList.map((item,index) => (
        <LanguageComponent label={item.name} originalName={item.originalName} index={index} cIndex={cIndex} setIndex={setIndex} navigation={navigation} />
      ))}
      </ScrollView>
      {/* <Spacer height={50}/> */}
    </View>
  );
};

export default languagesScreen;
