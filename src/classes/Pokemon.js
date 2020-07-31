export default class Pokemon {
  constructor(id, name, height, weight, sprites = [], types = [], skills = [], stats) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.sprites = sprites;
    this.types = types;
    this.skills = skills;
    this.stats = stats;
  }
}
