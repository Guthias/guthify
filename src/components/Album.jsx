import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Prototypes from 'prop-types';
import styled from 'styled-components';

const AlbumArea = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 15em;
  text-decoration: none;
`;

const AlbumImage = styled.div`
  width: 100%;
  height: 15em;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AlbumDetails = styled.div`
  background: #1e1e1e;
  height: 100%;
  padding: 0.8em;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 0.8em;

  h3 {
    color: white;
    font-size: 1em;
    margin: 0;
  }

  h4 {
    font-size: 1em;
    margin: 0;
    color: gray;
  }
`;

export default function Album({
  artistName, collectionId, collectionName, artworkUrl100,
}) {
  return (
    <AlbumArea to={`/album/${collectionId}`}>
      <AlbumImage>
        <img
          src={artworkUrl100.replace('100x100bb.jpg', '240x240bb.jpg')}
          alt={artistName}
        />
      </AlbumImage>

      <AlbumDetails>
        <h3>{ collectionName }</h3>
        <h4>{ artistName }</h4>
      </AlbumDetails>
    </AlbumArea>
  );
}

Album.propTypes = {
  artistName: Prototypes.string.isRequired,
  collectionId: Prototypes.number.isRequired,
  collectionName: Prototypes.string.isRequired,
  artworkUrl100: Prototypes.string.isRequired,
};
