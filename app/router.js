const express = require('express');
const router = express.Router();

const pokedexController = require('./controllers/pokedexController');

router.get('/', (req, res, next) => {
    res.send('home page');
});

router.get('/pokemon/lists', pokedexController.getAllPokemon);

router.get('/pokemon/:id', pokedexController.getOnePokemon);

router.get('/pokemon/type/:id', pokedexController.getPokemonByType);

router.use((req, res, next) => {
    res.status(404).send('Page non trouvée');
});


module.exports = router;