export default class Pokemon {
  constructor(id, name, height, weight, sprites = [], types = [], skills = [], hp, attack, defence, specialAttack, specialDefence, speed) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.sprites = sprites;
    this.types = types;
    this.skills = skills;
    this.hp = hp;
    this.attack = attack;
    this.defence = defence;
    this.specialAttack = specialAttack;
    this.specialDefence = specialDefence;
    this.speed = speed;
  }
}
