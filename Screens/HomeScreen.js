import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MagnifyingGlassIcon as MagnifyingGlass,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { AdjustmentsVerticalIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
function HomeScreen() {
  // const featured = {
  //   title: "Taj Hotel",
  //   description: "hot and spicy",
  //   resturants: [
  //     {
  //       title: "Papa Jones",
  //       image: require("../assets/resturantImage.jpg"),
  //       rating: 4,
  //       reviews: "4.4k",
  //       category: "Fast Food",
  //       address: "New york,NYC",
  //     },
  //     {
  //       title: "Papa Jones",
  //       image: require("../assets/resturantImage.jpg"),
  //       rating: 4,
  //       reviews: "4.4k",
  //       category: "Fast Food",
  //     },
  //     {
  //       title: "Papa Jones",
  //       image: require("../assets/resturantImage.jpg"),
  //       rating: 4,
  //       reviews: "4.4k",
  //       category: "Fast Food",
  //     },
  //     {
  //       title: "Papa Jones",
  //       image: require("../assets/resturantImage.jpg"),
  //       rating: 4,
  //       reviews: "4.4k",
  //       category: "Fast Food",
  //     },
  //   ],
  // };
  const featured = [
    {
      id: 1,
      title: "Hot and Spicy",
      description: "soft and tender fried chicken",
      restaurants: [
        {
          id: 1,
          name: "Papa Johns",
          image: require("../assets/resturantImage.jpg"),
          description: "Hot and spicy pizzas",
          lng: -85.5324269,
          lat: 38.2145602,
          address: "434 second street",
          stars: 4,
          reviews: "4.4k",
          category: "Fast Food",
          dishes: [
            {
              id: 1,
              name: "Burger",
              description: "Chicken Burger",
              price: 10,
              image: require("../assets/burger.jpg"),
            },
            {
              id: 2,
              name: "noodles",
              description: "schezwan noodles",
              price: 10,
              image: require("../assets/noodles.jpg"),
            },
            {
              id: 3,
              name: "Rice Bowl",
              description: "Plain rice",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
          ],
        },
        {
          id: 2,
          name: "KFC",
          image: require("../assets/kfc.jpg"),
          description: "Hot and spicy chicken",
          lng: -85.5324269,
          lat: 38.2145602,
          address: "434 second street",
          stars: 4.3,
          reviews: "15k",
          category: "Fast Food",
          dishes: [
            {
              id: 1,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
            {
              id: 2,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
            {
              id: 3,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
          ],
        },
        {
          id: 3,
          name: "Oats Factory",
          image: require("../assets/oatsfactory.jpg"),
          description: "Hot and spicy pizzas",
          lng: -85.5324269,
          lat: 38.2145602,
          address: "434 second street",
          stars: 4,
          reviews: "4.4k",
          category: "Fast Food",
          dishes: [
            {
              id: 1,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
            {
              id: 2,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
            {
              id: 3,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Sweets",
      description: "celebrate this festival",
      restaurants: [
        {
          id: 1,
          name: "Sweet's palace",
          image: require("../assets/chancham.jpg"),
          description: "",
          lng: -85.5324269,
          lat: 38.2145602,
          address: "438 second street",
          stars: 4,
          reviews: "3.6k",
          category: "Sweets",
          dishes: [
            {
              id: 1,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/pizza2.png"),
            },
            {
              id: 2,
              name: "noodles",
              description: "schezwan noodles",
              price: 10,
              image: require("../assets/noodles.jpg"),
            },
            {
              id: 3,
              name: "Rice Bowl",
              description: "Plain rice",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
          ],
        },
        {
          id: 2,
          name: "Donut factory",
          image: require("../assets/donut.jpg"),
          description: "Hot and spicy chicken",
          lng: -85.5324269,
          lat: 38.2145602,
          address: "434 second street",
          stars: 4.3,
          reviews: "15k",
          category: "Fast Food",
          dishes: [
            {
              id: 1,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
            {
              id: 2,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
            {
              id: 3,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
          ],
        },
        {
          id: 3,
          name: "Oats Factory",
          image: require("../assets/oatsfactory.jpg"),
          description: "Hot and spicy pizzas",
          lng: -85.5324269,
          lat: 38.2145602,
          address: "434 second street",
          stars: 4,
          reviews: "4.4k",
          category: "Fast Food",
          dishes: [
            {
              id: 1,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
            {
              id: 2,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
            {
              id: 3,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Hot and Spicy",
      description: "soft and tender fried chicken",
      restaurants: [
        {
          id: 1,
          name: "Papa Johns",
          image: require("../assets/resturantImage.jpg"),
          description: "Hot and spicy pizzas",
          lng: -85.5324269,
          lat: 38.2145602,
          address: "434 second street",
          stars: 4,
          reviews: "4.4k",
          category: "Fast Food",
          dishes: [
            {
              id: 1,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/pizza2.png"),
            },
            {
              id: 2,
              name: "noodles",
              description: "schezwan noodles",
              price: 10,
              image: require("../assets/noodles.jpg"),
            },
            {
              id: 3,
              name: "Rice Bowl",
              description: "Plain rice",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
          ],
        },
        {
          id: 2,
          name: "KFC",
          image: require("../assets/kfc.jpg"),
          description: "Hot and spicy chicken",
          lng: -85.5324269,
          lat: 38.2145602,
          address: "434 second street",
          stars: 4.3,
          reviews: "15k",
          category: "Fast Food",
          dishes: [
            {
              id: 1,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
            {
              id: 2,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
            {
              id: 3,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
          ],
        },
        {
          id: 3,
          name: "Oats Factory",
          image: require("../assets/oatsfactory.jpg"),
          description: "Hot and spicy pizzas",
          lng: -85.5324269,
          lat: 38.2145602,
          address: "434 second street",
          stars: 4,
          reviews: "4.4k",
          category: "Fast Food",
          dishes: [
            {
              id: 1,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
            {
              id: 2,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
            {
              id: 3,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../assets/riceBowl.jpeg"),
            },
          ],
        },
      ],
    },
  ];
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* status bar */}
      <View className="flex-row space-x-2 px-4 mb-2">
        <View className="flex-row items-center flex-1 p-3 border border-gray-600 rounded-full">
          <MagnifyingGlass color={"black"} />
          <TextInput
            placeholder="Enter location"
            className="text-MD pl-4 flex-1"
          />
          <View className="flex-row items-center border-l border-gray-300 pl-1">
            <MapPinIcon />
            <Text>New york, NYC</Text>
          </View>
        </View>
        <View
          className=" rounded-full h-12 w-12 flex justify-center items-center"
          style={{ backgroundColor: themeColors.textSecondary(1) }}
        >
          <TouchableOpacity className="">
            <AdjustmentsVerticalIcon color={"white"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* categories */}
      <ScrollView
        showsVerticalScrollIndicator="false"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <View className="ml-4 overflow-x-visible">
          <Categories />
        </View>

        {/*featured row*/}
        <View className="mt-5 pl-4 ">
          {featured.map((value, index) => {
            return (
              <FeaturedRow
                key={index}
                title={value.title}
                description={value.description}
                resturants={value.restaurants}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
