const db = require('../db');

module.exports = class {
  static async findAll(){
    const result = await db.query('SELECT * FROM pokemon;');
    return result.rows;
  }

  static async findOne(id){
    const result = await db.query(`SELECT * FROM pokemon WHERE id = $1;`, [id]);

    return result.rows[0];
  }

};