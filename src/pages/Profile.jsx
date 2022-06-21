import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LocalLoading from '../components/LocalLoading';
import { getUser } from '../services/userAPI';
import { MainContainer } from '../styles/main';
import { ProfileArea } from '../styles/profile';

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
  }, []);

  return (
    loading ? <LocalLoading />
      : (
        <MainContainer>
          <ProfileArea>
            <div className="image-area">
              <img src={user.image} alt="" />
            </div>

            <label htmlFor="profile-name">
              Username
              <input id="profile-name" type="text" value={user.name} disabled />
            </label>

            <label htmlFor="profile-email">
              E-mail
              <input id="profile-email" type="text" value={user.email} disabled />
            </label>

            <label htmlFor="profile-descritpion">
              Description
              <textarea id="profile-descritpion" value={user.description} disabled />
            </label>
            <Link to="profile/edit" className="profile-button">Editar perfil</Link>
          </ProfileArea>
        </MainContainer>
      )
  );
}
