import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Platform,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import Clipboard from '@react-native-clipboard/clipboard';
var randomWords = require('random-words');

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
const compareArrays = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const PhraseConfirm = ({navigation, route}) => {
  const phrase = route?.params?.phrase;
  const [passPhrase, setPassPhrase] = useState([]);
  const [passPhraseC, setPassPhraseC] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setPassPhrase(shuffle([...route?.params?.phrase]));
  }, []);

  const handlePhrase = word => {
    console.log(word);
    if (passPhraseC.length < 12) {
      passPhraseC.push(word);
      let data = passPhrase.filter(w => w !== word);
      setPassPhrase(data);
    }
    if (passPhraseC.length > 0) {
     
      let a = passPhraseC.slice(0, passPhraseC.length );
      let b = phrase.slice(0, passPhraseC.length );
      if (compareArrays(a, b)) setError(false);
      else setError(true);
    }
  };
  const handlePhraseC = word => {
    console.log(word);
    if (passPhraseC.length > 0) {
      passPhrase.push(word);
      let data = passPhraseC.filter(w => w !== word);
      setPassPhraseC(data);
    }
    if (passPhraseC.length > 0) {
      let a = passPhraseC.slice(0, passPhraseC.length );
      let b = phrase.slice(0, passPhraseC.length );
      if (compareArrays(a, b)) setError(false);
      else setError(true);
    }
  };

  const PhraseTab = ({label, del, no, onPress}) => (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        // height: verticalScale(40), // width: scale(100),
        paddingHorizontal: scale(15),
        paddingVertical: verticalScale(7),
        borderColor: colors.white,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderRadius: moderateScale(20),
      }}>
      {no ? (
        <>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={{color: colors.white}}>{no}</Text>
          </TouchableOpacity>
          <Spacer width={10} />
        </>
      ) : (
        <></>
      )}
      <Text style={{color: colors.white, fontSize: verticalScale(12)}}>
        {label}
      </Text>
      {del ? (
        <>
          <Spacer width={10} />
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={{color: colors.white}}>X</Text>
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1}}>
      <Spacer height={Platform.OS === 'ios' ? 40 : 10} />

      <Spacer height={20} />
      <CustomText
        label={'Confirm Your Secret Phrase'}
        fontSize={18}
        color={colors.white}
        alignSelf={'center'}
        fontWeight={'bold'}
      />
      <Spacer height={20} />
      <PH30>
        <CustomText
          label={
            'Please select each word in correct order to verify you have saved your secret phrase '
          }
          fontSize={12}
          color={colors.white}
          alignSelf={'center'}
          textAlign={'center'}
        />
      </PH30>
      <Spacer height={20} />
      <FlatList
        data={passPhraseC}
        contentContainerStyle={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '80%',
          alignSelf: 'center',
        }}
        renderItem={({item, index}) => (
          <>
            <PhraseTab
              label={item}
              no={index + 1}
              onPress={() => handlePhraseC(item)}
            />
            <Spacer height={10} />
          </>
        )}
        keyExtractor={item => item.id}
      />
      {error ? (
        <>
          <PH30>
            <CustomText
              label={'Invalid order. Try again!'}
              fontSize={12}
              color={colors.error}
              alignSelf={'center'}
              textAlign={'center'}
            />
          </PH30>
          <Spacer height={20} />
        </>
      ) : (
        <></>
      )}

      <FlatList
        data={passPhrase}
        contentContainerStyle={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '80%',
          alignSelf: 'center',
        }}
        renderItem={({item, index}) => (
          <>
            <PhraseTab
              label={item}
              no={index + 1}
              onPress={() => handlePhrase(item)}
            />
            <Spacer height={10} />
          </>
        )}
        keyExtractor={item => item.id}
      />

      <Spacer height={50} />
      {/* Footer */}
      <CustomGradientButton
        title={'Done'}
        onPress={() => {
          if (!error && passPhraseC.length === 12)
            navigation.navigate('SuccessScreen');
        }}
      />
      <Spacer height={30} />
    </View>
  );
};

export default PhraseConfirm;
