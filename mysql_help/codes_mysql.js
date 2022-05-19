/*////Tabela = TABLE

      O MySQL armazena dados em formato de tabelas.
      Colunas e linhas;

      As colunas guardam diferentes tipos de dados. Por exemplo, em uma tabela de nome "users" a "Coluna Nome" guarda o nome do usuário, a "Coluna idade" guarda a idade do usuário, e assim por diante.

      Tipos de Dados:

        text;
        char;
        int;
        floot;
        date;
        blob.

///////////////////////////////////////////////////

    mysql no terminal:
      ou mysql -h localhost -u root -p
        inserir senha do root.

    Comando SHOW DATABASE;
      mostra os bancos de dados existentes.

    CREATE DATABASE nomeDoBanco;
      cria um novo Banco de Dados.

    USE nomeDoBanco;
      para acessar o Banco.
      retorna no terminal "Databasechanged" - confirmando que o Banco foi acessado.

    SHOW TABLES;
      para verificar quais tabelas existem neste Banco.

    CREATE TABLE;
      cria tabelas:
        CREATE TABLE nomdeDaTabela(
          nome VARCHAR(50),   "parâmetro indica o número de caracteres"
          email VARCHAR(100),    "VARCHAR são caracteres tipo string"
          idade INT    "INT são números decimais"
        )
    
    DESCRIBE nomeDaTabela;
      retorna a estrutura da tabela.
      
    SELECT * FROM nomeDaTabela;
      retorna todos os dados da tabela específicada.

    SELECT * FROM usuarios WHERE idade >= 18;
    SELECT * FROM usuarios WHERE nome = "Danilo";
        retorna resposta da consulta de acordo com o operador lógico.

    UPDATE nomeDaTabela SET nome = "Nome de Teste" WHERE nome = "Nenezinho Navarro";
          atualizar dados de tabelas. Nunca usar o DELETE sem o WHERE!
          
    INSERT INTO usuarios(nome, idade, email) VALUES(
                                              "Danilo Leite",
                                              36,
                                              "danilo@newdev.com"
                                            );
    
      Os parâmetros e valores respectivos estão dispostos por ordem de inserção.
      No parâmetro são inseridos os dados. 
      para inserir novos dados ao TABLE.

    DELETE FROM nomeDaTabela;
      Deleta TODA A TABELA!!!

    DELETE FROM nomeDaTabela WHERE nome = "Danilo";
      serve para deletar registros dentro de uma tabela.



*/
