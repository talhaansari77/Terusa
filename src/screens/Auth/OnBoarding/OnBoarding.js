import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {images} from '../../../assets/images';
import commonStyles from '../../../utils/CommonStyles';
import {colors} from '../../../utils/Colors';
import {OnBoardingData} from '../../../utils/Data';
import {
  verticalScale,
  ScaledSheet,
  scale,
  moderateScale,
} from 'react-native-size-matters';
import AppIntroSlider from 'react-native-app-intro-slider';
import CustomText from '../../../components/CustomText';
import {Spacer} from '../../../components/Spacer';
import {Montserrat, Roboto} from '../../../utils/Fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientCircleBtn from '../../../components/GradientCircleBtn';
import SepratorLine from '../../../components/SepratorLine';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomGradientButton from '../../../components/CustomGradientButton';

const OnBoarding = ({navigation}) => {
  const [page, setPage] = useState(0);
  const ref = useRef(null);

  const moveBack = () => {
    if (page == 0) {
    } else {
      ref?.current?.goToSlide(page - 1);
      setPage(page - 1);
    }
  };
  const moveForward = () => {
    if (page + 1 <= 2) {
      ref?.current?.goToSlide(page + 1);
      setPage(page + 1);
    }
  };
  const onNextScreen = async () => {
    let fingerResponse = await AsyncStorage?.getItem('finger');
    let faceResponse = await AsyncStorage?.getItem('Face');

    // console.log('respon', response);
    if (fingerResponse == '1' || faceResponse == '1') {
      navigation.navigate('TermCondition');
      // navigation.navigate("MainStack",{screen:"DashBoard"})
    } else {
      navigation.navigate('SecurityWallet');
      // navigation.navigate("MainStack",{screen:"DashBoard"})
    }

    // console.log("finger",FingerPrint)
    // FingerPrintScreen
  };
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
      <View style={{height: '70%'}}>
        <AppIntroSlider
          showNextButton={false}
          showDoneButton={false}
          ref={ref}
          bottomButton
          showSkipButton={false}
          data={OnBoardingData}
          dotStyle={{backgroundColor: colors.lighBlue}}
          activeDotStyle={{backgroundColor: colors.white}}
          onSlideChange={index => setPage(index)}
          keyExtractor={(item, index) => {
            item?.id + index.toString();
          }}
          renderItem={({item}) => (
            <>
              {/* mainOnBoarding View */}
              <View style={styles.onBoardingContainer}>
                <Spacer height={85} />
                <View style={styles.imgConatiner}>
                  <Image
                    source={item.img}
                    style={styles.img}
                    resizeMode="contain"
                  />
                </View>
                <Spacer height={30} />
                <SepratorLine />
                <Spacer height={30} />

                <CustomText
                  label={item.title}
                  color={colors.white}
                  fontWeight={'700'}
                  fontFamily={Montserrat.BlackBold}
                  fontSize={verticalScale(15)}
                />
                {/* <Spacer height={verticalScale(10)} />
                  <CustomText
                    label={item.desc}
                    fontFamily={Roboto.SemiBold}
                    color={colors.darkGray}
                    selfAlign="center"
                    fontSize={verticalScale(10)}
                    textDecorationColor="black"
                  /> */}
                {/* </View> */}
              </View>
            </>
          )}
        />
      </View>

      <View style={{height: '20%', justifyContent: 'flex-end'}}>
        <CustomGradientButton
          title="GET STARTED"
          width="100%"
          fontSize={18}
          iconMarginRight={moderateScale(30)}
          fontFamily={Montserrat.SemiBold}
          backgroundColor={colors.primary}
          height={verticalScale(40)}
          borderRadius={moderateScale(50)}
          onPress={() => {
            // navigation.navigate('RecoveryScreen');
            // RecoveryScreen
            //  navigation.navigate('MainStack',{screen:"RestoreWallet",restore:true})}}
            navigation.navigate('TermCondition');
          }}
          icons={
            <FontAwesome5 name="chevron-right" size={20} color={colors.white} />
          }
        />
        <Spacer height={15} />

        <TouchableOpacity
          onPress={
            () => 
            // navigation.navigate('ImportCoin')

            navigation.navigate("RestoreWalletDetail")
          }>
          <Text
            style={{
              textAlign: 'center',
              fontSize: verticalScale(12),
              color: colors.white,
            }}>
            I already have wallet
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View
        style={[
          commonStyles.justify,
          {
            padding: scale(20),
          },
        ]}
        >

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            moveBack();
          }}>
          <Icon name="chevron-back" size={30} color={colors.white} />
        </TouchableOpacity>

        <GradientCircleBtn
          onPress={() => {
            if (page == 2) {
              onNextScreen();
              // navigation.navigate('Welcome');
            } else {
              moveForward();
            }
          }}
        />

        <CustomText
          label={'Skip'}
          onPress={() => {
            onNextScreen()
            // navigation.navigate('Welcome');
          }}
          color={colors.white}
          fontFamily={Roboto.SemiBold}
          fontSize={verticalScale(12)}
        />
      </View> */}
    </ImageBackground>
  );
};

export default OnBoarding;
const styles = ScaledSheet.create({
  onBoardingContainer: {
    alignItems: 'center',
    flex: 1,
  },
  imgConatiner: {
    height: '45%',
    width: '90%',
    paddingRight: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  dotInactive: {
    width: '8@s',
    height: '8@s',
    backgroundColor: colors.white,
    borderRadius: '25@s',
    marginHorizontal: '5@s',
  },
  dotactive1: {
    width: '8@s',
    height: '8@s',
    backgroundColor: colors.white,
    borderRadius: '99@s',
    marginHorizontal: '5@s',
  },
  dotactive2: {
    width: '35@s',
    height: '8@s',
    backgroundColor: colors.white,
    borderRadius: '99@s',
    marginHorizontal: '5@s',
  },
  dotactive3: {
    width: '45@s',
    height: '8@s',
    backgroundColor: colors.white,
    borderRadius: '99@s',
    marginHorizontal: '5@s',
  },
});
