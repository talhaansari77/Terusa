import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utils/Colors';
import {images} from '../../../assets/images';
import {Spacer} from '../../../components/Spacer';
import CustomText from '../../../components/CustomText';
import styled from 'react-native-styled-components';
import {scale, verticalScale} from 'react-native-size-matters';

const SecurityWallet = () => {
  const [SampleArray] = useState([]);
  //   console.log("SmapleArray",SampleArray)

  const [passwordKey, setpasswordKey] = useState([]);
  const [totalValue, setTotalValue] = useState([]);
  const [holder, setHolder] = useState([]);
  const [holder2, setHolder2] = useState('');
  const [holder3, setHolder3] = useState('');

  console.log('Holder', holder);
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
      <Spacer height={70} />
      <View
        style={{
          backgroundColor: colors.normallightGrey,
          width: 100,
          height: 100,
          alignSelf: 'center',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: 50,
        }}>
        <Image style={{alignSelf: 'center'}} source={images.QrCode} />
      </View>
      <Spacer height={20} />
      <View style={{alignItems: 'center'}}>
        <CustomText
          label={'Secured Wallet'}
          color={colors.white}
          fontFamily={'Montserrat-Bold'}
          fontSize={15}
        />
        <Spacer height={10} />
        <CustomText
          label={'Enter Your Passcode'}
          color={colors.white}
          fontFamily={'Montserrat-Regular'}
          fontSize={13}
        />
      </View>
      <Spacer height={20} />

      <Container>
        <DotStyle>
          {/* {SampleArray.length > 0 ? <Text style={{color:colors.white, height:20}}>{holder}</Text> : <SeparatorLine />}
          {SampleArray.length > 1 ? <Text style={{color:colors.white, height:20}}> {holder}</Text> : <SeparatorLine />}
          {SampleArray.length > 2 ? <Text style={{color:colors.white, height:20}}> {holder}</Text> : <SeparatorLine />}
          {SampleArray.length > 3 ? <Text style={{color:colors.white, height:20}}> {holder}</Text> : <SeparatorLine />}
          {SampleArray.length > 4 ? <Text style={{color:colors.white, height:20}}> {holder}</Text> : <SeparatorLine />}
          {SampleArray.length > 5 ? <Text style={{color:colors.white, height:20}}> {holder}</Text> : <SeparatorLine />} */}

          {SampleArray.length > 0 ? <Dot /> : <SeparatorLine />}
          {SampleArray.length > 1 ? <Dot /> : <SeparatorLine />}
          {SampleArray.length > 2 ? <Dot /> : <SeparatorLine />}
          {SampleArray.length > 3 ? <Dot /> : <SeparatorLine />}
          {SampleArray.length > 4 ? <Dot /> : <SeparatorLine />}
          {SampleArray.length > 5 ? <Dot /> : <SeparatorLine />}
        </DotStyle>

        <Spacer height={20} />

        <NumberView>
          <FirstNumber>
            <TouchableOpacity
              onPress={() => {
                {
                  setHolder('1');
                  SampleArray.push(holder.toString());
                  // setHolder.splice(setHolder.length + 1)
                  // console.log("SetHolder",setHolder)
                }
              }}>
              <TouchableView>
                <NumberText>1</NumberText>
              </TouchableView>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setHolder('2');
                SampleArray.push(holder.toString());
              }}>
              <TouchableView>
                <NumberText>2</NumberText>
              </TouchableView>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setHolder('3');
                SampleArray.push(holder.toString());
              }}>
              <TouchableView>
                <NumberText>3</NumberText>
              </TouchableView>
            </TouchableOpacity>
          </FirstNumber>

          <FirstNumber>
            <TouchableOpacity
              onPress={() => {
                setHolder('4');
                SampleArray.push(holder.toString());
              }}>
              <TouchableView>
                <NumberText>4</NumberText>
              </TouchableView>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setHolder('5');
                SampleArray.push(holder.toString());
              }}>
              <TouchableView>
                <NumberText>5</NumberText>
              </TouchableView>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setHolder('6');
                SampleArray.push(holder.toString());
              }}>
              <TouchableView>
                <NumberText>6</NumberText>
              </TouchableView>
            </TouchableOpacity>
          </FirstNumber>

          <FirstNumber>
            <TouchableOpacity
              onPress={() => {
                setHolder('7');
                SampleArray.push(holder.toString());
              }}>
              <TouchableView>
                <NumberText>7</NumberText>
              </TouchableView>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setHolder('8');
                SampleArray.push(holder.toString());
              }}>
              <TouchableView>
                <NumberText>8</NumberText>
              </TouchableView>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setHolder('9');
                SampleArray.push(holder.toString());
              }}>
              <TouchableView>
                <NumberText>9</NumberText>
              </TouchableView>
            </TouchableOpacity>
          </FirstNumber>
          <FirstNumber>
            <TouchableOpacity
              onPress={() => {
                SampleArray.length > 5
                  ? navigation.navigate('DashBoard')
                  : Alert.alert('Enter Your Passcode');
              }}>
              <Image
                source={images.CheckMark}
                style={{
                    height: verticalScale(18),
                    width: scale(18),
                  resizeMode: 'contain',
                  left: 18,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setHolder('0');
                SampleArray.push(holder.toString());
              }}>
              <ZeroNumberText>0</ZeroNumberText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  Holder: SampleArray.splice(SampleArray.length - 1, 1),
                });
              }}>
              <Image
                source={images.CrossIcon}
                style={{
                  height: verticalScale(25),
                  width: scale(45),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </FirstNumber>
        </NumberView>
      </Container>
    </ImageBackground>
  );
};

const Container = styled(View, {
  width: '65%',
  alignSelf: 'center',
});

const Dot = styled(View, {
  width: scale(13),
  height: verticalScale(12),
  borderRadius: 50,
  backgroundColor: colors.darkgrey,
  justifyContent: 'center',
  alignItems: 'center',
});

const DotStyle = styled(View, {
  width: '100%',
  paddingHorizontal: 18,
  height: verticalScale(10),
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 30,
});

const SeparatorLine = styled(View, {
  width: '10%',
  height: verticalScale(1),
  backgroundColor: colors.darkgrey,
  top: 7,
});

const NumberView = styled(View, {
  marginTop: 20,
});

const FirstNumber = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 15,
});

const TouchableView = styled(View, {
  width: scale(46),
  height: verticalScale(45),
});

const NumberText = styled(Text, {
  textAlign: 'center',
  fontSize: 24,
  color: colors.white,
  fontFamily: 'Montserrat-Bold',
});

const ZeroNumberText = styled(Text, {
  textAlign: 'center',
  fontSize: 24,
  color: colors.white,
  fontFamily: 'Montserrat-Bold',
  left: 15,
});

// const ShadowLogoContainer = styled(View, {
// //   width: scale(50),
// //   height: verticalScale(50),
//   shadowColor: colors.black,
//   shadowOffset: {
//     width: 0,
//     height: 5,
//   },
// });

export default SecurityWallet;
