import {ethers} from "hardhat";

async function main () {
    const [deployer] = await ethers.getSigners();

    console.log("deploying contracts with account: ", deployer.address);

    console.log("Account balance: ", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("Floppy");

    const token = await Token.deploy();
}

main().then(() => process.exit(0)).catch(
    (error) => {
        console.error(error);
        process.exit(1);
    }
)
