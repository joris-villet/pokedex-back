const db = require('../db');

module.exports = class {

  static async findTypesByPokemon(id){
    const result = await db.query(`SELECT type_id, name, color FROM pokemon
    INNER JOIN pokemon_type on pokemon.numero = pokemon_type.pokemon_numero
    INNER JOIN type on pokemon_type.type_id = type.id
    WHERE pokemon.id= $1;`, [id]);

    return result.rows;
  }

  static async findOneType(id){
    const result = await db.query(`SELECT * FROM type
    INNER JOIN pokemon_type on type.id = pokemon_type.type_id
    INNER JOIN pokemon on pokemon_type.pokemon_numero = pokemon.numero
    WHERE type.id = $1;`, [id]);
    return result.rows[0];
  }

  static async findPokemonsByTypes(id){
    const result = await db.query(`SELECT * FROM type
    INNER JOIN pokemon_type on type.id = pokemon_type.type_id
    INNER JOIN pokemon on pokemon_type.pokemon_numero = pokemon.numero
    WHERE type.id = $1`, [id]);

    return result.rows;
  }
  
};



