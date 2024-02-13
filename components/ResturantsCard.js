import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
function ResturantsCard({ value }) {

    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Resturant',{...value}) }>
      <View 
        style={{ shadowColor: themeColors.textSecondary(0.2), shadowRadius: 7 }}
        className="bg-white border border-gray-500 rounded-3xl mr-8 shadow-lg"
      >
        <Image
          source={value.image}
          style={{ height: 150, width: 270 }}
          className="rounded-t-3xl"
        />
        <View className="pl-2 pb-2 rounded-b-3xl">
          <Text className="text-lg font-bold">{value.name}</Text>
          <View className="flex-row items-center ">
            <StarIcon style={{ height: 4, width: 4 }} fill={"orange"} />
            <Text className="pl-1">{value.stars}</Text>
            <Text> ({value.reviews} reviews)</Text>
            <Text className=""> - {value.category}</Text>
          </View>
          <View className="flex-row items-center">
            <MapPinIcon />
            <Text>Near by - {value.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ResturantsCard;
