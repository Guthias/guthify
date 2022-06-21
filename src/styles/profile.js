import styled from 'styled-components';

export const ProfileArea = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  width: 300px;

  .image-area {
    height: 75px;
    width: 75px;
    margin-bottom: 20px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
    font-size: 19px;
    font-weight: 700;
    
    input, textarea {
      width: 100%;
      font-weight: 700;
      background-color: #333;
      color: white;
      font-size: 18px;
      padding: 5px 10px;
      border: none;
      border-radius: 8px;
      outline: none;
      min-height: 34px;
    }

    textarea {
      height: 100px;
      resize: none;
    }
  }

  button, a {
    display: block;
    color: white;
    background-color: #0b6bc0;
    padding: 10px;
    cursor: pointer;
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    width: 80%;
    transition: all ease-in-out 0.2s;
    border-radius: 10px;

    :hover {
      background-color: #0d518d;
    }

    :disabled {
      background-color: gray;
      cursor: default;
    }
  }
`;
