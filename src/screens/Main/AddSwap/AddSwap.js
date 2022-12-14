import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    Platform,
    Switch,
    FlatList,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {verticalScale} from 'react-native-size-matters';
  import {colors} from '../../../utils/Colors';
  import {images} from '../../../assets/images';
  import {Spacer} from '../../../components/Spacer';
  import AppHeader from '../../../components/AppHeader';
  import {PH20} from '../../../utils/CommonStyles';
  import LinearGradient from 'react-native-linear-gradient';
  import {styles} from './Styles';
  import axios from 'axios';
  import {useDispatch, useSelector} from 'react-redux';
  import constants from '../../../redux/constants';
  import CoinView from './Molecules/SwapCoin';
  import Loader from '../../../utils/Loader';
  
  const AddSwap = ({navigation}) => {
    const [loading, setLoading] = useState(false);
  
    const dispatch = useDispatch();
    // const addCoin = async (coin, checkboxValue) =>
    //   dispatch({
    //     type: constants.ADD_COIN,
    //     payload: {
    //       ...coin,
    //       checkboxValue: checkboxValue,
    //     },
    //   });
    const [state, setState] = useState({
      searchText: '',
    });
   
    const [coinsFix, setCoinsFix] = useState([]);
    const [coins, setCoins] = useState(coinsFix);
  
    useEffect(() => {
      setLoading(true);
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250`,
        )
        .then(response => {
          // console.log(response.data);
          let data = response.data;
          setCoinsFix(data);
          setCoins(data);
          setLoading(false);
        })
        .catch(function (error) {
          setLoading(false);
          console.log(error);
        });
    }, []);
    return (
      <>
      <SafeAreaView>

  
  
        <View style={styles.searchView}>
          <TextInput
            style={styles.searchTxtInput}
            placeholder={'Search tokens - You Get'}
            onChangeText={txt => {
              let newCoinsList = coinsFix.filter(coin => {
                let coinName = coin.name.toLowerCase();
                let coinSymbol = coin.symbol.toLowerCase();
                let searchTerm = txt.toLowerCase();
                if (
                  coinName.includes(searchTerm) ||
                  coinSymbol.includes(searchTerm)
                ) {
                  return coin;
                }
              });
  
              setCoins(newCoinsList);
  
              setState({...state, searchText: txt});
            }}
            value={state.searchText}
            placeholderTextColor={colors.white}
          />
  
          {state.searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => setState({...state, searchText: ''})}
              style={styles.serachButtonView}>
              <Image source={images.CrossIcon} style={styles.cancelIcon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.serachButtonView}>
              <Image source={images.SerachProfile} style={styles.searchIcon} />
            </TouchableOpacity>
          )}
        </View>
        <Spacer height={10} />
  
        <ScrollView showsVerticalScrollIndicator={false}>
          {coins.map(coin => (
            <CoinView
              coin={coin}
            //   addCoin={addCoin}
              searchText={state.searchText}
            />
          ))}
        </ScrollView>
     
              </SafeAreaView>

              <Loader
          file={require('../../../assets/Loaders/loader.json')}
          loading={loading}
          height={100}
        />

      </>
    );
  };
  
  export default AddSwap;
  