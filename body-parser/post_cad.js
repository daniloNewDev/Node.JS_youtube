const express = require("express");
const app = express(); //  Aplicação Web
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const Post = require("../models/Post");

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//Body-parser:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = new Sequelize("postagens", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

app.get("/", function (req, res) {
  Post.all().then(function (posts) {
    res.render("home");
  });
});

app.get("/cad", function (req, res) {
  res.render("formulario");
});

app.post("/add", function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(function () {
      res.redirect("/");
      //res.end("Post criado com sucesso");
    })
    .catch(function (erro) {
      res.end("Err ocorrido " + erro);
    });
});

app.listen(8081, () => {
  console.log("Servidor rodando!");
});
