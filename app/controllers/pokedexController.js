// require models
const Pokemon = require('../models/Pokemon');
const Type = require('../models/Type');


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

   getOneType: async (req, res, next) => {
      try {
         const typeId = req.params.id;
         const result = await Type.findOneType(typeId);
         res.json(result);
      }
      catch (error) {
         console.log(error);
      }
   },

   getTypesByPokemon: async (req, res, next) => {
      try {
         const typeId = req.params.id;
         const result = await Type.findTypesByPokemon(typeId);
         res.json(result);
      }
      catch (error) {
         console.log(error);
      }
   },

   getPokemonsByTypes: async (req, res, next) => {
      try {
         const typeId = req.params.id;
         const result = await Type.findPokemonsByTypes(typeId);
         res.json(result);
      }
      catch (error) {
         console.log(error);
      }
   }

};