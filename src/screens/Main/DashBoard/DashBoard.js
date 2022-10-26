import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import AppHeader from '../../../components/AppHeader'
import { images } from '../../../assets/images'

const DashBoard = () => {
  return (
    <SafeAreaView>
      <AppHeader
      img={images.UserImage}

      txt={"Terusa"}
      fontSize={18}
      rightImg={images.SettingImage}
      />
      {/* <Text>DashBoard</Text> */}
    </SafeAreaView>
  )
}

export default DashBoard

const styles = StyleSheet.create({})