/*    Sequelize trabalha com um padrão chamado ORM (Mapeamento Objeto Relacional);

      Serve pra deixar mais fácil o acesso aos Bancos de Dados usando JavaScript no Back-end;

      Sequelize trabalha com Promisses (async e await);

  Conectando-se a um Banco de Dados usando o Sequelize:
*/

//cria uma variável const que requisita o 'squelize';
const Sequelize = require("sequelize");
//cria outra constante com s minúsculo que recebe o "new Sequelize() que recebe parâmetros descritos abaixo;"
const sequelize = new Sequelize("teste", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});
//  Dentro do parâmetro de "new sequelize()" é que se faz a comunicação com o banco de dados usando:

//  No primeiro parâmetro do new Sequelize é pedido o nome da TABLE;
//  O segundo parâmetro pede o Usuário;
//  No terceiro parâmetro a senha de acesso;
//  No quarto parâmetro é requerido um "objeto JSON" com o "host" para servidor que hospéda o Banco de Dados, e o "dialect" que aponta qual sistema Banco de Dados irá conectar-se(MySQL)

//

//  Testando
sequelize
  .authenticate()
  .then(function () {
    console.log("Conectado com sucesso!");
  })
  .catch(function (erro) {
    console.log("Falha ao se conectar. " + erro);
  });
