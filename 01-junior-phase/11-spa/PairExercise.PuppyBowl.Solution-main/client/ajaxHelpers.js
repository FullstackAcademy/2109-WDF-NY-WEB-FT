import axios from 'axios';

export const fetchAllPlayers = async () => {
  try {
    const {data} = await axios.get('/api/players');
    return data;
  } catch (err) {
    console.error('Uh oh, trouble fetching players!', err);
  }
}

export const fetchSinglePlayer = async (playerId) => {
  try {
    const {data} = await axios.get(`/api/players/${playerId}`);
    return data;
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`)
  }
}

export const addNewPlayer = async (playerObj) => {
  try {
    const {data} = await axios.post('/api/players', playerObj);
    return data;
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!")
  }
}

export const removePlayer = async (playerId) => {
  try {
    await axios.delete(`/api/players/${playerId}`);
    return;
  } catch (err) {
    console.error(`Whoops, trouble remove player #${playerId} from the roster!`)
  }
}
