import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import { TracksContext } from "../TrackContext";
import React, { useContext } from "react";
import BottomNav from "./BottomNav";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const { setTracks } = useContext(TracksContext);

  const getAudioFiles = async () => {
    
      let media = await MediaLibrary.getAssetsAsync({
        mediaType: "audio",
      });
      media = await MediaLibrary.getAssetsAsync({
        mediaType: "audio",
        first: media.totalCount
      })

      setTracks(media.assets);
   
  };

  const permissionAlert = () => {
    Alert.alert("permission required", "this app needs to read audio files", [
      {
        text: "Allow",
        onPress: () => getPermission(),
      },
      {
        text: "Cancel",
        onPress: () => permissionAlert(),
      },
    ]);
  };

  const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();

    if (permission.granted) {
      getAudioFiles();
    }
    if (!permission.granted && permission.canAskAgain) {
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();
      if (status === "denied" && canAskAgain) {
        permissionAlert();
      }
      if (status === "granted") {
        getAudioFiles();
      }
      if (status === "denied" && !canAskAgain) {
        Alert.alert("This app has no access to your audios");
      }
    }
  };

  React.useEffect(() => {
    getPermission();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
