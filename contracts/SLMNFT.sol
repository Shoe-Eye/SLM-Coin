// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./SLMToken.sol";

/**
 * https://github.com/maticnetwork/pos-portal/blob/master/contracts/common/ContextMixin.sol
 */
abstract contract ContextMixin {
    function msgSender() internal view returns (address payable sender) {
        if (msg.sender == address(this)) {
            bytes memory array = msg.data;
            uint256 index = msg.data.length;
            assembly {
                // Load the 32 bytes word from memory with the address on the lower 20 bytes, and mask those.
                sender := and(
                    mload(add(array, index)),
                    0xffffffffffffffffffffffffffffffffffffffff
                )
            }
        } else {
            sender = payable(msg.sender);
        }
        return sender;
    }
}

contract SLMNFT is ERC721, Ownable, ERC721Burnable, ContextMixin {
    address private slmTokenAddress;

    modifier onlyNotOwner() {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    constructor(address slmTokenAddress_) ERC721("SLMNFT", "SLM") {
        slmTokenAddress = slmTokenAddress_;
    }

    address private slmSwapAddress;

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }

    /**
     * Override isApprovedForAll to auto-approve OS's proxy contract
     */
    function isApprovedForAll(address _owner, address _operator)
        public
        view
        override
        returns (bool isOperator)
    {
        // if OpenSea's ERC721 Proxy Address is detected, auto-return true
        if (_operator == address(0x58807baD0B376efc12F5AD86aAc70E78ed67deaE)) {
            return true;
        }

        // otherwise, use the default ERC721.isApprovedForAll()
        return ERC721.isApprovedForAll(_owner, _operator);
    }

    /**
     * This is used instead of msg.sender as transactions won't be sent by the original token owner, but by OpenSea.
     */
    function _msgSender() internal view override returns (address sender) {
        return ContextMixin.msgSender();
    }

    function exchangeRate() public onlyNotOwner view returns (uint256) {
        SLMToken slmToken = SLMToken(slmTokenAddress);
        uint256 slmBalance = slmToken.balanceOf(address(this));
        uint256 ethBalance = address(this).balance;
        uint256 rate = ethBalance / slmBalance;
        return rate;
    }

    function exchangeETHForSLM() public payable onlyNotOwner {
        uint256 amountEth = msg.value;
        uint256 rate = exchangeRate();
        SLMToken slmToken = SLMToken(slmTokenAddress);
        uint256 slmAmount = amountEth / rate;
        require(
            slmToken.balanceOf(address(this)) >= slmAmount,
            "Insufficient SLM amount"
        );
        slmToken.transfer(msg.sender, slmAmount);
    }

    function exchangeSLMForETH(uint256 slmAmount) public onlyNotOwner {
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
