// Imports
// ========================================================
/**
 * This represents a template base that will be modified as needed in htmlQRClaim/src/App.tsx
 */
 const proofRequest = {
    // 1. UUID for the request
    // - can be anything UUID
    "id": "c811849d-6bfb-4d85-936e-3d9759c7f105",
    // 2. Content type used by the Polygon ID wallet
    // - needs to be constant / does not change
    "typ": "application/iden3comm-plain-json",
    // 3. ?
    "type": "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
    // 4. Payload to send for proof request
    "body": {
        // Function to be executed from the contract for the zk response
        "transaction_data": {
            // - deployed contract address where it will call a specific function
            // <CHANGE THIS>
            "contract_address": "0xE8274D285F08D52fd1DEC6434b9360eB20d1467E",
            // - hash of the function name from the ABI - b68967e2 = submitZKPResponse
            "method_id": "b68967e2",
            // - chain id of the network
            "chain_id": 80001,
            // - network name
            "network": "polygon-mumbai"
        },
        // Reason for the request
        // - Unknown if used or not
        "reason": "airdrop participation",
        // Scope of request and information required
        // - Currently only supports a single array request
        "scope": [
            {

                "id": 1,

                "circuit_id": "credentialAtomicQuerySig",

                "rules": {
                    "query": {
                        "allowed_issuers": [
                            "*"
                        ],
                        "req": {
                            "Date": {
                                "$lt": 20020101
                            }
                        },
                        "schema": {
                            "url": "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/c79191fc-c84e-4203-bb72-4d354839cfb7.json-ld",
                            "type": "KYCagecredential"
                        }
                    }
                }
            }
        ]
    }
};

export default proofRequest;