import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TracksContext } from "../TrackContext";
import { BlurView } from "expo-blur";
import { COLORS, FONTS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useSelector } from "react-redux";
import { BottomModal } from "react-native-modals";

const Player = () => {
  const { track } = useSelector((state) => state.music);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState();
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    playMusic();
  }, [track]);

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playMusic = async () => {
    if (!track?.preview_url) {
      return;
    }
    const { sound: newSound } = await Audio.Sound.createAsync({
      uri: track.preview_url,
    });
    setSound(newSound);

    newSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    await newSound.playAsync();
  };

  if (track === null) {
    return;
  }
  const playPauseMusic = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (!status.isLoaded) return;
    setIsPlaying(status.isPlaying);
  };

  return (
    <>
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
              source={{ uri: track?.album?.images[0].url }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 15,
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
              style={{
                marginRight: 10,
                fontSize: 14,
                color: COLORS.light,
                ...FONTS.Regular,
              }}
            >
              {track?.name}
            </Text>

            <Text
              style={{
                marginRight: 10,
                fontSize: 12,
                color: "gray",
                ...FONTS.Regular,
              }}
            >
              {track?.artists[0].name}
            </Text>
          </View>

          <TouchableOpacity onPress={() => playPauseMusic()}>
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={24}
              color={COLORS.light}
            />
          </TouchableOpacity>
        </View>
      </BlurView>
      <BottomModal visible >

      </BottomModal>
    </>
  );
};

export default Player;
