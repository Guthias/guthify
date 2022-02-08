import React, { Component } from 'react';
import Prototypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import AlbumDetails from '../components/AlbumDetails';
import TrackList from '../components/TrackList';

export default class Album extends Component {
  state = {
    musicList: [],
    albumDetails: {},
    loading: true,
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const response = await getMusics(id);
    const results = [...response];
    const albumDetails = results.shift();
    const musicList = results;
    this.setState({
      musicList,
      albumDetails,
      loading: false });
  }

  render() {
    const { musicList, albumDetails, loading } = this.state;
    return (loading
      ? <p>Carregando...</p>
      : (
        <main data-testid="page-album" className="page-content">
          <div className="page-album">
            <AlbumDetails { ...albumDetails } />
            <TrackList musicList={ musicList } />
          </div>
        </main>
      )
    );
  }
}

Album.propTypes = { match: Prototypes.shape({
  params: Prototypes.shape({
    id: Prototypes.string.isRequired,
  }).isRequired,
}).isRequired };
