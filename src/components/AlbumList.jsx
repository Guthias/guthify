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

const SearchResult = styled.h2`
  font-weight: 700;
  text-align: center;
`;

const NotFound = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }
`;

export default function AlbumList({ albums }) {
  const { searchedValue } = useSearch();

  return (
    albums.length === 0
      ? (
        <NotFound>
          <h2>{'We couldn\'t find any results'}</h2>
          <img src="https://media3.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif?cid=ecf05e470yp202bvs9yjls58iia8nke6m6cpkhr0q3039atx&rid=giphy.gif&ct=g" alt="" />
        </NotFound>
      ) : (
        <>
          <SearchResult>{`Resultado de álbuns de: ${searchedValue}`}</SearchResult>
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
