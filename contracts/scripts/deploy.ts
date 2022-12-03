import { ethers } from "hardhat";

async function main() {
    const Certificate = await ethers.getContractFactory("Certificate");
    const certificate = await Certificate.deploy("Certificate", "CERT");

    await certificate.deployed();

    console.log(`contract deployed to ${certificate.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
