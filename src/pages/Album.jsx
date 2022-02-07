import React, { Component } from 'react';
import Prototypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import AlbumDetails from '../components/AlbumDetails';

export default class Album extends Component {
  state = {
    musicList: [],
    albumDetails: {},
    loading: true,
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getMusics(id).then((response) => {
      const results = [...response];
      const albumDetails = results.shift();
      const musicList = results;
      this.setState({ musicList, albumDetails, loading: false });
    });
  }

  render() {
    const { musicList, albumDetails, loading } = this.state;
    return (loading
      ? <p>Carregando...</p>
      : (
        <main data-testid="page-album" className="page-content">
          <div className="page-album">
            <AlbumDetails { ...albumDetails } />
            <div className="track-list">
              { musicList.map((track) => (
                <MusicCard key={ track.previewUrl } { ...track } />
              ))}
            </div>
          </div>
        </main>
      )
    );
  }
}

Album.propTypes = { match: Prototypes.shape.isRequired };
