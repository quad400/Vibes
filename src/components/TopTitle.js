import { View, Text, Pressable } from "react-native";
import React from "react";
import { COLORS,FONTS } from "../../constants";
import { Entypo } from "@expo/vector-icons";

const TopTitle = ({ title, onPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: COLORS.light,
          fontSize: 18,
          ...FONTS.SemiBold,
        }}
      >{title}
      </Text>
      <Pressable onPress={onPress}>
        <Entypo name="chevron-right" size={24} color={COLORS.light} />
      </Pressable>
    </View>
  );
};

export default TopTitle;
