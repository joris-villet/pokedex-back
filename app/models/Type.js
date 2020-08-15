const db = require('../db');

module.exports = class {
  static async findAllByType(id){
    const result = await db.query(
      `SELECT * FROM pokemon
      INNER JOIN pokemon_type on pokemon.numero = pokemon_type.pokemon_numero
      WHERE pokemon_type.type_id = $1;`,
      [id]);

    return result.rows;
  }
};



