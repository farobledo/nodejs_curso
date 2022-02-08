var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Bienvenenidos a Libros de Programación con Express" });
});

router.get("/nosotros", function (req, res, next) {
  res.render("nosotros", { title: "Nosotros somos..." });
});



module.exports = router;
