const { expect } = require("chai");

describe("Counter", function () {
  it("Should increment and decrement correctly", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.waitForDeployment();

    await counter.increment();
    expect(await counter.getCount()).to.equal(1);

    await counter.decrement();
    expect(await counter.getCount()).to.equal(0);
  });
});
