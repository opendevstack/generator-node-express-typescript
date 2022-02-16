import * as chai from "chai";
import * as index from "../src/index";

const expect = chai.expect;

describe("index", () => {
  it("should provide Greeter", () => {
    expect(index.Greeter).to.not.be.undefined;
  });
});
