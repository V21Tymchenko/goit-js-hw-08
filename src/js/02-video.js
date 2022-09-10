import Player from '@vimeo/player';
import * as Player from '@vimeo/player/dist/player.js';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);
const STORAGE_KEY = 'videoplayer-current-time';

getVideoCurrentTime();

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

function getVideoCurrentTime() {
  const saveData = localStorage.getItem(STORAGE_KEY);
  if (saveData) {
    player.setCurrentTime(saveData);
  }
}
