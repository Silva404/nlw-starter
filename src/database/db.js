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
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
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
        address,
        address2,
        state,
        city,
        items
      ) VALUES (
        ?,?,?,?,?,?,?
      );
`
  const values = [
    'https://images.unsplash.com/photo-1542739674-b449a8938b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    'Colectoria',
    'Guilherme Gemballa, Jardim América',
    'N° 260',
    'Santa catarina',
    'Rio do Sul',
    'Resíduos Eletrônicos, Lâmpadas'
  ]

  function afterInsertData(err) {
    if(err){
      return console.log(err)
    } 
    console.log('Cadastrado com sucesso')
    console.log(this)
  }

  db.run(query, values, afterInsertData)

  // 3 consultar os dados


  // 4 deletar um dado
  // tentar adicionar isso ao site, para que quem colocou o anuncio, possa também removelo
})