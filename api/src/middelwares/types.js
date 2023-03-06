const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { Type } = require("../db");

router.get("/", async (req, res) => {
  try {
    const types = await axios("https://pokeapi.co/api/v2/type").then(
      (r) => r.data.results
    );
    const typesCreate = await types.map((el) =>
      Type.findOrCreate({ where: { name: el.name } })
    );
    const typesBd = await Type.findAll();
    res.send(typesBd);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});
module.exports = router;
