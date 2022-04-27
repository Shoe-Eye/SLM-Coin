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
        uint rate = ethBalance / slmBalance;
        return rate;
    }

    function exchangeETHForSLM() public payable {
        uint256 amountEth = msg.value;
        uint256 rate = exchangeRate();
        SLMToken slmToken = SLMToken(slmTokenAddress);
        uint256 slmAmount = amountEth/rate;
        require(slmToken.balanceOf(address(this)) >= slmAmount, "Insufficient SLM amount");
        slmToken.transfer(msg.sender, slmAmount);
    }

    function exchangeSLMForETH(uint256 slmAmount) public {
        SLMToken slmToken = SLMToken(slmTokenAddress);
        require(slmToken.balanceOf(address(msg.sender)) >= slmAmount);
        uint256 ethAMount = slmAmount * exchangeRate();
        require(address(this).balance >= ethAMount);
        slmToken.approve(address(this), slmAmount);
        slmToken.transferFrom(msg.sender, address(this), slmAmount);
        payable(msg.sender).transfer(ethAMount);
        slmToken.approve(address(this), 0);
    }
}