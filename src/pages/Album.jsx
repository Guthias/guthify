import React, { Component } from 'react';
import Prototypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Track from '../components/Track';

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
    const { musicList } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div className="page-content">
          <div className="track-list">
            { musicList.map((track) => (
              <Track key={ track.previewUrl } { ...track } />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = { match: Prototypes.shape.isRequired };
