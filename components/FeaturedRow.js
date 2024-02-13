import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ResturantsCard from "./ResturantsCard";
import { themeColors } from "../theme";
import { ThemeProvider } from "@react-navigation/native";

function FeaturedRow({ title, resturants, description }) {
  return (
    <View className="mb-1">
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex justify-start items-start">
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="font-regular text-sm ">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: themeColors.textSecondary(1)}} className="font-bold mr-4">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator="false" contentContainerStyle={{
        marginBottom:20
      }}>
        {
            resturants.map((value,index)=>{
                return <ResturantsCard key={index} value={value}/>
            })
        }
     
      </ScrollView>
    </View>
  );
}

export default FeaturedRow;
