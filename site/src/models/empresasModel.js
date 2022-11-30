var database = require("../database/config")

function cadastrarEmpresa(nome, cnpj, cep, numero) {
    console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    var instrucao = `
        INSERT INTO empresa (CNPJ, nomeEmpresa, cepEmpresa, telefone) VALUES ('${cnpj}', '${nome}', '${cep}', '${numero}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrarEmpresa
};