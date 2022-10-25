import {View, Text, Image, Platform} from 'react-native';
import DashBoard from '../../screens/Main/DashBoard/DashBoard';
import {createStackNavigator} from '@react-navigation/stack';

const MainStack = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={"Report"}
    >
      <Stack.Screen name="DashBoard" component={DashBoard} />

    </Stack.Navigator>
  );
 
};

export default MainStack;
