import React, { Component } from 'react';

export default class Track extends Component {
  render() {
    const { previewUrl } = this.props;
    return (
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
    );
  }
}
