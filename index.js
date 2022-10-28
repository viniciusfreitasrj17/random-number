const express = require('express')

const app = express()

port = process.env.PORT || 80

app.use(express.json())

function getRandomArbitrary(min = 0, max = 100) {
  return parseInt(Math.random() * (max - min) + min);
}

app.get('/', (req, res) => {
  const { max, min, limit } = req.query

  const data = []
  const _limit = limit || 10

  for (let i = 0; i < _limit; i++) {
    const ran = getRandomArbitrary(parseInt(min), parseInt(max))
    data.push(ran.toString())
  }

  res.setHeader('Content-Type', 'text/plain');

  return res.send(`${[...data]}`.replace(/,/g, ' '))
})


app.listen(port, () => console.log('Run...'))