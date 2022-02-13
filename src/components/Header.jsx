import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  state = {
    user: {},
    loading: true,
  }

  async componentDidMount() {
    this.setState({ user: await getUser(), loading: false });
  }

  renderHeader = () => {
    const { user } = this.state;
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
            <img src={ user.image } className="header-user-image" alt="Foto de Perfil" />
          </div>
          <span data-testid="header-user-name">{ user.name }</span>
        </div>
      </header>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      loading ? <Loading /> : this.renderHeader()
    );
  }
}
