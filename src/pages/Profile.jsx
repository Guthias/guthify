import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

export default function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      setUser(userData);
      setLoading(false);
    };
    fetchUser();
  });

  return (
    loading ? <p>Carregando...</p>
      : (
        <div className="page-content">
          <form className="user-info-area">
            <div className="user-profile-image-area">
              <img
                data-testid="profile-image"
                className="user-profile-image"
                src={user.image}
                alt=""
              />
            </div>

            <div className="profile-label">
              Nome de Usuario
              <span className="profile-input" type="text">{ user.name }</span>
            </div>

            <label className="profile-label" htmlFor="profile-email">
              E-mail
              <span className="profile-input" type="text">{ user.email }</span>
            </label>

            <label className="profile-label" htmlFor="profile-descritpion">
              Descrição
              <span className="profile-input profile-textarea">
                { user.description }
              </span>
            </label>
            <Link to="profile/edit" className="profile-button">Editar perfil</Link>
          </form>
        </div>
      )
  );
}
