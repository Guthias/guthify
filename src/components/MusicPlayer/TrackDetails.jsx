import React from 'react';
import styled from 'styled-components';

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
  return (
    <TrackDetailsArea>
      <div className="thumbnail-area">
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/09/01/16/090116af-770e-23da-21a9-6bd30782eda5/00843930013562.rgb.jpg/60x60bb.jpg" alt="Capa do Album" />
      </div>
      <div className="track-info">
        <span className="artist-name">Taylor Swift</span>
        <span className="track-name">Shake It Off</span>
      </div>
    </TrackDetailsArea>
  );
}
