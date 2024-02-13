import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Navigation from "./Navigations/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
function App() {
 // return <Text className="text-red-600 text-center"> hey</Text>
  return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
  );
}

export default App;
