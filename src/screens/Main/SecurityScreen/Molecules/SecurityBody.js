import {View, Text, Image} from 'react-native';
import React from 'react';
import {images} from '../../../../assets/images';
import GradientContainer from '../../../../components/GradientContainer';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';

const SecurityBody = () => {
  const SecuirtyFlatListData = [
    {
      title: 'Backup',
      subTitle:
        'Lorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit amet',
      image: images.BackupImage,
      blueImage: images.BackupBlueIcon,
      endTitle: 'Lorem, ipsum dolor sit amet',
      status: false,
    },
    {
      title: 'Secure With a Passcode',
      subTitle:
        'Lorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit amet',
      image: images.LockIconImage,
      blueImage: images.LockBlueIcon,
      status: true,
    },
  ];
  return (
    <View>
      {SecuirtyFlatListData.map((securityArray, index) => (
        <View key={index}>
          <GradientContainer
            height={'90'}
            marginBottom={20}
            //   alignItems={"center"}
            flexDirection={'row'}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={{display: 'flex', justifyContent: 'space-evenly',}}>
                <CustomText
                  label={securityArray.title}
                  color={colors.white}
                  fontSize={13}
                  fontFamily={'Montserrat-bold'}
                />
                <View
                  style={{
                    width: '90%',
                    height: 1,
                    backgroundColor: colors.darkGreyBlue,
                  }}></View>
                <CustomText
                  label={securityArray.subTitle}
                  width={'90%'}
                  color={colors.white}
                //   textAlign={"center"}
                  fontSize={9}
                  fontFamily={'Montserrat-regular'}
                />
              </View>

              <View style={{right:10, top:10}} >
                <Image
                  source={securityArray.image}
                  style={{
                    height: verticalScale(30),
                    width: scale(30),
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </View>

            {/* <CustomTextInput
            placeholder="------------"
            placeholderTextColor={colors.white}
            paddingHorizontal={10}
          /> */}
          </GradientContainer>
        </View>
      ))}
    </View>
  );
};

export default SecurityBody;
