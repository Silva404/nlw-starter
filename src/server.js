const express = require("express");
const server = express();

//deixando styles e script, a pasta public
server.use(express.static('public'))


//utilizando o template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache:true
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
  return res.render('create-point.html')
})

server.get('/search-result', (req, res) => {
  return res.render('search-result.html')
})

//ligar o servidor
server.listen(3000);