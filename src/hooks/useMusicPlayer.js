import { useContext } from 'react';
import { MusicPlayerContext } from '../context/MusicPlayerProvider';

export default function useMusicPlayer() {
  const { currentTrack, setCurrentTrack } = useContext(MusicPlayerContext);

  const playNewTrack = (id, url, name, artist, thumbnail) => {
    setCurrentTrack({
      id, url, name, artist, thumbnail,
    });
  };

  return { currentTrack, playNewTrack };
}
