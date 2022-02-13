import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile" className="page-content">
        <form className="user-info-area">
          <div className="user-profile-image-area">
            <img src="user-profile-image" alt="" />
          </div>

          <label className="profile-label" htmlFor="profile-name">
            Nome de Usuario
            <input id="profile-name" className="profile-input" type="text" />
          </label>

          <label className="profile-label" htmlFor="profile-email">
            E-mail
            <input id="profile-email" className="profile-input" type="text" />
          </label>

          <label className="profile-label" htmlFor="profile-descritpion">
            Descrição
            <textarea
              id="profile-descritpion"
              className="profile-input profile-textarea"
            />
          </label>
          <Link to="profile/edit" className="profile-button">Editar Perfil</Link>
        </form>
      </div>
    );
  }
}
