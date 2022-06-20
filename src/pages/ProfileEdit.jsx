import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, updateUser } from '../services/userAPI';

export default function ProfileEdit() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    image: '',
    description: '',
  });
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUser();
      setUser(userInfo);
      setLoading(false);
    };
    fetchUserInfo();
  }, []);

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const saveInfo = async (event) => {
    event.preventDefault();
    setLoading(true);
    await updateUser(user);
    history.push('/profile');
  };

  const allValidInputs = () => {
    const {
      name, email, image, description,
    } = user;
    const validEmail = email.match(/\S+@\S+\.\S+/g);
    const notEmpty = name && image && description;
    return !(notEmpty && validEmail);
  };

  const {
    name, email, image, description,
  } = user;

  return (
    loading ? <p>Carregando...</p>
      : (
        <div data-testid="page-profile-edit" className="page-content">
          <form className="user-info-area">
            <div className="user-profile-image-area">
              <img
                className="user-profile-image"
                src={image}
                alt=""
              />
            </div>

            <label className="profile-label" htmlFor="profile-image">
              Imagem
              <input
                id="profile-image"
                className="profile-input"
                onInput={handleChange}
                type="text"
                name="image"
                value={image}
              />
            </label>

            <label className="profile-label" htmlFor="profile-name">
              Nome de Usuario
              <input
                id="profile-name"
                className="profile-input"
                onInput={handleChange}
                type="text"
                name="name"
                value={name}
              />
            </label>

            <label className="profile-label" htmlFor="profile-email">
              E-mail
              <input
                id="profile-email"
                className="profile-input"
                onInput={handleChange}
                type="text"
                name="email"
                value={email}
              />
            </label>

            <label className="profile-label" htmlFor="profile-descritpion">
              Descrição
              <textarea
                id="profile-descritpion"
                className="profile-input profile-textarea"
                onInput={handleChange}
                name="description"
                value={description}
              />
            </label>
            <button
              type="submit"
              className="profile-button"
              disabled={allValidInputs()}
              onClick={saveInfo}
            >
              Salvar
            </button>
          </form>
        </div>
      )
  );
}
