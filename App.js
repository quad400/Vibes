import "react-native-reanimated";
import "react-native-gesture-handler";
import * as React from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/navigations/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./src/context/store";
import { StatusBar } from "expo-status-bar";

SplashScreen.hideAsync();

const Stack = createNativeStackNavigator()

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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainNavigation" component={MainNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
