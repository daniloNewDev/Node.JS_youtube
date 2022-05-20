const express = require("express");
const app = express(); //  Aplicação Web
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("views engine", "handlebars");

const sequelize = new Sequelize("teste", "root", "ShalomMySQLSS22", {
  host: "localhost",
  dialect: "mysql",
});

app.get("/cad", function (req, res) {
  res.send("rota de cadastro de posts!");
});

app.listen(8081, (req, res) => {
  console.log("Servidor rodando!");
});
