import {View, Text, Image, Platform} from 'react-native';
import DashBoard from '../../screens/Main/DashBoard/DashBoard';
import {createStackNavigator} from '@react-navigation/stack';
import Portfolio from '../../screens/Main/Portfolio/Portfolio';


const MainStack = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={""}
    >
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="Portfolio" component={Portfolio} />


    </Stack.Navigator>
  );
 
};

export default MainStack;
