require('dotenv-vault-core').config()

const http = require('http')
const url = require('url')

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
  res.write(`Hello ${process.env.HELLO}`)
  res.end()
})

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

