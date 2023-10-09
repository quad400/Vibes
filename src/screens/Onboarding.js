import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const Onboarding = ({ navigation }) => {
  React.useEffect(() => {
    let timer = setTimeout(() => {
      navigation.replace("BottomNav");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={[COLORS.lightGray, COLORS.darkGray]}
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: COLORS.darkGray,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          marginBottom: 150,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {[...Array(3).keys()].map((index) => {
          return (
            <MotiView
            
              from={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              key={index}
              transition={{
                type: "timing",
                duration: 2000,
                easing: Easing.out(Easing.ease),
                delay: index * 400,
                loop: true
              }}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  width: 100,
                  height: 100,

                  borderRadius: 100,
                  backgroundColor: COLORS.primary,
                },
              ]}
            />
          );
        })}
        <FontAwesome5 name="music" size={80} color={COLORS.light} />
      </View>
      <Text
        style={{
          fontSize: 35,
          color: COLORS.light,
          textAlign: "center",
          ...FONTS.SemiBold,
        }}
      >
        Let's{" "}
        <Text
          style={{
            fontSize: 35,
            color: COLORS.primaryLight,
            ...FONTS.Bold,
          }}
        >
          Vibes
        </Text>{" "}
        to the music
      </Text>
    </LinearGradient>
  );
};

export default Onboarding;
