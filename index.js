import { registerRootComponent } from 'expo';
import TrackPlayer from 'react-native-track-player';
import { AppRegistry } from "react-native";
import App from './App';

registerRootComponent(App);

AppRegistry.registerComponent("vibes", () => App);

TrackPlayer.registerPlaybackService(() => require('./service'));