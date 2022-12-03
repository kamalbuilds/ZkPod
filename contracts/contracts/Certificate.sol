// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./AccessProtected.sol";

contract Certificate is ERC721URIStorage, AccessProtected {
    using Counters for Counters.Counter;

    Counters.Counter tokenIdCounter;

    event TokenMinted(uint256 tokenId, address indexed owner);
    event TokenLocked(uint256 tokenId, address indexed owner, uint256 time);
    event TokenUnlocked(uint256 tokenId, address indexed owner, uint256 time);

    constructor(string memory name_, string memory symbol_)
        ERC721(name_, symbol_)
    {}

    function mint(address user, string memory uri)
        public
        onlyAdmin
        returns (uint256)
    {
        require(user != address(0), "Invalid User");
        require(bytes(uri).length > 0, "Invalid URI");

        tokenIdCounter.increment();
        uint256 id = tokenIdCounter.current();
        _mint(user, id);
        _setTokenURI(id, uri);

        emit TokenMinted(id, user);
        return id;
    }

    function batchMint(address[] calldata users, string[] calldata uris)
        external
        onlyAdmin
        returns (uint256[] memory)
    {
        require(users.length > 0, "Invalid Parameters");
        require(users.length == uris.length, "Invalid Parameters");

        uint256[] memory ids = new uint256[](users.length);
        for (uint256 i = 0; i < users.length; i++) {
            ids[i] = mint(users[i], uris[i]);
        }

        return ids;
    }

    // ======================= Converting to SBT =======================
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
