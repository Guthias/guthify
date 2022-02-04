import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <main className="page-content">
          <form>
            <div className="search-area">
              <input
                type="text"
                className="search-input"
                data-testid="search-artist-input"
                placeHolder="Pesquisar por um artista"
              />
              <button type="submit" className="button-input">Search</button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}
