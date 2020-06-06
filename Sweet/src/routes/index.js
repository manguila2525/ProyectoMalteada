//Require Express
const express = require("express");
const router = express.Router();
//Require Models
const Frutas = require("../models/Frutas");
const Liquidos = require("../models/Liquidos");
const Proteinas = require("../models/Proteinas");
const Malteadas = require("../models/Malteadas");

// Find() dbs
router.get("/", async (req, res) => {
  const fruta = await Frutas.find();
  const liquido = await Liquidos.find();
  const proteina = await Proteinas.find();
  console.log(fruta);
  res.json({fruta,
    liquido,
    proteina
  });
});

//Insert frutas in dbs
router.post("/add", async (req, res) => {
  const frut = new Frutas(req.body);
  await frut.save();
  res.redirect("/");
});
//Insert Liquidos in dbs
router.post("/addLiquidos", async (req, res) => {
  const { nombre, valor } = req.body;
  const newLiquido = new Liquidos({
    nombre: nombre,
    valor: valor,
  });
  await newLiquido.save();
  console.log(newLiquido);
  res.json({
    message: "create liquido",
  });
});
//Insert Proteinas in dbs
router.post("/addProteinas", async (req, res) => {
  const { nombre } = req.body;
  const newProteina = new Proteinas({
    nombre: nombre,
  });
  await newProteina.save();
  console.log(newProteina);
  res.json({
    message: "create Proteina",
  });
});

//ADD Merengada

router.post('/addMerengada', async(req,res)=>{
  // const {nombreMalteada, nombreFruta, nombreLiquido, nombreProteina, porcentaje} = req.body;
  const Malte = new Malteadas(req.body);
  // const newMerengada = new Malteadas({
  //   nombreMalteada: nombreMalteada,
  //   nombreFruta: nombreFruta,
  //   nombreLiquido: nombreLiquido,
  //   nombreProteina: nombreProteina,
  //   porcentaje: porcentaje
  // })
  await Malte.save()
  console.log(req.body)
  res.json({
    message:'new Malteada'
  })
})

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Frutas.remove({ _id: id });
  res.json({
    status: "delete",
  });
});

module.exports = router;
