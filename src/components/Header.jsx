import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header data-testid="header-component">
        <div className="header-title-area">Guthify</div>
        <nav className="header-nav">
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </nav>
        <div className="header-user-area">Olá, usuario </div>
      </header>
    );
  }
}
