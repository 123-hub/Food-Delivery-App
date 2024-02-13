import React from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { themeColors } from "../theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";

function CartScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const array = [ {
    name: "Noodles",
    image: require("../assets/noodles.jpg"),
  },
  {
    name: "Burger",
    image: require("../assets/burger.jpg"),
  },
  {
    name: "kfc Chicken",
    image: require("../assets/kfc.jpg"),
  },]
  console.log(params);
  return (
    <View className=" flex-1 bg-white">
      <View className="relative py-2 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: themeColors.textSecondary(1),
            shadowColor: themeColors.textSecondary(0.5),
          }}
          className="absolute rounded-full z-10 top-5 left-2 p-2 shadow-lg"
        >
          <ArrowLeftIcon
            color={"white"}
            strokeWidth={2}
            strokeColor={"white"}
          />
        </TouchableOpacity>
      </View>
      <View className="flex justify-center items-center ">
        <Text className="text-xl font-bold">Your Cart</Text>
        <Text className="text-lg ">{params.name}</Text>
      </View>
      <View
        className="flex-row items-center justify-center"
        style={{ backgroundColor: themeColors.textSecondary(0.7) }}
      >
        <Image
          className="h-16 w-16 mx-2 my-2"
          source={require("../assets/bikeGuy.png")}
        />
        <Text className="flex-1 justify-center items-center text-white font-medium">
          Delivery Time is 30-40 Minutes
        </Text>
        <TouchableOpacity className="m-2">
          <Text className="font-bold text-lg text-white">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView 
      showsVerticalScrollIndicator="false"
      contentContainerStyle={
        {
          paddingBottom: 30
        }
      }
      className="mt-4">
        {array.map((value, index) => {
          return (
            <View key={index} className="w-full my-2 shadow-lg" style={{shadowColor: themeColors.textSecondary(0.2)}}>
              <View className="flex-row  items-center bg-white mx-4 px-2 border-0 border-gray-400 rounded-xl h-24" >
                <Text style={{ color: themeColors.textSecondary(1) }} className="font-semibold">2 X</Text>
                <Image
                  className="h-16 w-16 rounded-full mx-2"
                  source={value.image}
                />
                <Text className="text-lg font-semibold flex-1"> {value.name}</Text>
                <TouchableOpacity
                style={{ backgroundColor: themeColors.textSecondary(1) }}
                className="flex justify-center items-center rounded-full p-1"
              >
                <MinusIcon color={"white"} strokeWidth={2} stroke={"white"}/>
              </TouchableOpacity>
             
                <Text className="text-lg font-bold mx-1">$10</Text>
              <TouchableOpacity
                style={{ backgroundColor: themeColors.textSecondary(1) }}
                className="flex justify-center items-center rounded-full p-1"
              >
                <PlusIcon color={"white"} strokeWidth={2} stroke={"white"}/>
              </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {/** total bottom area */}
      <View className="absolute bottom-0 pt-8 pb-8 rounded-3xl w-full" style={{backgroundColor: themeColors.textSecondary(0.8)}}>
      <View className="flex-row justify-between items-center mx-6">
        <Text className="text-white text-lg font-medium">Subtotal</Text>
        <Text className="text-white text-lg font-medium">$ 60</Text>
      </View>
      <View className="flex-row justify-between items-center mx-6">
        <Text className="text-white text-lg font-medium">Delivery Charge</Text>
        <Text className="text-white text-lg font-medium">$ 5</Text>
      </View>
      <View className="flex-row justify-between items-center mx-6 mt-6">
        <Text className="text-white text-lg font-bold">Total</Text>
        <Text className="text-white text-lg font-bold">$ 65</Text>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Delivery')} className=" flex justify-center items-center rounded-full bg-black px-6 py-3 mx-6 mt-4">
        <Text className="text-2xl font-semibold text-white">Place Order</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default CartScreen;
