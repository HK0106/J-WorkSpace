require ("@nomicfoundation/hardhat-toolbox");
require ("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.7.1",
    networks: {
        bsctest: {
            url: "http://data-seed-prebsc-2-s2.binance.org:8545",
            account: [process.env.PRIVATE_KEY]
        }
    },
    etherscan: {
        apiKey: process.env.API_KEY
    }
};
