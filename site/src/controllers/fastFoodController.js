var fastFoodModel = require("../models/fastFoodModel");

var sessoes = [];
let insertIdResultado = 0;

function listar(req, res) {
    var idEmpresa = req.params.idEmpresa;
    fastFoodModel.listar(idEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarPorCep(req, res) {
    var cep = req.params.cep;
    var idEmpresa = req.params.idEmpresa;

    console.log(idEmpresa + "controller")
    fastFoodModel.listarPorCep(cep, idEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarFastFood(req, res) {
    console.log("Aqui");

    var nome = req.body.nomeServer;
    var cnpj = req.body.cnpjServer;
    var cep = req.body.cepServer;
    var numero = req.body.numeroServer;
    var idEmpresa = req.body.idEmpresaServer
    console.log(nome);
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else {
        
        fastFoodModel.cadastrarFastFood(nome, cnpj, cep, numero, idEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function alterarStatus(req, res) {
    var isAtivo = req.body.isAtivo;
    var idFastFood = req.params.idFastFood;

    console.log("aqui")
    fastFoodModel.alterarStatus(isAtivo, idFastFood)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules
module.exports = {
    cadastrarFastFood,
    listar,
    alterarStatus,
    listarPorCep

}