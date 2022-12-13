import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingScreen from '../../screens/Main/SettingScreen/SettingScreen';
import SelectCurrency from '../../screens/Main/Currency/SelectCurrency';
import RestoreWalletDetail from '../../screens/Main/RestoreWalletDetail/RestoreWalletDetail';
import EditWallet from '../../screens/Main/RestoreWalletDetail/EditWallet';
import ProfileScreen from '../../screens/Main/ProfileScreen/ProfileScreen';

const SettingStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Setting'}>
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="SelectCurrency" component={SelectCurrency} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      {/* <Stack.Screen name="wallet" component={DashBoard} />
      <Stack.Screen name="SendAmount" component={SendAmountScreen} />
     <Stack.Screen name="SwapScreen" component={SwapScreen} />
        <Stack.Screen name="AddSwap" component={AddSwap} /> */}

      {/* <Stack.Screen name="SecurityWallet" component={SecurityWallet} />
   <Stack.Screen name="FingerPrintScreen" component={FingerPrintScreen} />
      <Stack.Screen name="Welcome" component={Welcome} /> */}
    </Stack.Navigator>
  );
};

export default SettingStack;
