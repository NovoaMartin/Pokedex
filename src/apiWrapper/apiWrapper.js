import Pokemon from '../classes/Pokemon.js';
import Stats from '../classes/stats.js';
import { getPokemonCount, getPokemons } from '../api/apiCalls.js';

export function wrapPokemon(apiPokemon) {
  const {
    id,
    name,
    height,
    weight,
    sprites: {
      front_default: frontD, back_default: backD, front_female: frontF, back_female: backF,
    },
    types,
    abilities: skills,
    stats,
  } = apiPokemon;

  return new Pokemon(
    id,
    name,
    height,
    weight,
    [frontD, backD, frontF, backF].filter((item) => item != null),
    types.map((item) => item.type.name),
    skills.filter((item) => item.is_hidden === false),
    new Stats(stats.map((item) => item.base_stat)),
  );
}

export async function getNames() {
  const limit = await getPokemonCount();
  const pokemons = await getPokemons(0, limit);
  return pokemons.results.map((item) => item.name);
}
