import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

function CartBar({data}) {
    const navigation = useNavigation();
    console.log(data)
  return (
    <View className="absolute bottom-6 z-50 w-full">
      <TouchableOpacity
      onPress={()=> navigation.navigate('Cart',{...data})}
        style={{ backgroundColor: themeColors.textSecondary(1) }}
        className="flex-row items-center justify-around h-16 rounded-full mx-4"
      >
        <View
          className="flex justify-center rounded-full p-2 px-4 items-center"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="text-white text-lg">3</Text>
        </View>
        <Text className="text-lg text-white">View</Text>
        <Text className="text-lg text-white">$23</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CartBar;
