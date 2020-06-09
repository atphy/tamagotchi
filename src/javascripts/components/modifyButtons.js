import tamagotchiStats from '../helpers/data/tamagochi-stats';
import statsDisplay from './statsDisplay';

const tamagotchiObj = tamagotchiStats.getTamagotchi();

const plusStat = (selected) => {
  const addStat = () => {
    tamagotchiObj[selected] += 10;
    statsDisplay.generateStatsDisplay();
  };
  $('#plusButton').click(addStat);
};

const minusStat = (selected) => {
  const subStat = () => {
    tamagotchiObj[selected] -= 10;
    statsDisplay.generateStatsDisplay();
  };
  $('#minusButton').click(subStat);
};


const energyButton = () => {
  const minusEnergy = () => {
    minusStat('energy');
  };
  $('#energyButton').click(minusEnergy);
  const plusEnergy = () => {
    plusStat('energy');
  };
  $('#energyButton').click(plusEnergy);
};

export default { energyButton };
