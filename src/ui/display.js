export default function displayPokemon(pokemon) {
  setName(pokemon.name, pokemon.id);
  setInfo(pokemon.height, pokemon.weight);
  setAbilities(pokemon.skills);
  setImages(pokemon.sprites);
}

function setName(name, id) {
  document.querySelector('#pokeName').textContent = name;
  document.querySelector('#pokeID').textContent = id;
}

function setInfo(height, weight) {
  document.querySelector('#height').textContent = `${height / 10}m`;
  document.querySelector('#weight').textContent = `${weight / 10}kg`;
}

function setAbilities(skills) {
  const abilities = skills.map((skill) => skill.ability.name);
  const $list = document.querySelector('#abilitiesList');
  $list.innerHTML = '';
  abilities.forEach((item) => {
    const $ability = document.createElement('span');
    $ability.className = 'row att-value';
    $ability.textContent = item;
    $ability.id = item;
    $list.appendChild($ability);
  });
}

function setImages(sprites) {
  const $spriteContainer = document.querySelector('#spriteContainer');
  $spriteContainer.innerHTML = '';
  sprites.forEach((sprite) => {
    const $div = document.createElement('div');
    $div.className = 'carousel-item';
    const $img = document.createElement('img');
    $img.src = sprite;
    $img.alt = 'front default';
    $img.className = 'd-block w-100';
    $div.appendChild($img);
    $spriteContainer.appendChild($div);
  });
  document.querySelector('.carousel-item').classList.add('active');
}
