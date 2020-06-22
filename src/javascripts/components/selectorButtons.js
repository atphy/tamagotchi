import tamagotchiStats from '../helpers/data/tamagochi-stats';
import statsDisplay from './statsDisplay';

const tamagotchiObj = tamagotchiStats.getTamagotchi();

/* These buttons accept an argument passed by the button click in modifyButtons.js.
  They modify the values present in the tamagotchi stats array and then reprint the dom strings
  which display the four stat values to update the changes. */

let selected = '';
let addAmt = '';
let subAmt = '';

const selectedButton = (selectedStat) => {
  selected = selectedStat;
};

const plusAmt = (selectedAddAmt) => {
  addAmt = selectedAddAmt;
};

const minusAmt = (selectedSubAmt) => {
  subAmt = selectedSubAmt;
};


const plusStat = () => {
  tamagotchiObj[selected] += addAmt;
  statsDisplay.generateStatsDisplay();
};

const minusStat = () => {
  tamagotchiObj[selected] -= subAmt;
  statsDisplay.generateStatsDisplay();
};


const activateSelectors = () => {
  $('#plusButton').click(plusStat);
  $('#minusButton').click(minusStat);
};

export default {
  selectedButton, plusAmt, minusAmt, activateSelectors,
};

// ATTEMPT TO SIMPLIFY
