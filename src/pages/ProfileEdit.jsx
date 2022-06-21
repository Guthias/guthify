import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LocalLoading from '../components/LocalLoading';
import { getUser, updateUser } from '../services/userAPI';
import { MainContainer } from '../styles/main';

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
    loading ? <LocalLoading />
      : (
        <MainContainer>
          <ProfileEdit>
            <div className="user-profile-image-area">
              <img
                className="user-profile-image"
                src={image}
                alt=""
              />
            </div>

            <label htmlFor="profile-image">
              Image
              <input
                id="profile-image"
                onInput={handleChange}
                type="text"
                name="image"
                value={image}
              />
            </label>

            <label htmlFor="profile-name">
              Username
              <input
                id="profile-name"
                onInput={handleChange}
                type="text"
                name="name"
                value={name}
              />
            </label>

            <label htmlFor="profile-email">
              E-mail
              <input
                id="profile-email"
                onInput={handleChange}
                type="text"
                name="email"
                value={email}
              />
            </label>

            <label htmlFor="profile-descritpion">
              Description
              <textarea
                id="profile-descritpion"
                onInput={handleChange}
                name="description"
                value={description}
              />
            </label>

            <button
              type="submit"
              disabled={allValidInputs()}
              onClick={saveInfo}
            >
              Salvar
            </button>
          </ProfileEdit>
        </MainContainer>
      )
  );
}
