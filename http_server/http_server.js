/*Criando servidor HTTP:
    

*/
//  Atribuir a variável um require("http");
const http = require("http");

//  Usar o método createServer(com uma função de callback que envie uma mensagem)
http
  .createServer(function (req, res) {
    res.end("Shalom!");
  })
  .listen(8081); //  .listen(para escutar a port atribuída neste parâmetro)

console.log("Servidor rodando."); // Mensagem resposta no terminal.
