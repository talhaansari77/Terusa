import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {images} from '../../../assets/images';
import {NewWalletData} from '../../../utils/Data';
import {colors} from '../../../utils/Colors';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import commonStyles from '../../../utils/CommonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientCircleBtn from '../../../components/GradientCircleBtn';
import CustomText from '../../../components/CustomText';
import {Montserrat, Roboto} from '../../../utils/Fonts';
import {Spacer} from '../../../components/Spacer';
import SepratorLine from '../../../components/SepratorLine';
import CustomButton from '../../../components/CustomButton';

const NewWallet = () => {
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
  return (
    <View>
      <View style={{height: '95%'}}>
        <AppIntroSlider
          showNextButton={false}
          showDoneButton={false}
          ref={ref}
          bottomButton
          showSkipButton={false}
          data={NewWalletData}
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
                {/* <Spacer height={30} /> */}
                {/* <Spacer height={30} /> */}
                {/* <SepratorLine /> */}
                <Spacer height={30} />

                <CustomText
                  label={item.title}
                  color={colors.white}
                  fontWeight={'600'}
                  // fontFamily={Montserrat.SemiBold}
                  fontSize={verticalScale(18)}
                />
                <Spacer height={verticalScale(12)} />
                <View style={{width: '85%'}}>
                  <CustomText
                    label={item.desc}
                    // fontFamily={Roboto.SemiBold}
                    color={colors.white}
                    textAlign="center"
                    fontSize={verticalScale(10)}
                    textDecorationColor="black"
                    alignSelf={'center'}
                  />
                </View>
              </View>
            </>
          )}
        />

        <CustomButton
          title={'CREATE A NEW WALLET'}
          width={'90%'}
          fontSize={12}
          height={50}
          alignSelf={'center'}
          borderRadius={2}
          color={colors.white}
          backgroundColor={colors.blue}
        />

        <Spacer height={verticalScale(20)} />
        <CustomText
          label={'I already have a wallet'}
          // fontFamily={Roboto.SemiBold}
          color={colors.white}
          textAlign="center"
          fontSize={verticalScale(10)}
          textDecorationColor="black"
          alignSelf={'center'}
        />
      </View>

      {/* <View
        style={[
          commonStyles.justify,
          {
            padding: scale(20),
          },
        ]}></View> */}
    </View>
  );
};

export default NewWallet;

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
    width: '80%',
    height: '80%',
    alignSelf: 'center',
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
