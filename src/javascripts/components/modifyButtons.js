import selectorButtons from './selectorButtons';

const modifyButton = (stat, subAmt, addAmt) => {
  selectorButtons.selectedButton(stat);
  selectorButtons.minusAmt(subAmt);
  selectorButtons.plusAmt(addAmt);
  console.log(stat);
};

const hungerButton = () => {
  modifyButton('hunger', 10, 20);
};

const happinessButton = () => {
  modifyButton('fun', 10, 20);
};

const strengthButton = () => {
  modifyButton('strength', 10, 20);
};

const energyButton = () => {
  modifyButton('energy', 10, 20);
};

const modButtons = () => {
  $('#hungerButton').click(hungerButton);
  $('#happinessButton').click(happinessButton);
  $('#strengthButton').click(strengthButton);
  $('#energyButton').click(energyButton);
};

export default { modButtons };
