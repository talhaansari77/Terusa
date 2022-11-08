import {View, Text, LogBox, Button} from 'react-native';
import React, {useState} from 'react';
import CustomText from './src/components/CustomText';
import {Montserrat} from './src/utils/Fonts';
import RootNavigator from './src/routes';
import SendAmountScreen from './src/screens/Main/SendAmountScreen/SendAmountScreen';
import WalletScreen from './src/screens/Main/WalletScreen/WalletScreen';
import RecivedAmountScreen from './src/screens/Main/RecivedAmountScreen/RecivedAmountScreen';
import Web3 from 'web3';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/screens/App/AppNavigation';
LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

const App = () => {
  // const [web3] = useState<Web3>(new Web3());
  // const [provider] = useState(
  //   new Web3.providers.HttpProvider('http://127.0.0.1:7545'),
  // );
  // const onGetAccounts = async () => {
  //   try {
  //     web3.setProvider(provider);
  //     const acc = await web3.eth.personal.getAccounts();
  //     console.log("Hellllllooooo",acc);
  //   } catch (error) {
  //     console.log('Error');
  //     console.log(error);
  //   }
  // };

  return (
    <>
     <NavigationContainer >
      <AppNavigator />
     </NavigationContainer>

    </>
  );
};

export default App;

{
  /* <RootNavigator/> */
}
