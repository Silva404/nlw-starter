// importara dependência do sqlite3
const sqlite3 = require('sqlite3').verbose()

//criar o objeto para manuzear o banco de dados
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db
//utilizando o banco de dados
// db.serialize(() => {
//   //comandos SQL

//   //1 criar uma tabela 
//   db.run(`
//       CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//   );
//   `)


//   // 2 inserir dados na tabela
//   const query = `
//       INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//       ) VALUES (
//         ?,?,?,?,?,?,?
//       );
// `
//   const values = [
//     'https://images.unsplash.com/photo-1558583055-d7ac00b1adca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
//     'Papersider',
//     'Guilherme Gemballa, Jardim América',
//     'N° 260',
//     'Santa catarina',
//     'Rio do Sul',
//     'Resíduos Eletrônicos, Lâmpadas'
//   ]

//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err)
//     }
//     console.log('Cadastrado com sucesso')
//     console.log(this)
//   }


//   //não vou mais usar, ele iria inserir os dados na tabela mas são valores estáticos
//   //name.run é pra rodar o dado
//   db.run(query, values, afterInsertData)



//   // 3 consultar os dados
//   db.all(`SELECT * FROM places`, function (err, rows) {
//     if (err) {
//       return console.log(err)
//     }
//     console.log('Aqui estão seus dados')
//     console.log(rows)
//   })


//   // 4 deletar um dado
//   // tentar adicionar isso ao site, para que quem colocou o anuncio, possa também removelo
//   // ou caso tenha colocado algum dado errado e queira alteralo
//   // db.run(`DELETE  FROM places WHERE id = ?`, [1], function (err) {
//   //   if (err) {
//   //     return console.log(err)
//   //   }
//   //   console.log('Dados deletado com sucesso')
//   // })


// })

