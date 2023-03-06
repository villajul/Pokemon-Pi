//const { Router } = require('express');
const express = require("express");

// Importar todos los routers;

// Ejemplo: const authRouter = require('./auth.js');
const pokemonsMidelware = require("../middelwares/pokemons.js");

const typesMidelware = require("../middelwares/types.js");

const router = express();

router.use(express.json());

router.use("/pokemons", pokemonsMidelware);

router.use("/types", typesMidelware);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
