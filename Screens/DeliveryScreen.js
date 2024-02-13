import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import { ArrowLeftIcon, PhoneIcon, UserIcon, XMarkIcon } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
function DeliveryScreen() {
    const navigation= useNavigation()
  return (
    <View className="flex-1 ">
         <TouchableOpacity onPress={()=>navigation.goBack()} className="absolute bg-white rounded-full top-14 left-4 z-10 p-2 " style={{backgroundColor: themeColors.textSecondary(1)}}>
            <ArrowLeftIcon strokeWidth={2} strokeColor={"white"} color={"white"}/>
          </TouchableOpacity>
          <StatusBar style="dark"/>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
        className="flex-1"
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={"new york"}
          description="hot and spicy"
          pinColor={themeColors.textSecondary(1)}
        />
      </MapView>
      <View className="absolute bottom-0 w-full rounded-t-3xl bg-white">
        <View className="mx-4 my-4">
          <Text className="text-xl font-semibold">Estimated Arrival</Text>
          <Text className="text-3xl font-bold">20-30 Minutes</Text>
          <Text className="text-lg font-regular capitalize">
            Your order is its on your way
          </Text>
        </View>
        <View
          className="flex-row  items-center mx-4 py-2 px-2 mb-8 rounded-full"
          style={{ backgroundColor: themeColors.textSecondary(0.8) }}
        >
          <View
            className=" h-24 w-24 overflow-hidden rounded-full shadow-lg border-2 border-white"
            style={{ shadowColor: "white" }}
          >
            <Image
              className="h-24 w-24"
              source={require("../assets/peron.jpg")}
            />
          </View>
          <View className="flex-1 pl-2">
            <Text className="text-xl text-white font-bold">Sourabh tiwari</Text>
            <Text className="text-md text-white">Your Rider</Text>
          </View>
          <TouchableOpacity className="bg-white p-2 rounded-full mr-4">
            <PhoneIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Home')} className="bg-white p-2 rounded-full mr-4">
            <XMarkIcon strokeWidth={4} strokeColor="red" color={"red"} />
          </TouchableOpacity>
          </View>
       

        </View>
      
    </View>
  );
}

export default DeliveryScreen;
