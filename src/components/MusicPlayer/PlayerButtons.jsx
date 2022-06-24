import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdRepeat, MdShuffle } from 'react-icons/md';
import { FaVolumeUp } from 'react-icons/fa';

const PlayerButtonsArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  >button {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 1.7em;
    color: gray;
    transition: ease-in-out 0.3s all;
    
    :hover {
      color: white;
    }
  }
`;

export default function PlayerButtons() {
  return (
    <PlayerButtonsArea>
      <button type="button" title="Change volume">
        <FaVolumeUp />
      </button>

      <button type="button" title="Favorite this song">
        <AiOutlineHeart />
      </button>

      <button type="button" title="Shuffle">
        <MdShuffle />
      </button>

      <button type="button" title="Repeat">
        <MdRepeat />
      </button>
    </PlayerButtonsArea>
  );
}
