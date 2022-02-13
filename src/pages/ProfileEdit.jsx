import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getUser, updateUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  state = {
    name: '',
    email: '',
    image: '',
    description: '',
    loading: true,
    redirect: false,
  }

  async componentDidMount() {
    const user = await getUser();
    this.setState({ ...user, loading: false });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  saveInfo = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const { name, email, image, description } = this.state;
    await updateUser({ name, email, image, description });
    this.setState({ redirect: true });
  }

  renderForm = () => {
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

              <label className="profile-label" htmlFor="profile-image">
                Imagem
                <input
                  id="profile-image"
                  className="profile-input"
                  onInput={ this.handleChange }
                  data-testid="edit-input-image"
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
                  data-testid="edit-input-name"
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
                  data-testid="edit-input-email"
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
                  data-testid="edit-input-description"
                  onInput={ this.handleChange }
                  name="description"
                  value={ description }
                />
              </label>
              <button
                type="submit"
                data-testid="edit-button-save"
                className="profile-button"
                onClick={ this.saveInfo }
              >
                Salvar
              </button>
            </form>
          </div>)
    );
  }

  render() {
    const { redirect } = this.state;
    return (
      redirect ? <Redirect to="/profile" /> : this.renderForm()
    );
  }
}
