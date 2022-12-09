import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { colors } from '../../../../utils/Colors'
import CustomText from '../../../../components/CustomText'
import { Roboto } from '../../../../utils/Fonts'

const SelectPercent = ({item}) => {
  return (
    <View style={styles.mainContainer}>
   <CustomText
          label={item}
          fontSize={14}
          fontFamily={Roboto.SemiBold}
          color={colors.white}
          alignSelf="center"
        />   
         </View>
  )
}

export default SelectPercent

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:"row",
        width:"20%",
        height:verticalScale(30),
        backgroundColor:colors.primary,
        borderRadius:scale(7),
        alignItems:"center",
        justifyContent:"center",
        padding:5,
        borderWidth:.2

    }

})