const express = require("express");
const app = express();

//    Rotas são os caminhos para a aplicação!   //

//  enviar um arquivo(nesse caso HTML), usando a função "sendFile()":
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html"); //  usando uma variável chamada "__dirname" para retornar o diretório do arquivo
}); // usando barra "nomeDaPasta" e barra "NomeDoArquivo"

app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function (req, res) {
  res.send("Bem vindo ao meu blog.");
});

app.listen(8081, function () {
  console.log("Servidor rodando na localhost!");
}); // Última linha do código.
