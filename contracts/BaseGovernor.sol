// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";

contract BaseGovernor is Governor, GovernorCountingSimple, GovernorVotes {
    constructor(IVotes _token)
        Governor("BaseGovernor")
        GovernorVotes(_token)
    {}

    function votingDelay() public pure override returns (uint256) {
        return 1 days;
    }

    function votingPeriod() public pure override returns (uint256) {
        return 7 days;
    }

    function quorum(uint256) public pure override returns (uint256) {
        return 1000e18; // 1000 tokens
    }
}
