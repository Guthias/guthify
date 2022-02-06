import React, { Component } from 'react';
import Prototypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

export default class Album extends Component {
  state = {
    musicList: [],
    albumDetails: {},
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const response = await getMusics(id);
    const albumDetails = response.shift();
    const musicList = response;
    this.setState({ musicList, albumDetails });
  }

  render() {
    const { musicList, albumDetails } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div className="page-content">
          <div className="page-album">
            <div className="album-detail">
              <div className="album-detail-image">
                <img src={ albumDetails.artworkUrl100 } alt="" />
              </div>
              <div className="album-detail-status">
                <h3>{ albumDetails.collectionName }</h3>
                <h4>{ albumDetails.artistName }</h4>
                <span>{ `${albumDetails.trackCount} Songs` }</span>
              </div>
            </div>

            <div className="track-list">
              { musicList.map((track) => (
                <MusicCard key={ track.previewUrl } { ...track } />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = { match: Prototypes.shape.isRequired };
