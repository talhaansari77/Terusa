import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Platform,
  Image,
} from 'react-native';
import React, {useState} from 'react';
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

const PhraseScreen = ({navigation}) => {
  const [passPhrase, setPassPhrase] = useState(randomWords(12));
  const [copiedText, setCopiedText] = useState('');
  const copyToClipboard = () => {
    Clipboard.setString(passPhrase.toString());
  };
  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };
  console.log(passPhrase);
  const PhraseTab = ({label, del, no}) => (
    <TouchableOpacity
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
      <Image
        source={images.SecurityEnableIcon}
        style={{height: 180, width: '50%', alignSelf: 'center'}}
        resizeMode={'contain'}
      />
      <Spacer height={20} />
      {/* <CustomText
        label={'Confirm Your Secret Phrase'}
        fontSize={18}
        color={colors.white}
        alignSelf={'center'}
        fontWeight={'bold'}
      />
      <Spacer height={20} /> */}
      <PH30>
        <CustomText
          label={
            // 'Please select each word in correct order to verify you have saved your secret phrase '
            'Write down or copy these words in the right order and save them somewhere safe'
          }
          fontSize={12}
          color={colors.white}
          alignSelf={'center'}
          textAlign={'center'}
        />
      </PH30>
      <Spacer height={20} />
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
            <PhraseTab label={item} no={index + 1} />
            <Spacer height={10} />
          </>
        )}
        keyExtractor={item => item.id}
      />
      <CustomGradientButton
        title={'copy'}
        width={100}
        height={50}
        onPress={copyToClipboard}
      />
      <Spacer height={50} />
      {/* Footer */}
      <CustomGradientButton title={'Continue'} onPress={()=>navigation.navigate('PhraseConfirm',{phrase:passPhrase})} />
      <Spacer height={30} />
    </View>
  );
};

export default PhraseScreen;
