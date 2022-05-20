//      Criando uma rota de cadastro de Posts     //

const express = require("express");
const app = express(); //  Aplicação Web
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const sequelize = new Sequelize("teste", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

/*  Cria-se um arquivo "formulario.handlebars" na pasta "views";
    
      Em "formulario.handlebars" criar um formulário;
      este formulário está alocado no elemento "{{{body}}}" do arquivo "main.handlebars".
*/

//  Criando uma Rota (área de cadastros de posts):
app.get("/cad", function (req, res) {
  res.render("formulario"); // referente ao arquivo "formulario.handlebars"
  //  para testar o funcionamento: res.send("rota de cadastro de posts!");
});

app.listen(8081, (req, res) => {
  console.log("Servidor rodando!");
});
