// importara dependência do sqlite3
const sqlite3 = require('sqlite3').verbose()

//criar o objeto para manuzear o banco de dados
const db = new sqlite3.Database('./src/database/database.db')

//utilizando o banco de dados
db.serialize(() => {
  //comandos SQL

  //1 criar uma tabela 
  db.run(`
      CREATE TABLE IF NOT EXISTS places (
        id INTENGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        adress2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
  );
  `)


  // 2 inserir dados na tabela
  const query = `
      INSERT INTO places (
        image,
        name,
        adress,
        adress2,
        state,
        city,
        items
      ) VALUES (
        ?,?,?,?,?,?,?
      );
`
  db.run(query, )

  // 3 consultar os dados


  // 4 deletar um dado
  // tentar adicionar isso ao site, para que quem colocou o anuncio, possa também removelo
})
//parei em 29:50