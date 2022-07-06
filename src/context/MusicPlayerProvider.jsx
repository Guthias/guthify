import { node } from 'prop-types';
import React, { createContext, useState } from 'react';

export const MusicPlayerContext = createContext();

export default function MusicPlayerProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState({
    id: 0,
    url: '',
    name: '',
    artist: '',
    thumbnail: '',
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MusicPlayerContext.Provider value={{ currentTrack, setCurrentTrack }}>
      { children }
    </MusicPlayerContext.Provider>
  );
}

MusicPlayerProvider.propTypes = {
  children: node.isRequired,
};
