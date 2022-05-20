const express = require("express");
const app = express();

//    Handlebars é Template Engine. Ele dispõe de diversas funcionalidades ao HTML, como Estruturas de repetição, Estruturas Condicionais, e inclusive Exibir Dados que vem do Back-end por meio do HTML.

const handlebars = express("express-handlebars"); //A const handlebars recebe o módulo express-handlebars;
const Sequelize = require("sequelize");

//  Configurar o handlebars como Template Engines:
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

/*  Criando na raíz do projeto uma pasta chamada "views";

      dentro de "views" cria-se uma pasta chamada "layouts";
      dentro de "layouts", cria-se então um arquivo chamado main.handlebars.
        Dentro de main.handlebars cria-se uma estrutura HTML e no conteúdo 'body' é criado "{{body}}".
*/

//  Agora cria-se uma Conexão com o Banco de Dados MySQL:
const sequelize = new Sequelize("teste", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
});

app.listen(8081, (req, res) => {
  console.log("Servidor rodando na porta 8081.");
});
