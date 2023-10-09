import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TracksContext } from "../TrackContext";
import { BlurView } from "expo-blur";
import { COLORS, FONTS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

const Player = () => {
  const { statusObj, setStatusObj, player } = useContext(TracksContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState();


  useEffect(()=> {
    playMusic()
  },[player])

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playMusic = async () => {
    console.log("first play");
    if (!player?.uri) {
      return;
    }
    const { sound: newSound } = await Audio.Sound.createAsync({
      uri: player.uri,
    });
    setSound(newSound);

    if (sound) {
      await sound.unloadAsync();
    }
    await newSound.playAsync();
    newSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

    if (statusObj === null) return;

  };
  if (!player) {
    return null;
  
  }
    const pauseMusic = async () => {
    
    // handle pause music
    if (!sound) return;
    
    if (isPlaying) {
      console.log("pause")
      await sound.pauseAsync();
    } else {
      console.log("play")
      await sound.playAsync();
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (!status.isLoaded) return;
    setIsPlaying(status.isPlaying);
    setStatusObj(status);
  };

  return (
    <BlurView
      intensity={30}
      tint="dark"
      style={{
        backgroundColor: "transparent",
        position: "absolute",
        bottom: 70,
        height: 40,
        width: "100%",
      }}
    >
      <View
        style={{
          height: 50,
          backgroundColor: COLORS.primaryDark,
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
            backgroundColor: COLORS.light,
          }}
        >
          <Image
            source={require("../../assets/sound.png")}
            resizeMode="contain"
            style={{
              tintColor: COLORS.primary,
              height: 24,
              width: 24,
            }}
          />
        </View>
        <View
          style={{
            width: "70%",
          }}
        >
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              marginRight: 10,
              fontSize: 12,
              color: COLORS.light,
              ...FONTS.Regular,
            }}
          >
            {player?.filename.split(".")[0]}
          </Text>
        </View>
        <View>
            <Ionicons onPress={pauseMusic} name={isPlaying ? "pause" : "play"} size={24} color={COLORS.light} />
        </View>
      </View>
    </BlurView>
  );
};

export default Player;
