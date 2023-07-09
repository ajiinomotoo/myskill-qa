const request = require("supertest");
const baseUrl = require("../../env");

describe("Post Request Example", () => {
  it("Succes Create User", async () => {
    const response = request(baseUrl()).post("/user").send({
      id: 12345,
      username: "aji",
      firstName: "aji",
      lastName: "aji",
      email: "aji@mailsac.com",
      password: "password",
      phone: "08123143",
      userStatus: 1,
    });
    console.log((await response).status);
    console.log((await response).body);
  });
});
