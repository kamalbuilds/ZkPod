async function main() {
    // The CredentialAtomicQuerySigValidator contract is used to verify any claim-related zk proof generated by user using the credentialAtomicQuerySig circuit.
    // https://0xpolygonid.github.io/tutorials/contracts/overview/#credentialatomicquerysigvalidator
    const circuitId = "credentialAtomicQuerySig";

    // CredentialAtomicQuerySigValidator Mumbai address
    // already deployed contract add that does the validation
    const validatorAddress = "0xb1e86C4c687B85520eF4fd2a0d14e81970a15aFB";

    //custom
    const schemaHash = "c6cd9c4ea01df58ef5386515a3e3acc0"; // extracted from PID Platform

    const schemaEnd = fromLittleEndian(hexToBytes(schemaHash));

    // Query language: https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/

    const query = {
        schema: ethers.BigNumber.from(schemaEnd),
        slotIndex: 2, // slotIndex2 indicates the value stored as Attribute 1 inside the claim
        operator: 4,
        value: [2, 3, ...new Array(62).fill(0).map((i) => 0)],
        circuitId,
    };

    // add the address of the contract just deployed
    ERC721VerifierAddress = "";

    let erc721Verifier = await hre.ethers.getContractAt(
        "ERC721Verifier",
        ERC721VerifierAddress
    );

    const requestId = await erc721Verifier.TRANSFER_REQUEST_ID();

    try {
        await erc721Verifier.setZKPRequest(requestId, validatorAddress, query);
        console.log("Request set");
    } catch (e) {
        console.log("error: ", e);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });