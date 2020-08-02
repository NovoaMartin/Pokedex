import { initSelect } from './ui/select.js';
import { displayPokemon } from './ui/display.js';
import { getPokemon } from './services/services.js';

async function init() {
  await initSelect(displayPokemon, getPokemon);
}

init();
