import {View, Text, Image, Platform} from 'react-native';
import DashBoard from '../../screens/Main/DashBoard/DashBoard';
import {createStackNavigator} from '@react-navigation/stack';
import RestoreWallet from '../../screens/Main/RestoreWallet/RestoreWallet';
import RestoreWalletSecond from '../../screens/Main/RestoreWallet/RestoreWalletSecond';


const MainStack = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"RestoreWallet"}
    >
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="RestoreWallet" component={RestoreWallet} />
      <Stack.Screen name="RestoreWalletSecond" component={RestoreWalletSecond} />

    </Stack.Navigator>
  );
 
};

export default MainStack;
