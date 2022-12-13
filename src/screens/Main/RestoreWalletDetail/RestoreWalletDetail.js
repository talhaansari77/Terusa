import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import commonStyles, {PH10} from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import AppHeader from '../../../components/AppHeader';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {Montserrat} from '../../../utils/Fonts';
import { Spacer } from '../../../components/Spacer';
import MultiConContainer from './Molecules/MultiConContainer';

const RestoreWalletDetail = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={images.BackgroundImage}
        resizeMode="cover"
        style={commonStyles.img}>
        <PH10>
          <AppHeader
            onPress={() => {
              navigation.goBack();
            }}
            //   marginLeft={10}
            img={images.BackArrow}
            txt={'Wallets'}
            width={23}
            heigth={20}
            fontSize={18}
            rigthWidth={20}
            rightImg={images.addwallet}
              rightOnPress={() => navigation.navigate('AuthStack',{screen:'ImportCoin'})}
          />
          <Spacer height={10}/>
          

          <CustomText
            label={'Multi-Coin Wallets'}
            color={colors.white}
            fontSize={15}
            fontFamily={Montserrat.SemiBold}
            marginLeft={40}
          />
                    {/* <Spacer height={10}/> */}

          <MultiConContainer navigation={navigation}/>
        </PH10>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default RestoreWalletDetail;

const styles = StyleSheet.create({});
