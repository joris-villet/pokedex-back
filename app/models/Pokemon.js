const db = require('../db');

module.exports = class {
  static async findAll(){
    const result = await db.query('SELECT * FROM pokemon;');
    return result.rows;
  }

  static async findOne(id){
    const result = await db.query(`SELECT * FROM pokemon
    INNER JOIN pokemon_type on pokemon.numero = pokemon_type.pokemon_numero
    INNER JOIN type on pokemon_type.type_id = type.id
    WHERE pokemon.id= $1;`, [id]);

    return result.rows;
  }
};