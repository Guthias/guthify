import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header data-testid="header-component">
        <div className="header-title-area">Guthify</div>
        <nav className="header-nav">Area de Links</nav>
        <nav className="header-user">Nome do usuario</nav>
      </header>
    );
  }
}
