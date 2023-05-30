import IP_BASEURL from './IP Config';
import { getData } from './storage';

export const getToken = async () => {
  try {
    const response = await fetch(IP_BASEURL + '/user/token');
    const json = await response.json();
    return json.toString();
  } catch (error) {
    console.error(error);
  }
};

export const LoginFetch = async (username, password) => {
  try {
    return fetch(IP_BASEURL + '/user/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => response.json());
  } catch (e) {
    console.error(e);
  }
};

export const RegisterFetch = async (username, password) => {
  try {
    return fetch(IP_BASEURL + '/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: await getData('token'),
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => response.json());
  } catch (e) {
    console.error(e);
  }
};

export const GameStatusFetch = async () => {
  try {
    return fetch(IP_BASEURL + '/games/gameID', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: await getData('token'),
        gameId: await getData('gameId'),
      },
    }).then((response) => response.json());
  } catch (e) {
    console.log(e.message);
  }
};

export const MakeMoveFetch = async (token, sign) => {
  try {
    return fetch(IP_BASEURL + '/games/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: token,
        gameId: await getData('gameId'),
        sign: sign,
      },
    }).then((response) => response.json());
  } catch (e) {
    console.log(e.message);
  }
};

export const JoinGameFetch = async (gameId) => {
  try {
    return fetch(IP_BASEURL + '/games/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: await getData('token'),
        gameId: gameId,
      },
    }).then((response) => response.json());
  } catch (e) {
    console.log(e.message);
  }
};

export const CreateGameFetch = async () => {
  try {
    return fetch(IP_BASEURL + '/games/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: await getData('token'),
      },
    }).then((response) => response.json());
  } catch (e) {}
};

export const OpenGamesFetch = async () => {
  try {
    return fetch(IP_BASEURL + '/games', {
      method: 'GET',
    }).then((response) => response.json());
  } catch (e) {}
};

export const AllGamesFetch = async () => {
  try {
    return fetch(IP_BASEURL + '/games/allGames', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: await getData('token'),
      },
    }).then((response) => response.json());
  } catch (e) {}
};
