const express = require("express");
const server = express();

// pegando o banco de dados
const db = require('./database/db.js')

//deixando styles e script, a pasta public
server.use(express.static('public'))

//habilitar o req.body
server.use(express.urlencoded({ extended: true }))

//utilizando o template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})


//configurar caminho da aplicação, dar uma rota pra porta 3000
//pagina home
// req : requisição
// res : resposta

//versao para só enviar para o site, o dirname se faz necessário porque não esta renderizado pelo nunjucks
// server.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html')
// })

// renderizar o html puro
server.get('/', (req, res) => {
  res.render('index.html')
})

server.get('/create-point', (req, res) => {
  // req.query : querry strings da url
  // console.log(req.query)

  return res.render('create-point.html', {saved: true})
})

server.post('/savepoint', (req, res) => {
  // console.log(req.body)

  // inserir dados na tabela
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
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,  
    req.body.items
  ]

  function afterInsertData(err) {
    if (err) {
      console.log(err)
      return res.send('Erro no cadastro!')
    }
    console.log('Cadastrado com sucesso')
    console.log(this)

    return res.render('create-point.html', { saved: true})
  }

  //name.run é pra rodar o dado
  db.run(query, values, afterInsertData)
})


server.get('/search-result', (req, res) => {
  //pegar os dados do banco de dados pra transformar o html em fluido
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      console.log(err)
    }

    const total = rows.length

    //mostrar a página html com os dados do db
    return res.render('search-result.html', { places: rows, total: total })
  })

})

//ligar o servidor
server.listen(3000);