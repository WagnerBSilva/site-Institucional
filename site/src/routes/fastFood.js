var express = require("express");
var router = express.Router();

var fastFoodController = require("../controllers/fastFoodController");

router.get("/listar/:idEmpresa", function (req, res) {
    fastFoodController.listar(req, res);
});

router.get("/listarPorCep/:cep/:idEmpresa", function (req, res) {
    fastFoodController.listarPorCep(req, res);
});

router.post("/cadastrarFastFood", function (req, res) {
    fastFoodController.cadastrarFastFood(req, res);
})

router.put("/alterarStatus/:idFastFood", function (req, res) {
    console.log("aqui")
    fastFoodController.alterarStatus(req, res);
});


module.exports = router;