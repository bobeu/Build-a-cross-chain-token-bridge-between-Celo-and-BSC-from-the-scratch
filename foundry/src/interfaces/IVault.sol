// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

interface IVault {
  // Staker's profile data
  struct Staker {
    uint depositTime;
    uint celoAmount;
    uint miningSpeed;
    address account;
    bool isCompounded;
  }

  function stake() external payable returns(bool);
  function unstake() external returns(bool);
  function stakeOnBehalf(address who) external payable returns(bool);
  function compoundStaking() external payable returns(bool);
}