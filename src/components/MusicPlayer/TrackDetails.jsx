import React from 'react';
import styled from 'styled-components';
import useMusicPlayer from '../../hooks/useMusicPlayer';

const TrackDetailsArea = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 700;

  .thumbnail-area {
    width: 40px;
    margin-right: 1em;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .track-info {
    display: flex;
    flex-direction: column;
    
    .artist-name {
      color: gray;
      font-size: 0.8em;
    }

    .track-name {
      font-size: 1em;
      margin: 0;
    }
  }
`;

export default function TrackDetails() {
  const { currentTrack } = useMusicPlayer();
  return (
    <TrackDetailsArea>
      <div className="thumbnail-area">
        <img src={currentTrack.thumbnail} alt="Capa do Album" />
      </div>
      <div className="track-info">
        <span className="artist-name">{currentTrack.artist}</span>
        <span className="track-name">{currentTrack.name}</span>
      </div>
    </TrackDetailsArea>
  );
}
