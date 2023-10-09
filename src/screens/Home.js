import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../../constants";
import { TracksContext } from "../TrackContext";
import { BlurView } from "expo-blur";
import { Audio } from "expo-av";


const Player = () => {
  const [sound, setSound] = React.useState();


};

const Home = () => {
  const {
    tracks,
    setPlayer
  } = useContext(TracksContext);
  
  function renderLocalMusic() {
    return (
      <ScrollView
        style={{
          marginTop: 20,
          paddingHorizontal: 10,
        }}
      >
        {tracks.map((item) => {
          return (
            <Pressable
              onPress={() => setPlayer(item)}
              key={item.id}
              style={{
                height: 50,
                backgroundColor: COLORS.lightGray,
                elevation: 2,
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
                padding: 10,
              }}
            >
              <View
                style={{
                  height: 40,
                  width: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  marginRight: 20,
                  backgroundColor: COLORS.primary,
                }}
              >
                <FontAwesome5 name="music" size={20} color={COLORS.light} />
              </View>
              <Text
                style={{
                  marginRight: 10,
                  fontSize: 12,
                  color: COLORS.light,
                  ...FONTS.Regular,
                }}
              >
                {item.filename.split(".")[0]}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    );
  }

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.darkGray,
      }}
    >
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: COLORS.light,
            fontSize: 18,
            ...FONTS.SemiBold,
          }}
        >
          Local Music
        </Text>
      </View>

      {tracks.length >= 1 ? (
        renderLocalMusic()
      ) : (
        <ActivityIndicator color={COLORS.primary} size="large" />
      )}
  
        
    </SafeAreaView>
  );
};

export default Home;
