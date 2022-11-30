var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar/:idEmpresa", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/listarPorEmail/:email", function (req, res) {
    usuarioController.listarPorEmail(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarUsuario", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.put("/alterarStatus/:idUsuario", function (req, res) {
    usuarioController.alterarStatus(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;