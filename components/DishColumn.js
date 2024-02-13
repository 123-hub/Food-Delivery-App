import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";

function DishColumn({ dish }) {

  return (
    <View className="bg-white mx-4 my-2 rounded-xl shadow-lg" style={{shadowColor: themeColors.textSecondary(0.2)}}>
      <View className="flex-row item-center">
        <Image
          className="h-36 w-36 rounded-l-xl object-center"
          source={dish.image}
        />
        <View className="justify-between my-4 mx-2">
          <View>
            <Text className="font-semibold text-xl capitalize">
              {dish.name}
            </Text>
            <Text className="text-lg capitalize">{dish.description}</Text>
          </View>
          <View className="flex-row w-3/4 justify-between items-center">
            <Text className="text-xl font-bold">${dish.price}</Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                style={{ backgroundColor: themeColors.textSecondary(1) }}
                className="flex justify-center items-center rounded-full w-8 h-8"
              >
                <MinusIcon color={"white"} strokeWidth={2} stroke={"white"}/>
              </TouchableOpacity>
              <Text className="px-2 font-bold">{2}</Text>
              <TouchableOpacity
                style={{ backgroundColor: themeColors.textSecondary(1) }}
                className="flex justify-center items-center rounded-full w-8 h-8"
              >
                <PlusIcon color={"white"} strokeWidth={2} stroke={"white"}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default DishColumn;
