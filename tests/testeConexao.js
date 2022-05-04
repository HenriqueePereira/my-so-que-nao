// 1 - Importar o sequelize
const sequelize = require("sequelize");

// 2 - Elencar os dados para conexão com o BD (usuario, senha, porta, endereco...)
const config = {
    "username": "root",
    "password": "",
    "host": "localhost",
    "port": "3306",
    "dialect": "mysql",
    "database": "escola"
}

// 3 - Criar a conexão com o banco de dados
const conexao = new sequelize(config);

// 4 - Executar uma consulta contra o BD (SELECT * FROM alunos);
const promiseAlunos = conexao.query(
    'SELECT * FROM alunos',
    sequelize.QueryTypes.SELECT
);

// 5 - Executar uma consulta contra o BD (SELECT * FROM turmas);
const promiseTurmas = conexao.query(
    'SELECT * FROM turmas',
    sequelize.QueryTypes.SELECT
);

// 6 - Criando uma promessa de que todas as promessas serão cumpridas.
const promiseAll = Promise.all([promiseAlunos, promiseTurmas]);

promiseAll.then(
    dados => {
        console.log(dados[0], dados[1]);
        conexao.close();
    }
)