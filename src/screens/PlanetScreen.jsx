import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

import Animated, {FadeInDown} from 'react-native-reanimated';

export default function PlanetScreen(props) {
    const item = props.route.params
    const navigation = useNavigation()
    const [isFavorite, setIsFavorite] = useState(false)

  return (
    <View className="flex-1 bg-black">
        <Image source={require("../../assets/images/planetsbg.jpg")} style={{width: wp(100), height: hp(120)}} className="absolute"/>
        <SafeAreaView className="absolute pt-16 flex-row justify-between items-center w-full">
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="p-2 rounded-full ml-4"
                style={{backgroundColor: "rgba(255,255,255,0.5)"}}
            >
                <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => setIsFavorite(!isFavorite)}
                className="p-2 rounded-full mr-4"
                style={{backgroundColor: "rgba(255,255,255,0.5)"}}
            >
                <HeartIcon size={wp(7)} strokeWidth={4} color={isFavorite ? "red" : "white" }/>
            </TouchableOpacity>
        </SafeAreaView>

        <View className="pt-20 items-center">
        <Animated.Text entering={FadeInDown.delay(200).duration(1000)} className="text-white pt-4 items-center tracking-widest" style={{fontSize: wp(13)}}>{item.title}</Animated.Text>
        <Animated.Text entering={FadeInDown.delay(400).duration(1000)} className="text-white uppercase" style={{fontSize: wp(5.4)}}>{item.planetDescription}</Animated.Text>
        <View>
        <Animated.Image entering={FadeInDown.delay(600).duration(1000)} source={item.planet} style={{width: wp(100), height: hp(50)}}/>
        </View>
        </View>
        <View className="flex-row justify-between mx-8 mt-4">
           <Animated.View  entering={FadeInDown.delay(800).duration(500)}>
                    <Text className="text-red-500 tracking-widest uppercase" style={{fontSize: wp(3.5)}}>
                        Size
                    </Text>
                    <Text className="text-white font-bold tracking-widest" style={{fontSize: wp(3.3)}}>
                        {item.size}
                    </Text>
                    <Text className="text-red-500 tracking-widest uppercase mt-4" style={{fontSize: wp(3.5)}}>
                        Rotation Period
                    </Text>
                    <Text className="text-white font-bold tracking-widest" style={{fontSize: wp(3.3)}}>
                        {item.rotation}
                    </Text>
                    
           </Animated.View>

           <Animated.View  entering={FadeInDown.delay(800).duration(500)}>
                    <Text className="text-red-500 tracking-widest uppercase" style={{fontSize: wp(3.5)}}>
                        Surface Area
                    </Text>
                    <Text className="text-white font-bold tracking-widest" style={{fontSize: wp(3.3)}}>
                        {item.surfaceArea}
                    </Text>
                    
                    <Text className="text-red-500 tracking-widest uppercase mt-4" style={{fontSize: wp(3.5)}}>
                        Distance from Sun
                    </Text>
                    <Text className="text-white font-bold tracking-widest" style={{fontSize: wp(3.3)}}>
                        {item.distance}
                    </Text>
           </Animated.View>
        </View>
        <Animated.View  entering={FadeInDown.delay(1000).duration(500)}>
        <TouchableOpacity className="justify-center items-center bg-purple-900 mx-auto mt-6 p-3 px-12 rounded-full">
            <Text className="text-white font-bold uppercase" style={{fontSize: wp(4)}}>Begin the travel</Text>
        </TouchableOpacity>
        </Animated.View>
    </View>
  )
}