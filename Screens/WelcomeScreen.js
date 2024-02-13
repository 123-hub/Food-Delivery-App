import React from "react";
import { Text,View,Image, TouchableOpacity ,StatusBar} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from 'react-native-animatable';
function Welcome() {
  return (
   
      <View className="flex justify-center items-center h-full bg-black">
       <StatusBar
       barStyle="light-content"
       /> 
        <Animatable.Text animation={"fadeIn"} className="flex-2 font-bold text-white text-4xl text-center">Let's Get Stared</Animatable.Text>
        <Image source={
          require("../assets/splash.png")
        } className="flex-1 h-20 w-40"/>
        <TouchableOpacity className="px-4 py-2 bg-blue-700 rounded-xl mb-10">
          <Animatable.Text animation={"bounce"} iterationCount={5} className="text-white text-2xl">Start The Journey</Animatable.Text>
        </TouchableOpacity>
      </View>
   
  );
}

export default Welcome;
