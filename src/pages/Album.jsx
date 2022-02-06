import React, { Component } from 'react';
import Prototypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import AlbumDetails from '../components/AlbumDetails';

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
        <div className="page-content">
          <div className="page-album">
            <AlbumDetails { ...albumDetails } />
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
