import React, { Component } from 'react';
import Prototypes from 'prop-types';
import Album from './Album';

export default class AlbumList extends Component {
  render() {
    const { albums, search } = this.props;
    return (
      albums.length === 0 ? <p>Nenhum álbum foi encontrado</p>
        : (
          <>
            <h2>{`Resultado de álbuns de: ${search}`}</h2>
            <div className="album-list">
              { albums.map((album) => <Album key={ album.collectionId } { ...album } />) }
            </div>
          </>
        )
    );
  }
}

AlbumList.propTypes = {
  search: Prototypes.string.isRequired,
  albums: Prototypes.arrayOf(Prototypes.shape({
    artistName: Prototypes.string.isRequired,
    collectionId: Prototypes.number.isRequired,
    collectionName: Prototypes.string.isRequired,
    artworkUrl100: Prototypes.string.isRequired,
  })).isRequired,
};
