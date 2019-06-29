const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect(function (err) {
    if (err) return console.log(err);
    console.log('conectou!');
    createTable(connection);
    addRows(connection)
})


function createTable(connection) {

    const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "Nome varchar(150) NOT NULL,\n" +
        "CPF char(11) NOT NULL,\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    connection.query(sql, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela!');
    });
}

function addRows(connection){
  const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
  const values = [
        ['teste1', '12345678901'],
        ['teste1', '09876543210'],
        ['teste3', '12312312399']
      ];
    connection.query(sql, [values], function (error, results, fields){
          if(error) return console.log(error);
          console.log('adicionou registros!');
          conn.end();//fecha a conexão
      });
}