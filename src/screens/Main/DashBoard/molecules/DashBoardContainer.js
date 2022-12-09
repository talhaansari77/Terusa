import {View, Text,Image} from 'react-native';
import React from 'react';
import GradientContainer from '../../../../components/GradientContainer';
import {PieChart} from 'react-native-svg-charts';
import {DashBoardGraphData} from '../../../../utils/Data';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import {Roboto} from '../../../../utils/Fonts';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
import { images } from '../../../../assets/images';
import AppHeader from '../../../../components/AppHeader';

const DashBoardContainer = props => {

  const sendSwipeData=[
    {id:1,txt:"Send",img:images.upArrow},
    {id:1,txt:"Receive",img:images.down},
    {id:1,txt:"Buy",img:images.swap},
    {id:1,txt:"Swap",img:images.swap},

  ]
  return (
    <GradientContainer 
    borderBottomRightRadius={scale(20)}
    borderBottomLeftRadius={scale(20)}
    onPress={props.onPress} height={verticalScale(220)}>
      <View style={{width: '100%', height: '100%', }}>
      <AppHeader
          onPress={() => {
          props.navigation.navigate('ProfileScreen');
          }}
          marginLeft={10}
          img={images.UserImage}
          txt={'Terusa'}
          width={18}
          heigth={20}
          fontSize={18}
          rightImg={images.SettingImage}
          rightOnPress={() => props.navigation.navigate('SettingScreen')}
        />
        <View style={{marginLeft: verticalScale(20), alignSelf: 'center',paddingVertical:verticalScale(10)}}>
          <CustomText
            label={'$0.00'}
            fontSize={30}
            fontFamily={Roboto.BlackBold}
            color={colors.white}
            alignSelf="center"
          />
          <Spacer />
          <CustomText
            label={'Main Wallet 4'}
            fontSize={12}
            fontWeight={'400'}
            fontFamily={Roboto.SemiBold}
            color={colors.darkGrey}
            alignSelf="center"
          />
        </View>
        <Spacer height={30}/>

        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      {
        sendSwipeData.map(item=>{

          return(
            <View>

            <View style={{width:40,height:40,borderRadius:99,backgroundColor:colors.primary,alignSelf:"center",alignItems:"center",justifyContent:"center"}}>
              <Image  source={item.img}
              style={{width:20,height:20,tintColor:colors.white}}
              />



            </View>

            <CustomText
            label={item.txt}
            fontSize={13}
            fontWeight={'400'}
            fontFamily={Roboto.SemiBold}
            color={colors.white}
            alignSelf="center"
            marginTop={5}
            />
          
            </View>

          )

        })
        
      }

      </View>
      </View>
    

      

     
    </GradientContainer>
  );
};

export default DashBoardContainer;
