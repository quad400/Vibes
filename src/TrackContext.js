import { createContext, useContext, useState } from "react";

export const TracksContext = createContext();

export default function TrackProvider({ children }) {
  const [track, setTrack] = useState(null);
  const [player, setPlayer] = useState(null);
  const [playbackObj, setPlaybackObj] = useState(null);
  const [statusObj, setStatusObj] = useState(null);

  return (
    <TracksContext.Provider
      value={{
        track,
        setTrack,
      }}
    >
      {children}
    </TracksContext.Provider>
  );
}
