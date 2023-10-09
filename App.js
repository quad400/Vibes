import "react-native-reanimated";
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigations/MainNavigation";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import TrackProvider from "./src/TrackContext";
import * as SplashScreen from "expo-splash-screen"

SplashScreen.hideAsync()

const App = () => {
  const [fontLoaded] = Font.useFonts({
    KarlaBold: require("./assets/fonts/Karla-Bold.ttf"),
    KarlaMedium: require("./assets/fonts/Karla-Medium.ttf"),
    KarlaRegular: require("./assets/fonts/Karla-Regular.ttf"),
    KarlaSemiBold: require("./assets/fonts/Karla-SemiBold.ttf"),
    KarlaLight: require("./assets/fonts/Karla-Light.ttf"),
  });

  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <TrackProvider>
          <MainNavigation />
        </TrackProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
