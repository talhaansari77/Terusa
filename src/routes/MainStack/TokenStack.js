import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WalletScreen from '../../screens/Main/WalletScreen/WalletScreen';
import DashBoard from '../../screens/Main/DashBoard/DashBoard';
import SendAmountScreen from '../../screens/Main/SendAmountScreen/SendAmountScreen';
import RecivedAmountScreen from '../../screens/Main/RecivedAmountScreen/RecivedAmountScreen';
import SwapScreen from '../../screens/Main/SwapScreen/SwapScreen';
import AddMore from '../../screens/Main/AddMore/AddMore';
import AddSwap from '../../screens/Main/AddSwap/AddSwap';

const TokenStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'wallet'}>
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen name="wallet" component={DashBoard} />
      <Stack.Screen name="SendAmount" component={SendAmountScreen} />
      <Stack.Screen name="RecivedAmountScreen" component={RecivedAmountScreen} />
      <Stack.Screen name="SwapScreen" component={SwapScreen} />
      <Stack.Screen name="AddSwap" component={AddSwap} />
      <Stack.Screen name="AddMore" component={AddMore} />


      {/* <Stack.Screen name="SecurityWallet" component={SecurityWallet} />
   <Stack.Screen name="FingerPrintScreen" component={FingerPrintScreen} />
      <Stack.Screen name="Welcome" component={Welcome} /> */}
    </Stack.Navigator>
  );
};

export default TokenStack;
