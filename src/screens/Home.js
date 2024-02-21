import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  ActivityIndicator,
  TextInput,
  FlatList,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../../constants";
import { TracksContext } from "../TrackContext";
import { BlurView } from "expo-blur";
import { Audio } from "expo-av";
import { tracks } from "../../constants/data";
import { track } from "../context/slicers";
import { useDispatch } from "react-redux";

const MusicItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => dispatch(track(item))}
      key={item.id}
      style={{
        height: 60,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
        padding: 10,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginRight: 15,
        }}
      >
        <Image
          source={{ uri: item?.album?.images[0].url }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 15,
          }}
        />
      </View>
      <View
        style={{
          width: "80%",
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
          {item.name}
        </Text>

        <Text
          style={{
            marginRight: 10,
            fontSize: 12,
            color: "gray",
            ...FONTS.Regular,
          }}
        >
          {item.artists[0].name}
        </Text>
      </View>
    </Pressable>
  );
};

const Home = () => {
  const [search, setSearch] = useState("");

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
        <View
          style={{
            paddingHorizontal: 20,
            borderRadius: 15,
            paddingVertical: 10,
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 20,
            backgroundColor: COLORS.lightGray,
          }}
        >
          <AntDesign name="search1" size={24} color="white" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search music..."
            style={{
              width: "90%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginLeft: 15,
              color: COLORS.light,
            }}
            placeholderTextColor="gray"
            cursorColor={COLORS.light}
          />
        </View>
      </View>

      {tracks.length >= 1 ? (
        <FlatList
          data={tracks}
          keyExtractor={(item) => item?.id}
          renderItem={({ item, index }) => (
            <MusicItem key={item.id} item={item} />
          )}
        />
      ) : (
        <ActivityIndicator color={COLORS.primary} size="large" />
      )}
    </SafeAreaView>
  );
};

export default Home;
