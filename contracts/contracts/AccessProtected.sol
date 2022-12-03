// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Context.sol";

abstract contract AccessProtected is Context, Ownable {
    mapping(address => bool) internal _admins;

    event AdminAccessSet(address _admin, bool _enabled);

    /**
     * @notice Set Admin Access
     *
     * @param admin - Address of Admin
     * @param enabled - Enable/Disable Admin Access
     */
    function setAdmin(address admin, bool enabled) external onlyOwner {
        _admins[admin] = enabled;
        emit AdminAccessSet(admin, enabled);
    }

    /**
     * @notice Set Admin Access
     *
     * @param admins - Address of Admins
     * @param accesses - Enable/Disable Admin Access
     */
    function setBatchAdmin(address[] memory admins, bool[] memory accesses)
        external
        onlyOwner
    {
        for (uint256 i = 0; i < admins.length; i++) {
            _admins[admins[i]] = accesses[i];
            emit AdminAccessSet(admins[i], accesses[i]);
        }
    }

    /**
     * @notice Check Admin Access
     *
     * @param admin - Address of Admin
     * @return whether user has admin access
     */
    function isAdmin(address admin) public view returns (bool) {
        return _admins[admin];
    }

    /**
     * Throws if called by any account other than the Admin.
     */
    modifier onlyAdmin() {
        require(
            _admins[_msgSender()] || _msgSender() == owner(),
            "Caller does not have Admin Access"
        );
        _;
    }
}
