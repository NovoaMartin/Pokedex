import { getNames } from '../apiWrapper/apiWrapper.js';
import { refreshSelect, selectRandom } from '../utilities/utilities.js';

export function getSelectedPokemon() {
  return document.querySelector('#pokemonList').value.toLowerCase();
}

export async function initSelect(callBackFnDisplay, callBackFnGetPokemon) {
  const $select = document.querySelector('#pokemonList');
  const names = await getNames();
  names.forEach((name) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const $option = document.createElement('option');
    $option.dataset.token = name;
    $option.textContent = name;
    $select.appendChild($option);
  });
  selectRandom();
  refreshSelect();

  callBackFnDisplay(await callBackFnGetPokemon(getSelectedPokemon()));

  $select.onchange = async () => {
    callBackFnDisplay(await callBackFnGetPokemon(getSelectedPokemon()));
  };
}
