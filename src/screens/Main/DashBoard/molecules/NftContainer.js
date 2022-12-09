import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native'
import React from 'react'
import commonStyles from '../../../../utils/CommonStyles'
import { images } from '../../../../assets/images'
import { scale, verticalScale } from 'react-native-size-matters'
import { Spacer } from '../../../../components/Spacer'
import CustomText from '../../../../components/CustomText'
import { Roboto } from '../../../../utils/Fonts'
import { colors } from '../../../../utils/Colors'
import CustomButton from '../../../../components/CustomButton'

const NftContainer = () => {
  return (
    <ImageBackground
    source={images.BackgroundImage}
    resizeMode="cover"
    style={commonStyles.img}>
    <View style={{alignItems:"center",height:"100%"}}>
       

        <Spacer height={50}/>
        <View style={{width:scale(90),height:verticalScale(90),}}>
            <Image source={images.nft}
            resizeMode="contain"
            style={commonStyles.img}
            />

        </View>

        <CustomText
            label={"NFTs will appear here"}
            fontSize={13}
            fontFamily={Roboto.SemiBold}
            color={colors.cloudyBlue}
            alignSelf="center"
            marginTop={10}
          />
          <Spacer height={20}/>

        <CustomButton title={"Receive"}
        height={40}
        width={"50%"}
        />

    </View>
    </ImageBackground>

  )
}

export default NftContainer

const styles = StyleSheet.create({})