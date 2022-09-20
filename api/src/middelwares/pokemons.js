const { Router } = require('express')
const axios = require('axios')
//const Pokemon = require('../models/Pokemon')
const router = Router()
const { Pokemon, Tipo } = require('../db')




router.get('/', async(req, res)=>{  
    const { name } = req.query;  
    try {     
        if(name){
            const unPoke = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`).then(r => r.data).then(r => {
                let poke = {
                        id: r.id,
                        name: r.name,
                        image: r.sprites.other.home.front_default,
                        type: r.types.map(e => e.type.name)
                }
                return poke
              });
            res.send(unPoke)
        } else{
            const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0').then(r => r.data).then(r => r.results) 
          const otro = result.map((r) => axios(r.url).then(r => r.data).then(r => {
            let poke = {
                id: r.id,
                name: r.name,
                image: r.sprites.other.home.front_default,
                attack: r.stats[1].base_stat,
                type: r.types.map(e => e.type.name)
            }
            return poke
          }))
          const prome = await Promise.all(otro) 

          const bdPoke = await Pokemon.findAll({
            include:{
                model: Tipo,
                attributes:['name'],
                through:{
                    attributes:[] 
                }
            }
          })
          

          const allPoke = prome.concat(bdPoke)
        
        
        res.status(200).send(allPoke)
        }        
         
    } catch (error) {
        res.status(404).send({mensaje: error.message})
    }   
}) 

router.get('/:id', async (req, res) => {
    const {id} = req.params;    
    try {
        if(id >= 906){
            const result2 = await Pokemon.findByPk(id);
            res.send(result2)
        }
        if(id !== Number ){
            const result3 = await Pokemon.findOne({ where: { name: id } });
            if(result3 !== null){
                res.send(result3)
            }else {
                const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.data).then(r => {
                    let poke = {
                        id: r.id,
                        name: r.name,
                        image: r.sprites.other.home.front_default,
                        types: r.types.map(e => e.type.name),
                        hp: r.stats[0].base_stat,
                        attack: r.stats[1].base_stat,
                        defense: r.stats[2].base_stat,
                        speed: r.stats[5].base_stat,
                        height: r.height,
                        weight: r.weight,                        
                    }
                    return poke
                  })
        
                   res.send(result);

            }
            
        }
        else{

            const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.data).then(r => {
                let poke = {
                    id: r.id,
                    name: r.name,
                    image: r.sprites.other.home.front_default,
                    type: r.types.map(e => e.type.name)
                }
                return poke
              })
    
               res.send(result);
        }  
          
        
    } catch (error) {
        res.status(404).send(error.message)
    }
})

let id = 906;

router.post('/', async (req, res) => {
const { name, hp, attack, defense, speed, height, weight, image, createdBd, type} = req.body;
if(!name) res.status(404).send('Falta enviar datos obligatorios')
try {
    const newPokemon = await Pokemon.create({id, name, hp, attack, defense, speed, height, weight, image, createdBd});
    id++;
    const typeDb = await Tipo.findAll({where:{name:type}});
    newPokemon.addTipo(typeDb)
    res.status(201).send(newPokemon)
    
} catch (error) {
    res.status(404).send(error.message)
}

})


module.exports = router