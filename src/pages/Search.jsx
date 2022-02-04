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

  disabledClass = () => {
    const { buttonDisabled } = this.state;
    return buttonDisabled && 'disabled';
  }

  render() {
    const { searchValue, buttonDisabled } = this.state;

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
