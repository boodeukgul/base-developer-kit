// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BaseStaking {
    IERC20 public token;
    mapping(address => uint256) public stakedAmount;
    mapping(address => uint256) public stakingTime;

    event Staked(address user, uint256 amount);
    event Withdrawn(address user, uint256 amount);

    constructor(address _token) {
        token = IERC20(_token);
    }

    function stake(uint256 _amount) public {
        require(_amount > 0, "Amount must be > 0");
        token.transferFrom(msg.sender, address(this), _amount);
        stakedAmount[msg.sender] += _amount;
        stakingTime[msg.sender] = block.timestamp;
        emit Staked(msg.sender, _amount);
    }

    function withdraw() public {
        uint256 amount = stakedAmount[msg.sender];
        require(amount > 0, "No staked tokens");
        stakedAmount[msg.sender] = 0;
        token.transfer(msg.sender, amount);
        emit Withdrawn(msg.sender, amount);
    }
}
