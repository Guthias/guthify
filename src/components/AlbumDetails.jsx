import React from 'react';
import Prototypes from 'prop-types';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

const AlbumArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 2em 4em;

  .image-area {
    width: 200px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .album-details {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 4em;
    width: 100%;

    .album-info {
      h2 {
        font-size: 1.5em;
        margin: 0;
        margin-bottom: 10px;
      }
  
      span {
        font-weight: bold;
        color: lightgray;
      }
    }

    button {
      padding: 0.75em 1em;
      color: black;
      background-color: white;
      border: none;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
      transition: ease-in-out 0.3s all;

      svg {
        margin-right: 0.5em;
      }

      :hover {
        background-color: #147fdd;
        color: white;
      }
    }
  }
`;

export default function AlbumDetails({ albumDetails }) {
  const {
    artworkUrl100, collectionName, artistName, trackCount,
  } = albumDetails;

  return (
    <AlbumArea>
      <div className="image-area">
        <img src={artworkUrl100.replace('100x100bb', '300x300bb')} alt="" />
      </div>

      <div className="album-details">
        <div className="album-info">
          <h2>{ collectionName }</h2>
          <span>{ `${artistName} - ${trackCount} Songs` }</span>
        </div>

        <div className="button-area">
          <button type="button">
            <FaPlay />
            Play
          </button>
        </div>
      </div>
    </AlbumArea>
  );
}

AlbumDetails.propTypes = {
  albumDetails: Prototypes.shape({
    artistName: Prototypes.string.isRequired,
    trackCount: Prototypes.number.isRequired,
    collectionName: Prototypes.string.isRequired,
    artworkUrl100: Prototypes.string.isRequired,
  }).isRequired,
};
