const express = require("express");
const app = express(); //  Aplicação Web
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//Body-parser:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = new Sequelize("teste", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});
//    Rota de cadastro de Posts:
app.get("/cad", function (req, res) {
  res.render("formulario");
});
//  criando uma rota com o verbo "post", será acessada usando o método "post" na tag do formulário.
app.post("/add", function (req, res) {
  //  uma rota de tipo POST não pode ser acessada pela URL;
  res.send(" Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo);
});

app.listen(8081, () => {
  console.log("Servidor rodando!");
});
