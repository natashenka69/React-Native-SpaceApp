import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { spaceParts } from '../../data'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function Planets() {
    const navigation = useNavigation()
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {
        spaceParts.map((item, index) => {
            return <SpaceCard navigation={navigation} item={item} key={index}/>
        })
      }
    </View>
  )
}


const SpaceCard = ({item, navigation}) => {
    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <TouchableOpacity
        onPress={() => navigation.navigate("Planet", {...item})}
        style={{width: wp(44), height: wp(65)}}
        className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
        >
            <Image source={item.image}
            style={{width: wp(44), height: wp(65), borderRadius: 35}}
            className="absolute"
            />

            <LinearGradient colors={["transparent", "rgba(130, 30, 60, 0.8)"]}
        style={{width: wp(44), height: hp(15)}}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y:1}}
        className="absolute bottom-0 rounded-b-[35px]"
        />
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} style={{backgroundColor: "rgba(255, 255, 255, 0.4)"}} className="absolute top-1 right-3 rounded-full p-2">
            <HeartIcon size={wp(5)} color={isFavorite ? "red" : "white" }/>
        </TouchableOpacity>

        <Text style={{fontSize: wp(4)}} className="text-white font-semibold">{item.title}</Text>
        <Text style={{fontSize: wp(2.8)}} className="text-white">{item.description}</Text>
        </TouchableOpacity>
    )
}