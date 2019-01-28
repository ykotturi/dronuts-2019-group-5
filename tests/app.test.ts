// From http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

import request from "supertest";
import app from "../src/app";

describe("Test the root path", () => {
  it("Hello API Request", async () => {
    const result = await request(app).get("/");
    expect(result.text).toEqual("Hello World!");
    expect(result.status).toEqual(200);
  });
});
