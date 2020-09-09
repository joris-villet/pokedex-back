const express = require('express');
const router = express.Router();

const pokedexController = require('./controllers/pokedexController');

router.get('/', (req, res, next) => {
    res.send('home page');
});

router.get('/pokemon/lists', pokedexController.getAllPokemon);

router.get('/pokemon/:id', pokedexController.getOnePokemon);

router.get('/pokemon/type-by-pokemon/:id', pokedexController.getTypesByPokemon);

router.get('/pokemon/pokemon-by-type/:id', pokedexController.getPokemonsByTypes);

router.get('/pokemon/type/:id', pokedexController.getOneType);

router.use((req, res, next) => {
    res.status(404).send('Page non trouvée');
});


module.exports = router;