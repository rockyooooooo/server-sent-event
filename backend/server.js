const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Access-Control-Allow-Origin": "*"
  })

  // setInterval(() => {
  //   res.write(`data: ${new Date()}\n\n`)
  // }, 1000)

  res.write('retry: 1000\n\n')

  res.write('event: hello\n')
  res.write('data: Hello world!\n\n')

  res.write('event: json\n')
  res.write('data: {\n')
  res.write('data: "msg": "YOYOYO!"\n')
  res.write('data: }\n\n')

  res.write('event: bye\n')
  res.end('data: Bye world!\n\n')
})
server.listen(3000)
