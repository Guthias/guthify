import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <div className="page-content">
          <form className="user-info-area">
            <div className="user-profile-image-area">
              <img src="user-profile-image" alt="" />
            </div>

            <label htmlFor="profile-name">
              Nome de Usuario
              <input id="profile-name" type="text" />
            </label>

            <label htmlFor="profile-email">
              E-mail
              <input id="profile-email" type="text" />
            </label>

            <label htmlFor="profile-descritpion">
              Descrição
              <textarea id="profile-descritpion" />
            </label>
            <Link to="profile/edit">
              <button type="button" className="profile-button">Editar Perfil</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
