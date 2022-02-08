var express = require("express");
var router = express.Router();
var db = require("../conexion/db");

/* GET users Productos. */
router.get("/", function (req, res, next) {
  db.query("SELECT * FROM  datos", function (err, resultados) {
    console.log("resultados");
    res.render("productos", { title: "Libros de Programacion", ventas:resultados });
  });

  
});

module.exports = router;
