const { Router } = require('express');
const axios = require('axios');

const router = Router();
const { Tipo } = require('../db');


router.get('/',async (req, res) =>{
    try {
        const types = await axios('https://pokeapi.co/api/v2/type').then(r => r.data.results);
        const typesCreate = await types.map(el => Tipo.findOrCreate({ where: { name: el.name}}))
        const typesBd = await Tipo.findAll()
        res.send(typesBd)
        
    } catch (error) {
        res.status(404).send({error: error.message});        
    }
})
module.exports = router