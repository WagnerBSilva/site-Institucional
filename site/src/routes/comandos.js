var express = require("express");
var router = express.Router();

var comandosController = require("../controllers/comandosController");



router.get("/listar/:idEmpresa", function (req, res) {
    comandosController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    comandosController.cadastrar(req, res);
})



module.exports = router;