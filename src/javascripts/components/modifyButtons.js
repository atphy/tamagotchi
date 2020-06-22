import selectorButtons from './selectorButtons';

const modifyButton = (stat, subAmtMin, subAmtMax, addAmtMin, addAmtMax) => {
  selectorButtons.selectedButton(stat);
  selectorButtons.plusAmt(subAmtMin, subAmtMax);
  selectorButtons.minusAmt(addAmtMin, addAmtMax);
};

const hungerButton = () => {
  modifyButton('hunger', 5, 15, 5, 15);
};

const happinessButton = () => {
  modifyButton('fun', 5, 20, 5, 20);
};

const strengthButton = () => {
  modifyButton('strength', 5, 15, 5, 15);
};

const energyButton = () => {
  modifyButton('energy', 5, 20, 5, 20);
};

const modButtons = () => {
  $('#hungerButton').click(hungerButton);
  $('#happinessButton').click(happinessButton);
  $('#strengthButton').click(strengthButton);
  $('#energyButton').click(energyButton);
};

export default { modButtons };
