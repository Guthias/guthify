import React from 'react';
import styled from 'styled-components';
import { FaStepBackward, FaStepForward, FaPlay } from 'react-icons/fa';

const TrackArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 1.2em;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.6em;
      transition: ease-in-out all 0.3s;
  
      :hover {
        color: #147fdd;
      }
  
      &.play {
        border-radius: 50%;
        color: black;
        background-color: white;
        
        :hover {
          color: white;
          background-color: #147fdd;
        }
      }
    }
  
    .progress-bar {
      width: 20em;
      height: 0.5em;
      background-color: gray;
      border-radius: 0.8em;
      margin-right: 1em;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      &:before {
        content: '';
        width: 35%;
        height: 100%;
        position: absolute;
        z-index: 100%;
        background-color: #147fdd;
      }
    }
  
    .track-time {
      .current-time {
        color: white;
        font-weight: bold;
        margin-right: 0.5em;
      }
  
      .track-time {
        color: gray;
      }
    }
  }
`;

export default function TrackPlayer() {
  return (
    <TrackArea>
      <div>
        <button type="button">
          <FaStepBackward />
        </button>

        <button className="play" type="button">
          <FaPlay />
        </button>

        <button type="button">
          <FaStepForward />
        </button>
      </div>

      <div>
        <div className="progress-bar" />

        <div className="track-time">
          <span className="current-time">0:45</span>
          <span className="track-time">2:42</span>
        </div>
      </div>
    </TrackArea>
  );
}
