import React, { Component } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumList from '../components/AlbumList';

export default class Search extends Component {
  state = {
    searchValue: '',
    buttonDisabled: true,
    albums: [],
    isLoading: false,
    searched: '',
  }

  handdleChange = ({ target }) => {
    this.setState({
      searchValue: target.value,
      buttonDisabled: target.value.length < 2,
    });
  }

  searchAlbums = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { searchValue } = this.state;
    const response = await searchAlbumsAPI(searchValue);
    this.setState((prevState) => ({
      albums: response,
      isLoading: false,
      searched: prevState.searchValue,
      searchValue: '',
    }));
  }

  render() {
    const { searchValue, searched, buttonDisabled, albums, isLoading } = this.state;

    return (
      <main data-testid="page-search" className="page-content">
        <form>
          <div>
            <input
              type="text"
              value={ searchValue }
              onChange={ this.handdleChange }
              placeholder="Pesquisar por um artista"
            />
            <button
              type="submit"
              onClick={ this.searchAlbums }
              disabled={ buttonDisabled }
            >
              Search
            </button>
          </div>
        </form>
        { isLoading
          ? <p>Carregando...</p>
          : <AlbumList albums={ albums } search={ searched } />}
      </main>
    );
  }
}
