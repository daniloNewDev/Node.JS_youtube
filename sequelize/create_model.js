//    Criando Model de postagens e usuários   //

const Sequelize = require("sequelize");
const sequelize = new Sequelize("teste", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

//        Model de postagens:

/*    Atribuindo a variável "Postagens" o modelo definido por "sequelize.define()"

        Dentro do parâmetro do "sequelize.define()" é atribuído dois parâmetros:
          o nome da tabela entre aspas; "postagens",
          um JSON com um campo de conteúdo da tabela.
*/

const Postagem = sequelize.define("postagens", {
  //    nomeDaColuna1: { type: Sequelize.tipoDeDado},nomeDaColuna2: { type: Sequelize.tipoDeDado}...
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  },
});
//  Depois de montar o model, é necessário declarar o nomeDoModel.sync({force: true})
// Usuarios.sync({force: true})

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

Usuario.create({
  nome: "Samuel",
  sNome: "Leite",
  idade: 2,
  email: "samys@newdev.com",
});

//  Para inserir dados a uma tabela é declarado Objeto.create({}) com chave onde fica alocado o conteúdo Usuario;

// usuarios.sync({force: true})

/*Usuario.create({
  nome: "Danilo",
  sNome: "Leite",
  idade: 36,
  email: "danilo@newdev.com",
});*/
