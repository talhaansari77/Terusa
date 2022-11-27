import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import CustomText from '../../../../components/CustomText'
import CustomTextInput from '../../../../components/CustomTextInput'
import { colors } from '../../../../utils/Colors'
import GradientContainer from '../../../../components/GradientContainer'

const RestoreItem = ({index,walletArray}) => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
    
    <View key={index}>
        <GradientContainer
          height={60}
          marginBottom={20}
          alignItems={"center"}
          flexDirection={"row"}
          >
          <CustomText
            label={walletArray.no}
            color={colors.white}
            fontSize={15}
            fontFamily={'Montserrat-bold'}
          />
          
          <CustomTextInput
          value={walletArray.value}
          onChangeText={walletArray.onChangeText} 
            placeholder="------------"
            placeholderTextColor={colors.white}
            paddingHorizontal={10}
          />
        </GradientContainer>
      </View>
      </KeyboardAvoidingView>
  )
}

export default RestoreItem

const styles = StyleSheet.create({})