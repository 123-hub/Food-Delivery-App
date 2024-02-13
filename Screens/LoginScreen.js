import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className="relative">
      <StatusBar style="light" />
      <Animatable.Image
        animation={"bounceIn"}
        className="absolute z-10 top-12 w-[90] h-[160] left-20"
        source={require("../assets/buld3.png")}
      />
      <Animatable.Image
        animation={"bounceIn"}
        className="absolute z-10 top-12 w-[90] h-[220] left-60"
        source={require("../assets/buld3.png")}
      />
      <Image
        className="absolute h-screen w-screen"
        source={require("../assets/backbg.png")}
      />
      <View className="absolute w-full mt-32 pt-56 ">
        <Text className=" text-5xl font-bold text-center text-white">
          Login
        </Text>
        <View className="flex items-center mx-4 space-y-4 mt-24">
          <View className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput
              placeholder="Email or Phone number"
              placeholderTextColor={"gray"}
            />
          </View>
          <View className="bg-black/5 p-5 rounded-2xl w-full mb-4">
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </View>
          <View className="w-full">
            <TouchableOpacity
              className="p-5 rounded-2xl"
              style={{ backgroundColor: themeColors.textSecondary(1) }}
            >
              <Text className="text-white text-lg text-center font-semibold">
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row">
            <Text>
             Don't have an Account
             
            </Text>
            <TouchableOpacity className="" onPress={()=> navigation.navigate('Home')}>
                <Text className="pl-1 font-bold underline" style={{color: themeColors.textSecondary(1)}}>SignUp</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
