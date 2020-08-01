/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
import wrapPokemon from '../apiWrapper/apiWrapper.js';

import {
  getPokemon as getPokemonFromAPI,
} from '../api/apiCalls.js';

import {
  getPokemon as getPokemonFromLocalStorage,
  storePokemon,
} from '../storage/storage.js';

// eslint-disable-next-line import/prefer-default-export
export default async function getPokemon(id) {
  if (id === undefined) {
    throw new Error('getPokemon called without id');
  }

  let pokemon;
  try {
    pokemon = getPokemonFromLocalStorage(id);
  } catch (e) {
    const pokemonData = await getPokemonFromAPI(id);
    pokemon = wrapPokemon(pokemonData);
    storePokemon(id, pokemon);
  }

  return pokemon;
}
