import React, { Component } from 'react';
import { getUser, updateUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  state = {
    name: '',
    email: '',
    image: '',
    description: '',
    loading: true,
  }

  async componentDidMount() {
    const user = await getUser();
    this.setState({ ...user, loading: false });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name, email, image, description, loading } = this.state;

    return (
      loading ? <p>Carregando...</p>
        : (
          <div data-testid="page-profile" className="page-content">
            <form className="user-info-area">
              <div className="user-profile-image-area">
                <img
                  data-testid="profile-image"
                  className="user-profile-image"
                  src={ image }
                  alt=""
                />
              </div>

              <label className="profile-label" htmlFor="profile-name">
                Imagem
                <input
                  id="profile-name"
                  className="profile-input"
                  onInput={ this.handleChange }
                  type="text"
                  name="image"
                  value={ image }
                />
              </label>

              <label className="profile-label" htmlFor="profile-name">
                Nome de Usuario
                <input
                  id="profile-name"
                  className="profile-input"
                  onInput={ this.handleChange }
                  type="text"
                  name="name"
                  value={ name }
                />
              </label>

              <label className="profile-label" htmlFor="profile-email">
                E-mail
                <input
                  id="profile-email"
                  className="profile-input"
                  onInput={ this.handleChange }
                  type="text"
                  name="email"
                  value={ email }
                />
              </label>

              <label className="profile-label" htmlFor="profile-descritpion">
                Descrição
                <textarea
                  id="profile-descritpion"
                  className="profile-input profile-textarea"
                  onInput={ this.handleChange }
                  name="description"
                  value={ description }
                />
              </label>
              <button type="submit" className="profile-button">Salvar</button>
            </form>
          </div>)
    );
  }
}
