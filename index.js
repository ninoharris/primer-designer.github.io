import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.end('Boom baby')
})

app.listen(9000, function() {
  console.log('app is listening on port 9000')
})