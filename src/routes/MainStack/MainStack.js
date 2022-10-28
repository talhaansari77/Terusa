import {View, Text, Image, Platform} from 'react-native';
import DashBoard from '../../screens/Main/DashBoard/DashBoard';
import {createStackNavigator} from '@react-navigation/stack';
import RestoreWallet from '../../screens/Main/RestoreWallet/RestoreWallet';
import RestoreWalletSecond from '../../screens/Main/RestoreWallet/RestoreWalletSecond';
import SelectCurrency from '../../screens/Main/Currency/SelectCurrency';
import RestoreSuccessful from '../../screens/Main/RestoreSuccessful/RestoreSuccessful';
import SendAmountScreen from '../../screens/Main/SendAmountScreen/SendAmountScreen';
import WalletScreen from '../../screens/Main/WalletScreen/WalletScreen';
import RecivedAmountScreen from '../../screens/Main/RecivedAmountScreen/RecivedAmountScreen';
import ProfileScreen from '../../screens/Main/ProfileScreen/ProfileScreen';
import SettingScreen from '../../screens/Main/SettingScreen/SettingScreen';
import SecurityScreen from '../../screens/Main/SecurityScreen/SecurityScreen';
import RecoveryScreen from '../../screens/Main/RecoveryScreen/RecoveryScreen';


const MainStack = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"ProfileScreen"}
    >
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="RestoreWallet" component={RestoreWallet} />
      <Stack.Screen name="RestoreWalletSecond" component={RestoreWalletSecond} />
      <Stack.Screen name="SelectCurrency" component={SelectCurrency} />
      <Stack.Screen name="RestoreSuccessful" component={RestoreSuccessful} />
      <Stack.Screen name="SendAmountScreen" component={SendAmountScreen} />
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen name="RecivedAmountScreen" component={RecivedAmountScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="SecurityScreen" component={SecurityScreen} />
      <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} />

    </Stack.Navigator>
  );
 
};

export default MainStack;
