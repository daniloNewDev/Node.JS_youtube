//    Criando Model de postagens e usuários   //

const Sequelize = require("sequelize");
const sequelize = new Sequelize("teste", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
});

const Postagem = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  },
});

const Usuario = sequelize.define("usuarios", {
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

// usuarios.sync({force: true})
