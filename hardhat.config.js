require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  networks: {
    base: {
      url: "https://mainnet.base.org",
      accounts: [] 
    },
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [] 
    },
    hardhat: {
      chainId: 31337
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
