const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/nghia', (req, res) => {
    res.send('Hello World! from Quoc Nghia')
  })
  app.get('/cua-so', (req, res) => {
    res.send('Ánh sáng từ cửa sổ chiếu vào')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})