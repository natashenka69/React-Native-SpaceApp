import { View, Text, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Animated, {FadeInDown} from 'react-native-reanimated';

const WelcomeScreen = () => {

    const navigation = useNavigation()

  return (
    <View className="flex-1 flex justify-end">
        <StatusBar translucent backgroundColor="transparent" />
        {/* Bg Image */}
      <Image
      source={require("../../assets/images/space.jpg")}
      className="h-full w-full absolute"
      />
    {/* Content */}
    <View className="p-5 pb-10 space-y-16">
    <LinearGradient
        colors={["transparent", "rgba(3, 105, 161, 0.8)"]}
        style={{width: wp(100), height: hp(60)}}
        start={{x: 0.5, y: 0}}
        end={{x:0.5, y: 1}}
        className="absolute bottom-0"
        />
        <Animated.View entering={FadeInDown.delay(200).duration(1000)} className="space-y-3 items-center">
            <Text className="text-white font-bold text-5xl" style={{fontSize: wp(10)}}>Touch with space</Text>
            <Text className="text-neutral-50 font-medium" style={{fontSize: wp(4)}}>Tired of Earth? We can find an easy solution for you.</Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).duration(1500)}>
        <TouchableOpacity  onPress={() => navigation.navigate("Home")} className="bg-purple-500 mx-auto p-3 px-12 rounded-full">
            <Text className="text-white font-bold" style={{fontSize: wp(5.5)}}>I'm Ready!</Text>
        </TouchableOpacity>
        </Animated.View>
       
    </View>
    </View>
  )
}

export default WelcomeScreen