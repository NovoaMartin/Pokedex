function pokemonKey(id) {
  return `pokemon_${id}`;
}

export function getPokemon(id) {
  if (id === undefined) {
    throw new Error('no id specified');
  }
  const pokemon = JSON.parse(localStorage.getItem(pokemonKey(id)));

  if (pokemon == null) {
    throw new Error('pokemon not found');
  }

  return pokemon;
}

export function storePokemon(id, pokemon) {
  if (id === undefined || typeof pokemon !== 'object') {
    throw new Error('storePokemon called with wrong arguments');
  }
  localStorage.setItem(pokemonKey(id), JSON.stringify(pokemon));
}
