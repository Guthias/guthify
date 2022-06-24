import React from 'react';
import styled from 'styled-components';
import TrackDetails from './TrackDetails';
import TrackPlayer from './TrackPlayer';
import PlayerButtons from './PlayerButtons';

const MusicPlayerArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #1c1c1c;
  background-image: linear-gradient(0deg, #000000, #1c1c1c);
  padding: 1em;
  display: flex;
`;

export default function MusicPlayer() {
  return (
    <MusicPlayerArea>
      <TrackDetails />
      <TrackPlayer />
      <PlayerButtons />
    </MusicPlayerArea>
  );
}
