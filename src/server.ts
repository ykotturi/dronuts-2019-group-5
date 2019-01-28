// From http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

import app from "./app";

const port = 3000;
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default server;
