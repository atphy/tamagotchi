import '../styles/main.scss';
import modifyButtons from './components/modifyButtons';
import statsDisplay from './components/statsDisplay';

const init = () => {
  modifyButtons.modButtons();
  statsDisplay.generateStatsDisplay();
};

init();
