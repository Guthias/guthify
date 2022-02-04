import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  state = {
    searchValue: '',
    buttonDisabled: true,
  }

  handdleChange = ({ target }) => {
    this.setState({
      searchValue: target.value,
      buttonDisabled: target.value < 2,
    });
  }

  render() {
    const { searchValue, buttonDisabled } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <main className="page-content">
          <form>
            <div className="search-area">
              <input
                type="text"
                className="search-input"
                value={ searchValue }
                onChange={ this.handdleChange }
                data-testid="search-artist-input"
                placeHolder="Pesquisar por um artista"
              />
              <button
                type="submit"
                className="button-input"
                disabled={ buttonDisabled }
              >
                Search
              </button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}
