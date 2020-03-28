const Sequelize = require('sequelize');
const client = require('../database');


class Type extends Sequelize.Model {

};

Type.init({

    name: Sequelize.TEXT,
    color: Sequelize.TEXT,
  },
  
  {
    sequelize: client,
    tableName: "type",
    underscored: true,
    timestamps: true
  });


module.exports = Type;