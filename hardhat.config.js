require("@nomiclabs/hardhat-waffle");

const projectId = "cdd87d39da704aabadd708080cffaf4a"

module.exports = {

  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url : 'https://polygon-mumbai.infura.io/v3/${projectId}'
      accounts: {}
    },
    mainnet: {
      url : 'https://polygon-mainnet.infura.io/v3/${projectId}'
      accounts: {}
    }
  }
  solidity: "0.8.4",
};
