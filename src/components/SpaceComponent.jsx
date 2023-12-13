import { View, TextInput } from 'react-native'
import React from 'react'
import {MagnifyingGlassIcon} from "react-native-heroicons/outline"


export default function SpaceComponent() {

  return (
    <View className="mx-5 mb-4">
      <View className="flex-row items-center bg-black rounded-full p-4 space-x-2 pl-6">
        <MagnifyingGlassIcon size={15} strokeWidth={3} color="white"/>
        <TextInput placeholder='Search planets of your dream'
        placeholderTextColor="gray"
        className="flex-1 text-base mb-1 pl-1 tracking-wider text-white"
        />
      </View>
    </View>
  )
}