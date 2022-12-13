import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../../screens/Auth/OnBoarding/OnBoarding';
import Welcome from '../../screens/Auth/Welcome/Welcome';
import SecurityWallet from '../../screens/Auth/SecurityWallet/SecurityWallet';
import FingerPrintScreen from '../../screens/Main/FingerPrintScreen/FingerPrintScreen';
import PhraseScreen from '../../screens/Auth/Phrase/PhraseScreen';
import PhraseConfirm from '../../screens/Auth/Phrase/PhraseConfirm';
import TermCondition from '../../screens/Auth/TermCondition/TermCondition';
import SuccessScreen from '../../screens/Auth/Success/SuccessScreen';
import languagesScreen from '../../screens/Auth/languages/languagesScreen';
import ImportCoin from '../../screens/Auth/ImportCoin/ImportCoin';
import RestoreWalletDetail from '../../screens/Main/RestoreWalletDetail/RestoreWalletDetail';
import SettingStack from '../MainStack/SettingStack';
import EditWallet from '../../screens/Main/RestoreWalletDetail/EditWallet';

const AuthStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={"SecurityWallet"}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="languagesScreen" component={languagesScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="ImportCoin" component={ImportCoin} />
      <Stack.Screen name="TermCondition" component={TermCondition} />
      <Stack.Screen name="PhraseScreen" component={PhraseScreen} />
      <Stack.Screen name="PhraseConfirm" component={PhraseConfirm} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="RestoreWalletDetail" component={RestoreWalletDetail} />
      <Stack.Screen name="EditWallet" component={EditWallet} />


    </Stack.Navigator>
  );
};

export default AuthStack;
