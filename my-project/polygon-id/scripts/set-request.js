async function main() {
  // The CredentialAtomicQuerySigValidator contract is used to verify any claim-related zk proof generated by user using the credentialAtomicQuerySig circuit.
  // https://0xpolygonid.github.io/tutorials/contracts/overview/#credentialatomicquerysigvalidator
  const circuitId = "credentialAtomicQuerySig";

  // CredentialAtomicQuerySigValidator Mumbai address
  // already deployed contract add that does the validation
  const validatorAddress = "0xb1e86C4c687B85520eF4fd2a0d14e81970a15aFB";

  // Query language: https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/
  const ageQuery = {
    schema: ethers.BigNumber.from("210459579859058135404770043788028292398"),
    slotIndex: 2,
    operator: 2,
    value: [20010101, ...new Array(63).fill(0).map((i) => 0)],
    circuitId,
  };

  // add the address of the contract just deployed
  ERC721VerifierAddress = "0xecf178144CceC09417412D66E2ecC8a2841eE228";

  let erc721Verifier = await hre.ethers.getContractAt(
    "ERC721Verifier",
    ERC721VerifierAddress
  );

  const requestId = await erc20Verifier.TRANSFER_REQUEST_ID();

  try {
    await erc721Verifier.setZKPRequest(requestId, validatorAddress, ageQuery);
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
