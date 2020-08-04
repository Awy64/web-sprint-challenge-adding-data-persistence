const server = require('./server')

const port = process.env.PORT || 1337

server.listen(port, () => {
  console.log(`*** server started at http://localhost:${port}`)
})