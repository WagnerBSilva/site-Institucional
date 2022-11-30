var totemModel = require("../models/totemModel");

var sessoes = [];



function listar(req, res) {
    var idEmpresa = req.params.idEmpresa;
    totemModel.listar(idEmpresa)
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

function listarPorId(req, res) {
    var id = req.params.id;

    totemModel.listarPorId(id)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json("Resultado encontrado! " + resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado! ")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarPorUsuario(req, res) {
    var usuario = req.params.usuario;

    totemModel.listarPorUsuario(usuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json("Resultado encontrado! " + resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado! ")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idTotem = req.body.idTotemServer;
    var idFastFood = req.body.idFastFoodServer;
    var limiteProcessador = req.body.limiteProcessadorServer;
    var limiteTemperatura = req.body.limiteTemperaturaServer;
    var limiteRam = req.body.limiteRamServer;
    var usuario = req.body.usuarioServer;
    var senha = req.body.senhaServer;
    
    

    // Faça as validações dos valores
    if  (idTotem == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        totemModel.cadastrar(idTotem, idFastFood,limiteProcessador,limiteTemperatura, limiteRam, usuario, senha)
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
    var idTotem= req.params.idTotem;

    console.log("aqui")
    totemModel.alterarStatus(isAtivo, idTotem)
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


module.exports = {
    cadastrar,
    listar,
    alterarStatus,
    listarPorId,
    listarPorUsuario

}