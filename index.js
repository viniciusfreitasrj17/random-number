const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

port = process.env.PORT || 80

app.use(express.json())

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

app.get('/', (req, res) => {
  const { max, min, limit } = req.query

  const data = []
  const _limit = limit ? parseInt(limit) : 10
  const _min = min ? parseInt(min) : 0
  const _max = max ? parseInt(max) : 100

  for (let i = 0; i < _limit; i++) {
    const ran = getRandomArbitrary(_min, _max)
    data.push(ran.toString())
  }

  res.setHeader('Content-Type', 'text/plain');

  return res.send(`${[...data]}`.replace(/,/g, ' '))
})


app.listen(port, () => console.log('Run...'))