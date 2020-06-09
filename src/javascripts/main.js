import '../styles/main.scss';
import statButtons from './components/modifyButtons';
import statsDisplay from './components/statsDisplay';

const init = () => {
  statButtons.energyButton();
  statsDisplay.generateStatsDisplay();
};

init();
