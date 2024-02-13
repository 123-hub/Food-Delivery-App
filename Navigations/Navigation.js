import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import SignupScreen from "../Screens/SignupScreen";
import LoginScreen from "../Screens/LoginScreen";
import SplashScreen from "../Screens/SplashScreen";
import ResturantScreen from "../Screens/ResturantScreen";
import CartScreen from "../Screens/CartScreen";
import DeliveryScreen from "../Screens/DeliveryScreen";
const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: true,
          title: "",
          headerTintColor: "black",
          headerStyle: { backgroundColor: "black" },
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Resturant"
        component={ResturantScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
