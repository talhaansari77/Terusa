import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Platform,
  ImageBackground,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../../utils/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../../redux/constants';
import TopNav from './molecules/TopNav';

const DashBoard = ({navigation}) => {
  const coinsList = useSelector(state => state.myCoinReducer.coinsList);
  const isFocused = useIsFocused();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState('Ali');

  const addCoin = async (coin, checkboxValue) =>
    dispatch({
      type: constants.ADD_COIN,
      payload: {
        ...coin,
        checkboxValue: checkboxValue,
      },
    });

  const storeData = async value => {
    try {
      await AsyncStorage.setName('@storage_Key', value);
    } catch (e) {
      // saving error
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const CoinRender = ({item, index}) => {
    return (
      // <View style={{flex:1}}>
      <BitCoineContainer
        name={item.name}
        coin={item.symbol.toUpperCase()}
        amount={`$${item.current_price}`}
        number={item.market_cap_rank}
        grading={item.price_change_percentage_24h.toFixed(2)}
        img={item.image}
        onPress={() => navigation.navigate('WalletScreen', {coin: item})}
      />
      // </View>
    );
  };

  useEffect(() => {
    // limit is 250 tokens

    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250`,
      )
      .then(response => {
        // console.log(response.data);
        let list = [];
        coinsList?.map(lCoin => {
          let foundCoin = response?.data?.find(sCoin => sCoin.id === lCoin.id);
          list.push(foundCoin);
        });
        // sort coin
        list = list.sort(
          (a, b) => Number(a.market_cap_rank) - Number(b.market_cap_rank),
        );
        // default coin list
        list = list.length <= 0 ? response?.data?.slice(0, 3) : list;
        list.map(coin => addCoin(coin, true));
        setData(list);
        setLoading(false);
        console.log('data is ', list);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
    // return ()=>false
  }, [isFocused]);

  return (
    <>
      <SafeAreaView>
        <ImageBackground
          source={images.BackgroundImage}
          resizeMode="cover"
          style={commonStyles.img}>
          <DashBoardContainer
            onPress={() => {
              navigation.navigate('Portfolio');
            }}
            navigation={navigation}
          />

          <TopNav />

          {/* <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={CoinRender}
            /> */}
        </ImageBackground>

        {/* <FooterAddContainer /> */}
        <ProtfolioModal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
        <Loader
          file={require('../../../assets/Loaders/loader.json')}
          loading={loading}
          height={100}
        />
      </SafeAreaView>
    </>
  );
};

export default DashBoard;

const styles = StyleSheet.create({});
