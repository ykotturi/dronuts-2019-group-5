// From http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

const app = require('./app')
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
