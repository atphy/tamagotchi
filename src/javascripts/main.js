import '../styles/main.scss';
import modifyButtons from './components/modifyButtons';
import statsDisplay from './components/statsDisplay';
import selectorButtons from './components/selectorButtons';

const init = () => {
  modifyButtons.modButtons();
  statsDisplay.generateStatsDisplay();
  selectorButtons.activateSelectors();
};

init();
