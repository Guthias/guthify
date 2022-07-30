import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {
  FaStepBackward, FaStepForward, FaPlay, FaPause,
} from 'react-icons/fa';
import useMusicPlayer from '../../hooks/useMusicPlayer';
import convertSecondsToMinutes from '../../helpers/convertSecondsToMinutes';

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
      cursor: pointer;
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
  const { currentTrack } = useMusicPlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDuration, setcurrentDuration] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  const updateProgress = () => {
    const { currentTime, duration } = audioPlayer.current;
    const musicProgress = (100 / duration) * currentTime;
    progressBar.current.value = musicProgress;
    setcurrentDuration(audioPlayer.current.currentTime);
    animationRef.current = requestAnimationFrame(updateProgress);
  };

  const togglePlayer = () => {
    if (audioPlayer.current.paused) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(updateProgress);
      setIsPlaying(true);
    } else {
      audioPlayer.current.pause();
      setIsPlaying(false);
      cancelAnimationFrame(animationRef.current);
    }
  };

  return (
    <TrackArea>
      <div>
        <button type="button">
          <FaStepBackward />
        </button>

        <button className="play" type="button" onClick={togglePlayer}>
          {
            isPlaying
              ? <FaPlay />
              : <FaPause />
          }
        </button>

        <button type="button">
          <FaStepForward />
        </button>
      </div>

      <div>
        <input type="range" className="progress-bar" ref={progressBar} defaultValue="0" min="0" max="100" />
        <div className="track-time">
          <span className="current-time">{ convertSecondsToMinutes(currentDuration) }</span>
          <span className="track-duration">{ convertSecondsToMinutes(audioPlayer?.current?.duration) }</span>
        </div>
      </div>

      <audio ref={audioPlayer} src={currentTrack.url}>
        <track kind="captions" />
      </audio>
    </TrackArea>
  );
}
