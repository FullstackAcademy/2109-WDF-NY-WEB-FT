import {fetchSinglePlayer, fetchAllPlayers, addNewPlayer, removePlayer} from './ajaxHelpers';

const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

export const renderAllPlayers = (playerList) => {
  if(!playerList || !playerList.length) {
    playerContainer.innerHTML = '<h3>No players to display!</h3>';
    return;
  }

  let playerContainerHTML = '';
  playerList.map(pup => {
    let pupHTML = `
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">${pup.name}</p>
          <p class="pup-number">#${pup.id}</p>
        </div>
        <img src="${pup.imageUrl}" alt="photo of ${pup.name} the puppy">
        <button class="detail-button" data-id=${pup.id}>See details</button>
        <button class="delete-button" data-id=${pup.id}>Remove from roster</button>
      </div>
    `;
    playerContainerHTML += pupHTML;
  });
  playerContainer.innerHTML = playerContainerHTML;

  let detailButtons = [...document.getElementsByClassName('detail-button')];
  detailButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const player = await fetchSinglePlayer(button.dataset.id);
      renderSinglePlayer(player);
    });
  });

  let deleteButtons = [...document.getElementsByClassName('delete-button')];
  deleteButtons.forEach(button => {
    button.addEventListener('click', async () => {
      await removePlayer(button.dataset.id);
      const players = await fetchAllPlayers();
      renderAllPlayers(players);
    });
  });
};

export const renderSinglePlayer = (playerObj) => {
  if(!playerObj || !playerObj.id) {
    playerContainer.innerHTML = "<h3>Couldn't find data for this player!</h3>";
    return;
  }

  let pupHTML = `
    <div class="single-player-view">
      <div class="header-info">
        <p class="pup-title">${playerObj.name}</p>
        <p class="pup-number">#${playerObj.id}</p>
      </div>
      <p>Team: ${playerObj.team ? playerObj.team.name : 'Unassigned'}</p>
      <p>Breed: ${playerObj.breed}</p>
      <img src="${playerObj.imageUrl}" alt="photo of ${playerObj.name} the puppy">
      <button id="see-all">Back to all players</button>
    </div>
  `;
  playerContainer.innerHTML = pupHTML;

  let seeAllButton = document.getElementById('see-all');
  seeAllButton.addEventListener('click', async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
  });
}

export const renderNewPlayerForm = () => {
  let formHTML = `
    <form>
      <label for="name">Name:</label>
      <input type="text" name="name" />
      <label for="breed">Breed:</label>
      <input type="text" name="breed" />
      <button type="submit">Submit</button>
    </form>
  `;
  newPlayerFormContainer.innerHTML = formHTML;

  let form = document.querySelector('#new-player-form > form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let playerData = {
      name: form.elements.name.value,
      breed: form.elements.breed.value
    }
    await addNewPlayer(playerData);
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
    form.elements.name.value = '';
    form.elements.breed.value = '';
  });
}
