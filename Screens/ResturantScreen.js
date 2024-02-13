import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import {
  ArrowLeftIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import DishColumn from "../components/DishColumn";
import { StatusBar } from "expo-status-bar";
import CartBar from "../components/CartBar";

function ResturantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  return (
    <View>
        <StatusBar  style="light"/>
      <CartBar data = {params}/>
       
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={params.image} />
          <TouchableOpacity onPress={()=>navigation.goBack()} className="absolute bg-white rounded-full top-14 left-4 p-2 " style={{backgroundColor: themeColors.textSecondary(1)}}>
            <ArrowLeftIcon  strokeWidth={2} strokeColor={"white"} color={"white"}/>
          </TouchableOpacity>
        </View>
        <View className="-mt-12 bg-white rounded-t-3xl pt-8 px-4 pb-3">
          <View className="flex-row justify-between items-center">
            <Text className="font-semibold text-2xl">{params.name}</Text>
          </View>
          <View className="flex-row justify-start items-center overflow-hidden">
            <Text className="text-lg font-bold">{params.title}</Text>
            <View className="flex-row w-full items-center justify-between my-1">
              <View className="flex-row items-center">
                <StarIcon style={{ height: 4, width: 4 }} fill={"orange"} />
                <Text className="pl-1">{params.stars}</Text>
                <Text className=""> ({params.reviews} reviews)</Text>
                <Text className="font-semibold"> ~ {params.category} </Text>
              </View>
              <View className="flex-row items-center">
                <MapPinIcon />
                <Text>{params.address}</Text>
              </View>
            </View>
          </View>
        <Text>{params.description}</Text>
        </View>
        <Text className="font-bold text-2xl px-4 my-4" >Menu</Text>
        <View>
            {
                params.dishes.map((value,index)=>{
                    return (
                        <DishColumn  dish = {{...value}} key={index} />
                    )
                })
            }
        </View>
      </ScrollView>
    </View>
  );
}

export default ResturantScreen;
