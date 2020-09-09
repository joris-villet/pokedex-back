const db = require('../db');

module.exports = class {

  static async findAllByType(id){
    const result = await db.query(
      `SELECT * FROM type
      INNER JOIN pokemon_type on type.id = pokemon_type.type_id
      INNER JOIN pokemon on pokemon_type.pokemon_numero = pokemon.numero
      WHERE type.id = $1;`,
      [id]);

    return result.rows;
  }
};



