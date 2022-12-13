// import {View, Text, Image, Platform} from 'react-native';
// import DashBoard from '../../screens/Main/DashBoard/DashBoard';
// import {createStackNavigator} from '@react-navigation/stack';
// import Portfolio from '../../screens/Main/Portfolio/Portfolio';
// import RestoreWallet from '../../screens/Main/RestoreWallet/RestoreWallet';
// import RestoreWalletSecond from '../../screens/Main/RestoreWallet/RestoreWalletSecond';
// import SelectCurrency from '../../screens/Main/Currency/SelectCurrency';
// import RestoreSuccessful from '../../screens/Main/RestoreSuccessful/RestoreSuccessful';
// import SendAmountScreen from '../../screens/Main/SendAmountScreen/SendAmountScreen';
// import WalletScreen from '../../screens/Main/WalletScreen/WalletScreen';
// import RecivedAmountScreen from '../../screens/Main/RecivedAmountScreen/RecivedAmountScreen';
// import ProfileScreen from '../../screens/Main/ProfileScreen/ProfileScreen';
// import SettingScreen from '../../screens/Main/SettingScreen/SettingScreen';
// import SecurityScreen from '../../screens/Main/SecurityScreen/SecurityScreen';
// import RecoveryScreen from '../../screens/Main/RecoveryScreen/RecoveryScreen';
// import FingerPrintScreen from '../../screens/Main/FingerPrintScreen/FingerPrintScreen';
// import AddMore from '../../screens/Main/AddMore/AddMore';
// import SupportScreen from '../../screens/Main/SupportScreen';
// import NewWallet from '../../screens/Main/NewWallet/NewWallet';

// const MainStack = () => {

//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName={"DashBoard"}
//     >
//       <Stack.Screen name="DashBoard" component={DashBoard} />
//       <Stack.Screen name="AddMore" component={AddMore} />
//       <Stack.Screen name="Portfolio" component={Portfolio} />
//       <Stack.Screen name="RestoreWallet" component={RestoreWallet} />
//       <Stack.Screen name="RestoreWalletSecond" component={RestoreWalletSecond} />
//       <Stack.Screen name="SelectCurrency" component={SelectCurrency} />
//       <Stack.Screen name="RestoreSuccessful" component={RestoreSuccessful} />
//       <Stack.Screen name="SendAmountScreen" component={SendAmountScreen} />
//       <Stack.Screen name="WalletScreen" component={WalletScreen} />
//       <Stack.Screen name="RecivedAmountScreen" component={RecivedAmountScreen} />
//       <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
//       <Stack.Screen name="SettingScreen" component={SettingScreen} />
//       <Stack.Screen name="SecurityScreen" component={SecurityScreen} />
//       <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} />
//       <Stack.Screen name="FingerPrintScreen" component={FingerPrintScreen} />
//       <Stack.Screen name="SupportScreen" component={SupportScreen} />
//       <Stack.Screen name="NewWallet" component={NewWallet} />

//     </Stack.Navigator>
//   );

// };

// export default MainStack;

import {View, Text, Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {colors} from '../../utils/Colors';
import DashBoard from '../../screens/Main/DashBoard/DashBoard';
import SettingScreen from '../../screens/Main/SettingScreen/SettingScreen';
import {images} from '../../assets/images';
import CustomText from '../../components/CustomText';
import {Montserrat} from '../../utils/Fonts';
import TokenStack from './TokenStack';
import SettingStack from './SettingStack';

const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route, focused}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          color: colors.white,
          fontSize: 15,
          // marginTop:10
        },
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: verticalScale(60),
          // borderTopLeftRadius: scale(20),
          // borderTopRightRadius: scale(20),
          // borderWidth:0,
          borderTopWidth: 0,
          shadowColor: Platform.OS == 'ios' ? '#212529' : colors.black,
          shadowRadius: 8,
          elevation: 10,
          shadowOpacity: 0.7,
          shadowOffset: {width: 1, height: 4},
          paddingHorizontal: scale(10),
          padding: 10,
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          let TextName;
          if (route.name === 'wallet') {
            iconName = images.trust;
            TextName = 'wallet';
          } else if (route.name === 'SettingStack') {
            iconName = images.largeSetting;
            TextName = 'setting';
          }

          return (
            <View style={{alignItems:"center",height:"100%"}}>
            
                <Image
                  resizeMode="contain"
                  source={iconName}
                  style={{
                    width: moderateScale(20),
                    height: verticalScale(20),
                    tintColor: focused ? colors.white : colors.gray,
                  }}
                />
              <CustomText
                label={TextName}
                fontSize={14}
                fontWeight={'600'}
                fontFamily={Montserrat.SemiBold}
                color={focused ? colors.white : colors.gray}
                marginTop={3}
              />
            </View>
          );
        },
      })}
      // activeColor="#f0edf6"
      // inactiveColor="#3e2465"
      // barStyle={{backgroundColor: '#694fad',}}
      // tabBarOptions={{
      // activeTintColor: colors.primary,
      // inactiveTintColor: '#000',
      // activeBackgroundColor: '#fff',
      // showIcon: true,
      // }}
      initialRouteName="wallet">
      <Tab.Screen name="wallet" component={TokenStack} />
      <Tab.Screen name="SettingStack" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default MainStack;
