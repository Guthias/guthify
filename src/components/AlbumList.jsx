import React from 'react';
import Prototypes from 'prop-types';
import styled from 'styled-components';
import Album from './Album';
import useSearch from '../hooks/useSearch';

const AlbumListArea = styled.div`
  width: 80%;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
`;

export default function AlbumList({ albums }) {
  const { searchedValue } = useSearch();

  return (
    albums.length === 0 ? <p>Nenhum álbum foi encontrado</p>
      : (
        <>
          <h2 className="album-searched">{`Resultado de álbuns de: ${searchedValue}`}</h2>
          <AlbumListArea>
            { albums.map((album) => <Album key={album.collectionId} albumDetails={album} />) }
          </AlbumListArea>
        </>
      )
  );
}

AlbumList.propTypes = {
  albums: Prototypes.arrayOf(Prototypes.shape({
    artistName: Prototypes.string.isRequired,
    collectionId: Prototypes.number.isRequired,
    collectionName: Prototypes.string.isRequired,
    artworkUrl100: Prototypes.string.isRequired,
  })).isRequired,
};
