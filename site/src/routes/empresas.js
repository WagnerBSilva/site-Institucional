var express = require("express");
var router = express.Router();

var empresasController = require("../controllers/empresasController");


router.post("/cadastrarEmpresa", function (req, res) {
    empresasController.cadastrarEmpresa(req, res);
})


module.exports = router;