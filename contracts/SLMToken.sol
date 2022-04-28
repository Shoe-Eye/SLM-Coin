pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SLMToken is ERC20 
{
    constructor(uint256 initialSupply) ERC20("Schizo Life Matters", "SLM") {
        _mint(msg.sender, initialSupply);
    }
    
    function decimals() public view virtual override returns (uint8) {
        return 10;
    }
}