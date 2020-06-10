import selectorButtons from './selectorButtons';

/* These functions set the click functionality for the four "modify stat buttons."
  Clicking them runs the plusStat and minusStat functions imported from selectorButtons.js,
  which activates the two "selector buttons" to listen for a click and modify stats
  based on the values passed into them by the clicked modify button. */


const hungerButton = () => {
  const minusHunger = () => {
    selectorButtons.selectedButton('hunger');
    selectorButtons.minusAmt(20);
    selectorButtons.minusStat();
  };
  $('#hungerButton').click(minusHunger);
  const plusHunger = () => {
    selectorButtons.selectedButton('hunger');
    selectorButtons.plusAmt(10);
    selectorButtons.plusStat();
  };
  $('#hungerButton').click(plusHunger);
};

const happinessButton = () => {
  const minusHappiness = () => {
    selectorButtons.selectedButton('fun');
    selectorButtons.minusStat();
    selectorButtons.minusAmt(20);
  };
  $('#happinessButton').click(minusHappiness);
  const plusHappiness = () => {
    selectorButtons.selectedButton('fun');
    selectorButtons.plusStat();
    selectorButtons.plusAmt(10);
  };
  $('#happinessButton').click(plusHappiness);
};

const strengthButton = () => {
  const minusStrength = () => {
    selectorButtons.minusStat();
  };
  $('#strengthButton').click(minusStrength);
  const plusStrength = () => {
    selectorButtons.plusStat();
  };
  $('#strengthButton').click(plusStrength);
};

const energyButton = () => {
  const minusEnergy = () => {
    selectorButtons.minusStat('energy');
  };
  $('#energyButton').click(minusEnergy);
  const plusEnergy = () => {
    selectorButtons.plusStat('energy');
  };
  $('#energyButton').click(plusEnergy);
};

// This function collects all the modify buttons together to pass to main.js
const modButtons = () => {
  hungerButton();
  happinessButton();
  strengthButton();
  energyButton();
};

export default { modButtons };
