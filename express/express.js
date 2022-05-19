//    Depois de baixar o Framework express, atribuir à variável um require('express')
const express = require("express");
//  Atribuir à variável um "express()" método criado na variável com valor da função express()
const app = express();

app.listen(8081, function () {
  console.log("Servidor rodando na localhost!");
}); // Última linha do código.
