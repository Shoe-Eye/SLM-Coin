// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.4;
pragma abicoder v2;

import "./SLMToken.sol";

contract SLMSwap {
    address private slmTokenAddress;

    constructor(address slmToken_) {
        slmTokenAddress = slmToken_;
    }

    function exchangeRate() public view returns (uint) {
        
        SLMToken slmToken = SLMToken(slmTokenAddress);
        uint slmBalance = slmToken.balanceOf(address(this));
        uint ethBalance = address(this).balance;
        
        uint rate = slmBalance / ethBalance;
        return rate;
    }

    function exchangeForSLM() public payable {
        uint256 amountEth = msg.value;
        uint256 rate = exchangeRate();

        SLMToken slmToken = SLMToken(slmTokenAddress);
        slmToken.transfer(msg.sender, amountEth/rate);
    }
}