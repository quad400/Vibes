import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";

const Authentication = ({ navigation }) => {
  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "957a3f22f04a4433850a1d56529230ff",
      scopes: ["user-read-email", "playlist-modify-public"],
      // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: makeRedirectUri({
        scheme: "vibes",
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      console.log(code)
    }
  }, [response]);

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
          alignItems: "center",
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
                loop: true,
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

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          width: "100%",
        }}
      >
        <Pressable
          disabled={!request}
          onPress={() => promptAsync()}
          style={{
            height: 40,
            width: "95%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: COLORS.primary,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: COLORS.light,
              ...FONTS.Medium,
            }}
          >
            Continue with Spotify
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default Authentication;
