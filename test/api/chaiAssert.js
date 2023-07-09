const { expect } = require("chai");
const request = require("supertest");
const baseUrl = require("../../env");
const DATA = require("../../data/userData");

describe("Post Request Example", () => {
  const response = request(baseUrl()).post("/user").send(DATA.CREATE_USER_DATA);

  it("Response status equal to 200", async () => {
    // Check response status harus sama dengan 200
    expect((await response).status).to.equal(200);
  });

  it("Response body to haveOwnProperty", async () => {
    // Expect dalam body response terdapat value 'message'
    expect((await response).body).to.haveOwnProperty(`message`);
  });

  //Reporting in MochaAwesome
});
