import React, { Component } from 'react';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';

export default class Album extends Component {
  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const musicList = await getMusics(id);
    console.log(musicList);
  }

  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <div className="page-content" />
      </div>
    );
  }
}
