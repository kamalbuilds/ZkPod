// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/erc721/erc721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./lib/GenesisUtils.sol";
import "./interfaces/ICircuitValidator.sol";
import "./verifiers/ZKPVerifier.sol";

contract ERC721Verifier is ERC721, ZKPVerifier {
    using Counters for Counters.Counter;
    uint64 public constant TRANSFER_REQUEST_ID = 1;

    Counters.Counter private _tokenIds;

    // mapping(uint256 => address) public idToAddress;
    // mapping(address => uint256) public addressToId;

    constructor(string memory name_, string memory symbol_)
        ERC721(name_, symbol_)
    {}

    function _beforeProofSubmit(
        uint64, /* requestId */
        uint256[] memory inputs,
        ICircuitValidator validator
    ) internal view override {
        // check that challenge input of the proof is equal to the msg.sender
        address addr = GenesisUtils.int256ToAddress(
            inputs[validator.getChallengeInputIndex()]
        );
        require(
            _msgSender() == addr,
            "address in proof is not a sender address"
        );
    }

    function _afterProofSubmit(
        uint64 requestId,
        uint256[] memory inputs,
        ICircuitValidator validator
    ) internal override {
        require(
            requestId == TRANSFER_REQUEST_ID && addressToId[_msgSender()] == 0,
            "proof can not be submitted more than once"
        );

        uint256 id = inputs[validator.getChallengeInputIndex()];
        // execute the airdropping of NFT
        if (idToAddress[id] == address(0)) {
            super._mint(_msgSender(), _tokenIds.current());
            _tokenIds.increment();
            // addressToId[_msgSender()] = id;
            // idToAddress[id] = _msgSender();
        }
    }

    function _beforeTokenTransfer(
        address, /* from */
        address to,
        uint256 /* amount */
    ) internal view override {
        require(
            proofs[to][TRANSFER_REQUEST_ID] == true,
            "only identities who provided proof are allowed to receive tokens"
        );
    }

    // ================== converting to sbt ========================
    function transfer(
        address from,
        address to,
        uint256 tokenId
    ) public virtual {}

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {}

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {}

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public virtual override {}

    function approve(address to, uint256 tokenId) public virtual override {}

    function setApprovalForAll(address operator, bool _approved)
        public
        virtual
        override
    {}
}
