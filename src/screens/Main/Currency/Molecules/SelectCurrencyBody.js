import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import GradientContainer from '../../../../components/GradientContainer';
import {colors} from '../../../../utils/Colors';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';
import {images} from '../../../../assets/images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SelectCurrencyBody = () => {
  const [check, setcheck] = useState(-1);
  const SelectCurrencyData = [
    {
      flag: images.AustraliaFlag,
      name: 'US Dollar (USD)',
    },
    {
      flag: images.BrazilFlag,
      name: 'British Pound (GBP)',
    },
    {
      flag: images.CanadaFlag,
      name: 'EURO (EUR)',
    },
    {
      flag: images.SwitzerlandFlag,
      name: 'Singapore Dollar (SGD)',
    },
    {
      flag: images.ChinaFlag,
      name: 'Canadian Dollar (CAD)',
    },
    {
      flag: images.ChinaFlag,
      name: 'Australian Dollar (AUD)',
    },
    {
      flag: images.ChinaFlag,
      name: 'Polish ZLoty (PLM)',
    },
    {
      flag: images.ChinaFlag,
      name: 'South African Rand (ZAR)',
    },
    {
      flag: images.ChinaFlag,
      name: 'Kenyan Shilling (KES)',
    },
    {
      flag: images.ChinaFlag,
      name: 'Bulgarian lev (BGN)',
    },
    {
      flag: images.ChinaFlag,
      name: 'Romanian leu (RON)',
    },
    {
      flag: images.ChinaFlag,
      name: 'Israeli New Shekel (ils)',
    },
    {
      flag: images.ChinaFlag,
      name: 'Saudi Riyal (SAR)',
    },
    {
      flag: images.ChinaFlag,
      name: 'United Arab Emirate Dirham (AED)',
    },
    {
      flag: images.ChinaFlag,
      name: 'Hungarian Forint (HUF)',
    },

    {
      flag: images.ChinaFlag,
      name: 'Czech Koruna (CZK)',
    },
    {
      flag: images.ChinaFlag,
      name: 'Brazilian Real (BRL)',
    },
  ];
  return (
    <View>
      <Spacer height={10} />
        {/* <View> */}
          {SelectCurrencyData.map((currencyArray, index) => (
            <TouchableOpacity
              onPress={() => {
                setcheck(index);
              }}
              activeOpacity={0.6}>
              <View key={index}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: verticalScale(70),
                  }}>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 99,
                      backgroundColor:
                        index == check ? colors.blueLight : colors.dusk,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <FontAwesome
                      name="dollar"
                      color={colors.darkGray}
                      size={moderateScale(20)}
                    />
                  </View>

                  <Spacer width={15} />

                  <View style={{width: '100%'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '90%',
                      }}>
                      <CustomText
                        label={currencyArray.name}
                        color={colors.white}
                        fontSize={15}
                        fontFamily={'Montserrat-bold'}
                      />
                      {index == check ? (
                        <AntDesign
                          name="check"
                          color={colors.darkGray}
                          size={moderateScale(20)}
                        />
                      ) : (
                        <></>
                      )}
                    </View>

                    <Spacer height={6} />

                    <View
                      style={{
                        width: '90%',
                        height: 0.5,
                        backgroundColor: colors.darkGray,
                        marginTop: verticalScale(5),
                      }}></View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        {/* </View> */}
    </View>
  );
};

export default SelectCurrencyBody;
