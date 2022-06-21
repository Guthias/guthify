import React from 'react';
import Prototypes from 'prop-types';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';

const Track = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  align-items: center;
  padding: 0.25em 0;
  
  > * {
    width: 100%;
    text-align: center;
  }

  .button-area {
    opacity: ${({ favorited }) => (favorited ? '1' : '0')};
    transition: ease-in-out 0.2s all;

    button {
      background-color: transparent;
      padding: 0;
      font-size: 1.5em;
      cursor: pointer;
      color: white;
    }
  }

  :hover .button-area {
    opacity: 1;
  }
`;

export default function MusicCard({ trackDetails, toggleFavorite, isFavorited }) {
  const {
    previewUrl,
    trackName,
    artworkUrl60,
    artistName,
    collectionName,
    trackId,
  } = trackDetails;

  return (
    <Track favorited={isFavorited}>
      <div>
        <img src={artworkUrl60} alt="" />
      </div>
      <span>{ trackName }</span>
      <span>{ artistName }</span>
      <span>{ collectionName }</span>

      <div className="button-area">
        <button type="button" onClick={() => toggleFavorite(trackId)}>
          {
            isFavorited ? <AiFillHeart /> : <AiOutlineHeart />
          }
        </button>
      </div>

      <audio
        key={previewUrl}
        data-testid="audio-component"
        src={previewUrl}
        controls
      >
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
      </audio>
    </Track>
  );
}

MusicCard.propTypes = {
  trackDetails: Prototypes.shape({
    previewUrl: Prototypes.string.isRequired,
    trackName: Prototypes.string.isRequired,
    artworkUrl60: Prototypes.string.isRequired,
    artistName: Prototypes.string.isRequired,
    collectionName: Prototypes.string.isRequired,
    trackId: Prototypes.number.isRequired,
  }).isRequired,
  toggleFavorite: Prototypes.func.isRequired,
  isFavorited: Prototypes.bool.isRequired,
};
