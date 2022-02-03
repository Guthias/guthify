import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header data-testid="header-component" className="header">
        <div className="header-title-area">Guthify</div>
        <nav className="header-nav">
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </nav>
        <div className="header-user-area">
          <div className="header-user-image-area">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="header-user-image" alt="Foto de Perfil" />
          </div>
          <span data-testid="header-user-name">usuario</span>
        </div>
      </header>
    );
  }
}
