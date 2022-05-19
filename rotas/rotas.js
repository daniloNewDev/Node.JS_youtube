//    Depois de baixar o Framework express, atribuir à variável um require('express')
const express = require("express");
//  Atribuir à variável um "express()" método criado na variável com valor da função express()
const app = express();

//    Rotas são os caminhos para a aplicação!   //

//  criando uma rota:
app.get("/", function (req, res) {
  //  usando um método 'get()' com um "/" e uma função de callback com uma mensagem
  res.send("<h1>Shalom chaver!</h1>");
});

app.get("/sobre", function (req, res) {
  res.send("Minha pagina sobre."); //o método "send()" dentro de objeto "res" para enviar um texto.
});

app.get("/blog", function (req, res) {
  res.send("Bem vindo ao meu blog.");
});

app.listen(8081, function () {
  console.log("Servidor rodando na localhost!");
}); // Última linha do código.
