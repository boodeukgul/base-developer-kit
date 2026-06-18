const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  console.log("Deployer address:", deployer.address);
  console.log("Use this address to request test ETH from Base faucets");
  console.log("\nFaucet links:");
  console.log("- https://www.base.org/faucet");
  console.log("- https://sepoliafaucet.com/");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
