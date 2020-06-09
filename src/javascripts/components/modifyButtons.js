import selectorButtons from './selectorButtons';

const hungerButton = () => {
  const minusHunger = () => {
    selectorButtons.minusStat('hunger');
  };
  $('#hungerButton').click(minusHunger);
  const plusHunger = () => {
    selectorButtons.plusStat('hunger');
  };
  $('#hungerButton').click(plusHunger);
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

const modButtons = () => {
  hungerButton();
  energyButton();
};

export default { modButtons };
