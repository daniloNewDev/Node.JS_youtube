//    Criando Model de postagens e usuários   //

const Sequelize = require("sequelize");
const sequelize = new Sequelize("teste", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
});

const postagem = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  },
});

const usuario = sequelize.define("usuarios", {
  nome: {
    type: Sequelize.STRING,
  },
  sNome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});

usuario.create({
  nome: "Danilo",
  sNome: "Leite",
  idade: 36,
  email: "danilo@newdev.com",
});
