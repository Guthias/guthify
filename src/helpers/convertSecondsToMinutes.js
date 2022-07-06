function convertSecondsToTime(time) {
  const seconds = Math.round(time);
  const minutes = Math.floor(seconds / 60);

  let formattedSeconds = seconds;

  if (seconds - (60 * minutes) < 10) {
    formattedSeconds = `0${seconds}`;
  }

  return `${minutes}:${formattedSeconds}`;
}

export default convertSecondsToTime;
