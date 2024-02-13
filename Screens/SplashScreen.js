import React,{useEffect} from "react";
import { Text, View } from "react-native-animatable";
import * as Animatable from "react-native-animatable";
import { themeColors } from "../theme";


function SplashScreen({navigation}) {
   
  useEffect(() => {
   setTimeout(()=> navigation.navigate('Signup'),3000)
  }, []);

  return (
    <View className=" h-full pt-16 flex justify-center items-center" style={{backgroundColor: themeColors.textSecondary(1)}}>
      <Animatable.Text
        animation={"rubberBand"}
        iterationCount={"infinite"}
        duration={2000}
        className="text-white text-4xl font-bold"
      >
        Foody Panda
      </Animatable.Text>
    </View>
  );
}

export default SplashScreen;
