import {View, Text, Image, Platform} from 'react-native';
import DashBoard from '../../screens/Main/DashBoard/DashBoard';
import {createStackNavigator} from '@react-navigation/stack';
import RestoreWallet from '../../screens/Main/RestoreWallet/RestoreWallet';
import RestoreWalletSecond from '../../screens/Main/RestoreWallet/RestoreWalletSecond';
import SelectCurrency from '../../screens/Main/Currency/SelectCurrency';
import RestoreSuccessful from '../../screens/Main/RestoreSuccessful/RestoreSuccessful';
import SecurityScreen from '../../screens/Main/SecurityScreen/SecurityScreen';
import RecoveryScreen from '../../screens/Main/RecoveryScreen/RecoveryScreen';


const MainStack = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"SecurityScreen"}
    >
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="RestoreWallet" component={RestoreWallet} />
      <Stack.Screen name="RestoreWalletSecond" component={RestoreWalletSecond} />
      <Stack.Screen name="SelectCurrency" component={SelectCurrency} />
      <Stack.Screen name="RestoreSuccessful" component={RestoreSuccessful} />
      <Stack.Screen name="SecurityScreen" component={SecurityScreen} />
      <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} />

    </Stack.Navigator>
  );
 
};

export default MainStack;
