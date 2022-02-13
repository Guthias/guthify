import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

export default class Profile extends Component {
  state = {
    user: {},
    loading: true,
  }

  async componentDidMount() {
    this.setState({ user: await getUser(), loading: false });
  }

  render() {
    const { user, loading } = this.state;

    return (
      loading ? <p>Carregando...</p>
        : (
          <div data-testid="page-profile" className="page-content">
            <form className="user-info-area">
              <div className="user-profile-image-area">
                <img data-testid="profile-image" src={ user.image } alt="" />
              </div>

              <label className="profile-label" htmlFor="profile-name">
                Nome de Usuario
                <input
                  id="profile-name"
                  value={ user.name }
                  className="profile-input"
                  type="text"
                  disabled
                />
              </label>

              <label className="profile-label" htmlFor="profile-email">
                E-mail
                <input
                  id="profile-email"
                  className="profile-input"
                  type="text"
                  value={ user.email }
                  disabled
                />
              </label>

              <label className="profile-label" htmlFor="profile-descritpion">
                Descrição
                <textarea
                  id="profile-descritpion"
                  value={ user.description }
                  disabled
                  className="profile-input profile-textarea"
                />
              </label>
              <Link to="profile/edit" className="profile-button">Editar perfil</Link>
            </form>
          </div>)
    );
  }
}
