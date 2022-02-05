import React, { Component } from 'react';
import Prototypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';

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
            <audio
              key={ previewUrl }
              data-testid="audio-component"
              src={ previewUrl }
              controls
            >
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
            </audio>
          ))}
        </div>
      </div>
    );
  }
}

Album.propTypes = { match: Prototypes.shape.isRequired };
