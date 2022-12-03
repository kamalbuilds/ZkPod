const { ethers } = require("hardhat");

async function main() {
    const verifierContract = "ERC721Verifier";
    const verifierName = "Institution";
    const verifierSymbol = "INST";
    const ERC721Verifier = await ethers.getContractFactory(verifierContract);
    const erc721Verifier = await ERC721Verifier.deploy(
        verifierName,
        verifierSymbol
    );

    await erc721Verifier.deployed();
    console.log(verifierName, " tx hash:", erc721Verifier.address);
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
