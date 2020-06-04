const express = require("express");
const server = express();

//deixando styles e script, a pasta public
server.use(express.static('public'))

//configurar caminho da aplicação, dar uma rota pra porta 3000
//pagina home
// req : requisição
// res : resposta
server.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

server.get('/create-point', (req, res) => {
  res.sendFile(__dirname + '/views/create-point.html')
})

server.get('/search-result', (req, res) => {
  res.sendFile(__dirname + '/views/search-result.html')
})

//ligar o servidor
server.listen(3000);