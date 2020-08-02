const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export async function getPokemons(offset, limit) {
  return (await fetch(`${BASE_URL}?offset=${offset}&limit=${limit}`)).json();
}

export async function getPokemonCount() {
  return (await getPokemons(0, 1)).count;
}

export async function getPokemon(id) {
  return (await fetch(`${BASE_URL}${id}`)).json();
}
