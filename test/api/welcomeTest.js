const assert = require("chai").assert;
const app = require("../../assert");

// Asserting
// Cara assert menggunakan Chai
describe("Welcome Test", function () {
  it("app should return welcome message", function () {
    assert.equal(app(), "Welcome to QA Course at MySkill");
  });
});
