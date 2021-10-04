import {fetchAllPlayers} from './ajaxHelpers';
import {renderAllPlayers, renderNewPlayerForm} from './renderHelpers';

const init = async () => {
  const players = await fetchAllPlayers();
  renderAllPlayers(players);

  renderNewPlayerForm();
}

init();
