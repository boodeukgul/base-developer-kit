// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BaseYieldFarm {
    IERC20 public stakingToken;
    IERC20 public rewardToken;
    
    mapping(address => uint256) public staked;
    mapping(address => uint256) public rewards;

    event Staked(address user, uint256 amount);
    event Harvested(address user, uint256 amount);

    constructor(address _stakingToken, address _rewardToken) {
        stakingToken = IERC20(_stakingToken);
        rewardToken = IERC20(_rewardToken);
    }

    function stake(uint256 _amount) external {
        stakingToken.transferFrom(msg.sender, address(this), _amount);
        staked[msg.sender] += _amount;
        emit Staked(msg.sender, _amount);
    }

    function harvest() external {
        uint256 reward = staked[msg.sender] / 10; // Simple 10% reward example
        rewards[msg.sender] += reward;
        rewardToken.transfer(msg.sender, reward);
        emit Harvested(msg.sender, reward);
    }
}
