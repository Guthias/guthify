import React, { Component } from 'react';

export default class ProfileEdit extends Component {
  render() {
    const loading = false;
    return (
      loading ? <p>Carregando...</p>
        : (
          <div data-testid="page-profile" className="page-content">
            <form className="user-info-area">
              <div className="user-profile-image-area">
                <img data-testid="profile-image" alt="" />
              </div>

              <label className="profile-label" htmlFor="profile-name">
                Nome de Usuario
                <input
                  id="profile-name"
                  className="profile-input"
                  type="text"
                />
              </label>

              <label className="profile-label" htmlFor="profile-email">
                E-mail
                <input
                  id="profile-email"
                  className="profile-input"
                  type="text"
                />
              </label>

              <label className="profile-label" htmlFor="profile-descritpion">
                Descrição
                <textarea
                  id="profile-descritpion"
                  className="profile-input profile-textarea"
                />
              </label>
              <button type="submit" className="profile-button">Salvar</button>
            </form>
          </div>)
    );
  }
}
