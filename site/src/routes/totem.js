var express = require("express");
var router = express.Router();

var totemController = require("../controllers/totemController");



router.get("/listar/:idEmpresa", function (req, res) {
    totemController.listar(req, res);
});

router.get("/listarPorId/:id", function (req, res) {
    totemController.listarPorId(req, res);
});

router.get("/listarPorUsuario/:usuario", function (req, res) {
    totemController.listarPorUsuario(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarTotem", function (req, res) {
    totemController.cadastrar(req, res);
})

router.put("/alterarStatus/:idTotem", function (req, res) {
    console.log("aqui")
    totemController.alterarStatus(req, res);
});


module.exports = router;