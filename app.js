// From http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

module.exports = app
