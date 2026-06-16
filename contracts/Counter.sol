// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Counter {
    uint256 public count;

    event Increment(uint256 newCount);
    event Decrement(uint256 newCount);

    function increment() public {
        count += 1;
        emit Increment(count);
    }

    function decrement() public {
        count -= 1;
        emit Decrement(count);
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}
