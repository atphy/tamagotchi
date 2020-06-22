/* eslint-disable no-param-reassign */
import tamagotchiStats from '../helpers/data/tamagochi-stats';
import statsDisplay from './statsDisplay';

const tamagotchiObj = tamagotchiStats.getTamagotchi();

let selected = '';
let addAmt = '';
let subAmt = '';

const valueRandomizer = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const selectedButton = (selectedStat) => {
  selected = selectedStat;
};

const plusAmt = (min, max) => {
  addAmt = valueRandomizer(min, max);
};

const minusAmt = (min, max) => {
  subAmt = valueRandomizer(min, max);
};

const plusStat = () => {
  tamagotchiObj[selected] += addAmt;
  if (tamagotchiObj[selected] > 100) {
    tamagotchiObj[selected] = 100;
    statsDisplay.generateStatsDisplay();
  } else {
    statsDisplay.generateStatsDisplay();
  }
};

const minusStat = () => {
  tamagotchiObj[selected] -= subAmt;
  if (tamagotchiObj[selected] < 0) {
    tamagotchiObj[selected] = 0;
    statsDisplay.generateStatsDisplay();
  } else {
    statsDisplay.generateStatsDisplay();
  }
};

const activateSelectors = () => {
  $('#plusButton').click(plusStat);
  $('#minusButton').click(minusStat);
};

export default {
  selectedButton, plusAmt, minusAmt, activateSelectors,
};
