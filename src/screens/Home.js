import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";
import { useFonts } from "expo-font";

const Home = () => {

  

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.darkGray,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {renderRecentlyadded()}
    </SafeAreaView>
  );
};

export default Home;
