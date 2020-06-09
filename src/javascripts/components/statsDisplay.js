import tamagotchiStats from '../helpers/data/tamagochi-stats';
import utils from '../helpers/utils';

const tamagotchiObj = tamagotchiStats.getTamagotchi();

const generateStatsDisplay = () => {
  console.error(tamagotchiObj);
  utils.printToDom('#hungerDisplay', tamagotchiObj.hunger);
  utils.printToDom('#happinessDisplay', tamagotchiObj.fun);
  utils.printToDom('#strengthDisplay', tamagotchiObj.strength);
  utils.printToDom('#energyDisplay', tamagotchiObj.energy);
};

export default { generateStatsDisplay };
