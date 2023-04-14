// SPDX-License-Identifier: MIT

pragma solidity 0.8.18;

import "./tokens/BaseToken.sol";

contract BaseBridge {
  event Burn(address from, uint amount, uint nonce);

  BaseToken private token;

  uint private genNonce;

  address public admin;

  modifier onlyAdmin() {
    require(msg.sender == admin,"Not an admin");
    _;
  }

  constructor() {
    admin = msg.sender;
  }

  function setToken(address baseToken) public onlyAdmin {
    require(address(baseToken) != address(0), "BaseToken is zero address");
    token = BaseToken(baseToken);
  }

  function bridgeToken(address to, uint amount, uint nonce) external onlyAdmin {
    token.mint(to, amount, nonce);
  }
  
}