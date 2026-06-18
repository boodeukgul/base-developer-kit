// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract BaseBridgeHelper {
    event Bridged(address from, address to, uint256 amount, string network);

    function logBridge(
        address to, 
        uint256 amount, 
        string calldata targetNetwork
    ) external {
        emit Bridged(msg.sender, to, amount, targetNetwork);
    }
}
