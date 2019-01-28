// From http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

export default app;
