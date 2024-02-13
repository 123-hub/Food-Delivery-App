import React, { useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { BookmarkIcon } from "react-native-heroicons/outline";
import { Pizza } from "react-native-heroicons/solid";
function Categories() {
  const arrayf = [
    {
      name: "Chinese",
      image: require("../assets/chinese.jpg"),
    },
    {
      name: "Burger",
      image: require("../assets/burger.jpg"),
    },
    {
      name: "Italian",
      image: require("../assets/italian.jpg"),
    },
    {
      name: "Chicken",
      image: require("../assets/kfc.jpg"),
    },
    {
      name: "Pizza",
      image: require("../assets/pizza2.png"),
    },
  ];
  const [isActive, setIsActive] = useState(null);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator="false"
        className="mt-4"
      >
        {arrayf.map((value, index) => {
          const btnCls = isActive == index ? "bg-gray-600" : "bg-gray-200";
          const txtCls =
            isActive == index
              ? "font-semibold text-gray-800"
              : " font-regular text-gray-500";
          return (
            <View key={index} className="mr-2">
              <TouchableOpacity
                onPress={() => setIsActive(index)}
                className="flex justify-center items-center "
              >
                <Image
                  className={"h-20 w-20 rounded-full mb-1 " + btnCls}
                  source={value.image}
                />
                <Text className={"text-sm " + txtCls}>{value.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Categories;
