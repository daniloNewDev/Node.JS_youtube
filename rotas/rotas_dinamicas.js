const express = require("express");
const app = express();

//    Rotas são os caminhos para a aplicação!   //

//  criando uma rota:
app.get("/", function (req, res) {
  res.send("<h1>Shalom chaver!</h1>");
});

app.get("/sobre", function (req, res) {
  res.send("Minha pagina sobre.");
});

app.get("/blog", function (req, res) {
  res.send("Bem vindo ao meu blog.");
});

//  Rota Olá:
//    para criar uma "Rota Dinâmica" por meio de "parâmetros"
app.get("/ola/:nome/:cargo", function (req, res) {
  //  Ao digitar os params o protocolo HTTP envia ao server Node.js
  //    parâmetro ":nome"; p´rox. parâmetro "/:cargo"
  res.send(`<h1>Shalom, ${req.params.nome}, o novo ${req.params.cargo}!</h1>`); //   O objeto "req" é usado para fazer a requisição dos params (nome e cargo).
  //    'send()' só pode ser usado uma única vez.
});

app.listen(8081, function () {
  console.log("Servidor rodando na localhost!");
}); // Última linha do código.
