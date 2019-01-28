import app from "./app";

const port = 3000;
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});

export default server;
