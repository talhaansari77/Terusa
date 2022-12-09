import {View, Text, Image, Switch, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PH20} from '../../../../utils/CommonStyles';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../Styles';
import {colors} from '../../../../utils/Colors';
import {useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';

const SwapCoin = ({coin, addCoin, searchText}) => {
  console.log(coin);
  const coinsList = useSelector(state => state.myCoinReducer.coinsList);
const navigation = useNavigation();
  return (
    <PH20>
      <TouchableOpacity onPress={()=>navigation.navigate('SwapScreen')} activeOpacity={0.7} style={styles.flatListView}>
        <View style={styles.flatListInnerView}>
          <Image source={{uri: coin.image}} style={styles.flatListInnerImage} />

          <View style={styles.itemDetailsView}>
          
            <Text style={styles.flatListInnerFullTextTitle}>{coin.name}</Text>

            {/* <View style={styles.switchToggleView}>
              <View style={styles.toggleView}>
           
              </View>
            </View> */}

            <Text style={styles.flatListInnerShortTitle}>
             0 {coin.symbol.toUpperCase()}
            </Text>      
                </View>
        </View>
      </TouchableOpacity>
    </PH20>
  );
};

export default SwapCoin;
