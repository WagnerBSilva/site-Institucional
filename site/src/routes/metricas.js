var express = require("express");
var router = express.Router();

var metricasController = require("../controllers/metricasController");


router.get("/listar", function (req, res) {
    metricasController.listar(req, res);
});

router.get("/ultimas/:idTotem", function (req, res) {
    metricasController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idTotem", function (req, res) {
    metricasController.buscarMedidasEmTempoReal(req, res);
})


module.exports = router;