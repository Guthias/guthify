import React, { Component } from 'react';
import Prototypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Track from '../components/Track';

export default class Album extends Component {
  state = {
    musicList: [],
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const musicList = await getMusics(id);
    this.setState({ musicList });
  }

  render() {
    const { musicList } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div className="page-content">
          { musicList.map(({ previewUrl }) => (
            <Track key={ previewUrl } previewUrl={ previewUrl } />
          ))}
        </div>
      </div>
    );
  }
}

Album.propTypes = { match: Prototypes.shape.isRequired };
