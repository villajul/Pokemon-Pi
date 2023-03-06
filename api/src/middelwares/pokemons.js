const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { Pokemon, Type } = require("../db");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const result3 = await Pokemon.findOne(
        { where: { name: name.toLowerCase() } },
        {
          include: {
            model: Type,
            attributes: ["name"],
            through: { attributes: [] },
          },
        }
      );
      if (result3 !== null) res.send(result3);
      else {
        const unPoke = await axios(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        )
          .then((r) => r.data)
          .then((r) => {
            let poke = {
              id: r.id,
              name: r.name,
              image: r.sprites.other.home.front_default,
              types: r.types.map((e) => e.type),
            };
            return poke;
          });
        res.send(unPoke);
      }
    } else {
      const result = await axios(
        "https://pokeapi.co/api/v2/pokemon/?limit=300"
      )
        .then((r) => r.data)
        .then((r) => r.results);
      const otro = result.map((r) =>
        axios(r.url)
          .then((r) => r.data)
          .then((r) => {
            let poke = {
              id: r.id,
              name: r.name,
              image: r.sprites.other.home.front_default,
              attack: r.stats[1].base_stat,
              types: r.types.map((e) => e.type),
            };
            return poke;
          })
      );
      const prome = await Promise.all(otro);

      const bdPoke = await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      const allPoke = prome.concat(bdPoke);

      res.status(200).send(allPoke);
    }
  } catch (error) {
    res.status(404).send({ mensaje: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id > 905) {
      const result2 = await Pokemon.findByPk(id, {
        include: {
          model: Type,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
      console.log(result2);
      res.send(result2);
    } else {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((r) => r.data)
        .then((r) => {
          let poke = {
            id: r.id,
            name: r.name,
            image: r.sprites.other.home.front_default,
            types: r.types.map((e) => e.type),
            hp: r.stats[0].base_stat,
            attack: r.stats[1].base_stat,
            defense: r.stats[2].base_stat,
            speed: r.stats[5].base_stat,
            height: r.height,
            weight: r.weight,
          };
          return poke;
        });
      res.send(result);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

let id = 906;

router.post("/", async (req, res) => {
  const {
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    image,
    createdBd,
    type,
  } = req.body;
  console.log(req.body);
  if (!name) res.status(404).send("Falta enviar datos obligatorios");
  try {
    console.log("entro al try");
    const newPokemon = await Pokemon.create({
      id,
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
      createdBd,
    });
    id++;
    const typeDb = await type?.map((t) => Type.findOne({ where: { name: t } }));
    const addType = await Promise.all(typeDb);
    addType?.map((t) => newPokemon.addType(t));
    const dbPokemon = await Pokemon.findOne({
      where: { name: name },
      include: {
        model: Type,
        attributes: ["name"],
        throug: {
          attributes: [],
        },
      },
    });
    res.status(201).send(dbPokemon);
  } catch (error) {
    res.status(404).send(error.message);
    console.log("entro al catch", error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Pokemon.destroy({ where: { id: id } });
  res.status(200).send("pokemon is delete");
});

module.exports = router;
