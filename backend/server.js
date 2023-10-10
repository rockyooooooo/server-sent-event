const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Access-Control-Allow-Origin": "*"
  })
  res.end('data: Hello world!\n\n')
})
server.listen(3000)
