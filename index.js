const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Server is up!!!')
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Listeing to request on port 8000 ...')
})
