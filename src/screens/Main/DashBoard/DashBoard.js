import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Platform,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import AppHeader from '../../../components/AppHeader';
import {images} from '../../../assets/images';
import GradientContainer from '../../../components/GradientContainer';
import commonStyles from '../../../utils/CommonStyles';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import DashBoardContainer from './molecules/DashBoardContainer';
import BitCoineContainer from './molecules/BitCoineContainer';
import FooterAddContainer from './molecules/FooterAddContainer';
import PortfolioContainer from './molecules/PortfolioContainer';
import ProtfolioModal from './molecules/ProtfolioModal';



const DashBoard = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const CoinDate = [
    {
      id: 1,
      name: 'Bitcoin',
      coin: 'BTC',
      amount: '$9111.89',
      number: '10',
      grading: '+0.89%',
      img: images.BitCoinImage,
      onPress:()=>navigation.navigate("MainStack",{screen:"WalletScreen"})
    },
    {
      id: 2,
      name: 'Bitcoin',
      coin: 'DASH',
      amount: '$9111.89',
      number: '10',
      grading: '+0.89%',
      img: images.dashLogo,
      onPress:()=>navigation.navigate("MainStack",{screen:"WalletScreen"})

    },
    {
      id: 3,
      name: 'Bitcoin',
      coin: 'USDT',
      amount: '$9111.89',
      number: '10',
      grading: '+0.89%',
      img: images.UsdtLogo,
      onPress:()=>navigation.navigate("MainStack",{screen:"WalletScreen"})

    },
    // {
    //   id: 4,
    //   name: 'Bitcoin',
    //   coin: 'USDT',
    //   amount: '$9111.89',
    //   number: '10',
    //   grading: '+0.89%',
    //   img: images.UsdtLogo,
    // },
  ];
  const CoinRender = ({item, index}) => {
    return (
      // <View style={{flex:1}}>
      <BitCoineContainer
        name={item.name}
        coin={item.coin}
        amount={item.amount}
        number={item.number}
        grading={item.grading}
        img={item.img}
        onPress={item.onPress}
      />
      // </View>
    );
  };
  return (
    <>
      <ImageBackground
        source={images.BackgroundImage}
        resizeMode="cover"
        style={commonStyles.IosPadding}>
        <AppHeader
          onPress={() => {
            navigation.navigate('ProfileScreen');
          }}
          marginLeft={10}
          img={images.UserImage}
          txt={'Terusa'}
          width={18}
          heigth={20}
          fontSize={18}
          rightImg={images.SettingImage}
          rightOnPress={()=>navigation.navigate("SettingScreen")}

        />
        <View style={{height:"80%"}}>


        <ScrollView showsVerticalScrollIndicator={false}>
          <Spacer height={10} />
          <DashBoardContainer
            onPress={() => {
              navigation.navigate('Portfolio');
            }}
          />
          <PortfolioContainer
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />

          <FlatList
            data={CoinDate}
            showsVerticalScrollIndicator={false}
            renderItem={CoinRender}
          />
        </ScrollView>
        </View>
      </ImageBackground>

      <FooterAddContainer />
      <ProtfolioModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </>
  );
};

export default DashBoard;

const styles = StyleSheet.create({});
