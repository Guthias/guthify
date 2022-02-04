import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Album from '../components/Album';

export default class Search extends Component {
  state = {
    searchValue: '',
    buttonDisabled: true,
    albums: [],
  }

  handdleChange = ({ target }) => {
    this.setState({
      searchValue: target.value,
      buttonDisabled: target.value.length < 2,
    });
  }

  disabledClass = () => {
    const { buttonDisabled } = this.state;
    return buttonDisabled && 'disabled';
  }

  searchAlbums = async (event) => {
    event.preventDefault();
    const { searchValue } = this.state;
    const response = await searchAlbumsAPI(searchValue);
    this.setState({ albums: response });
  }

  render() {
    const { searchValue, buttonDisabled, albums } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <main className="page-content">
          <form>
            <div className={ `search-area ${this.disabledClass()}` }>
              <input
                type="text"
                className="search-input"
                value={ searchValue }
                onChange={ this.handdleChange }
                data-testid="search-artist-input"
                placeholder="Pesquisar por um artista"
              />
              <button
                type="submit"
                data-testid="search-artist-button"
                onClick={ this.searchAlbums }
                className="button-input"
                disabled={ buttonDisabled }
              >
                Search
              </button>
            </div>
          </form>

          <div className="album-list">
            { albums.map((album) => <Album key={ album.collectionId } { ...album } />) }
          </div>
        </main>
      </div>
    );
  }
}
