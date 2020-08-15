// require models
const Pokemon = require('../models/Pokemon');
const Type = require('../models/Type');
const { findAllByType } = require('../models/Type');

module.exports = {

   getAllPokemon: async (req, res, next) => {
      try {
         const result = await Pokemon.findAll();
         res.json(result);
      }
      catch (error) {
         console.log(error);
      }
   },

   getOnePokemon: async (req, res, next) => {
      try {
         const pokemonId = req.params.id;
         const result = await Pokemon.findOne(pokemonId);
         res.json(result);
      }
      catch (error) {
         console.log(error);
      }
   },

   getPokemonByType: async (req, res, next) => {
      try {
         const typeId = req.params.id;
         const result = await Type.findAllByType(typeId);
         res.json(result);
      }
      catch (error) {
         console.log(error);
      }
   }

};