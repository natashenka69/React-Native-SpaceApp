import { View, Text, SafeAreaView, Image, StatusBar, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import ImageSlider from '../components/ImageSlider'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SpaceComponent from '../components/SpaceComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Planets from '../components/Planets';


const HomeScreen = () => {



  return (
    <SafeAreaView className="flex-1 bg-black flex space-y-8">
      <ScrollView showsVerticalScrollIndicator={false} className="space-y-6">
            <Image
      source={require("../../assets/images/space3.jpg")}
      className={`h-${Dimensions.get("window").height} w-${Dimensions.get("window").width} absolute left-0 right-0 top-0`}
      />
            <StatusBar backgroundColor="black" />
      <View className="mx-auto">
        <View className="mt-6 flex-row justify-between items-center">
        <Text style={{fontSize: hp(2.8), fontFamily: "Space-Mono"}} className="text-purple-200 font-bold mr-24">Space Employeer</Text>
        <TouchableOpacity className="border border-red-400 rounded-3xl">
        <Image  source={require("../../assets/images/avatar.png")} className="h-[50px] w-[50px] rounded-3xl"/>
        </TouchableOpacity>
        </View>
      </View>
      <View className="">
        <ImageSlider />
      </View>

      <View className="flex-1">
      <SpaceComponent/>
      <Planets/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen