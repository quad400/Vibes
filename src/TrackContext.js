import { createContext, useContext, useState } from "react";

export const TracksContext = createContext();

export default function TrackProvider({ children }) {
  const [tracks, setTracks] = useState([]);
  const [player, setPlayer] = useState(null);
  const [playbackObj, setPlaybackObj] = useState(null);
  const [statusObj, setStatusObj] = useState(null);

  return (
    <TracksContext.Provider
      value={{
        tracks,
        setTracks,
        player,
        setPlayer,
        playbackObj,
        setPlaybackObj,
        statusObj,
        setStatusObj,
      }}
    >
      {children}
    </TracksContext.Provider>
  );
}
