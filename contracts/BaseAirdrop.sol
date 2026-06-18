// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BaseAirdrop is Ownable {
    IERC20 public token;
    mapping(address => bool) public claimed;

    event AirdropClaimed(address claimant, uint256 amount);

    constructor(address _token) Ownable(msg.sender) {
        token = IERC20(_token);
    }

    function claim() external {
        require(!claimed[msg.sender], "Already claimed");
        claimed[msg.sender] = true;
        uint256 amount = 1000 * 10 ** 18; // 1000 tokens
        token.transfer(msg.sender, amount);
        emit AirdropClaimed(msg.sender, amount);
    }

    function withdrawRemaining() external onlyOwner {
        token.transfer(owner(), token.balanceOf(address(this)));
    }
}
