const Sequelize = require('sequelize');
const client = require('../database');


class Pokemon extends Sequelize.Model {

};

Pokemon.init({

    nom: Sequelize.TEXT,
    pv: Sequelize.TEXT,
    attaque: Sequelize.INTEGER,
    defense: Sequelize.INTEGER,
    attaque_spe: Sequelize.INTEGER,
    defense_spe: Sequelize.INTEGER,
    vitesse: Sequelize.INTEGER,
    created_at: Sequelize.TEXT,
    updated_at: Sequelize.TEXT,
    numero: Sequelize.INTEGER,
    
  },
  
  {
    sequelize: client,
    tableName: "pokemon",
    underscored: true,
    timestamps: true
  });


module.exports = Pokemon;