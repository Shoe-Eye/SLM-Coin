// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./SLMToken.sol";
import "./SLMNFT.sol";

interface Factory {
    /**
    * Returns the name of this factory.
    */
    function name() external view returns (string memory);

    /**
    * Returns the symbol for this factory.
    */
    function symbol() external view returns (string memory);

    /**
    * Number of options the factory supports.
    */
    function numOptions() external view returns (uint256);

    /**
    * @dev Returns whether the option ID can be minted. Can return false if the developer wishes to
    * restrict a total supply per option ID (or overall).
    */
    function canMint(uint256 _optionId) external view returns (bool);

    /**
    * @dev Returns a URL specifying some metadata about the option. This metadata can be of the
    * same structure as the ERC721 metadata.
    */
    function tokenURI(uint256 _optionId) external view returns (string memory);

    /**
    * Indicates that this is a factory contract. Ideally would use EIP 165 supportsInterface()
    */
    function supportsFactoryInterface() external view returns (bool);

    /**
    * @dev Mints asset(s) in accordance to a specific address with a particular "option". This should be
    * callable only by the contract owner or the owner's Wyvern Proxy (later universal login will solve this).
    * Options should also be delineated 0 - (numOptions() - 1) for convenient indexing.
    * @param _optionId the option id
    * @param _toAddress address of the future owner of the asset(s)
    */
    function mint(uint256 _optionId, address _toAddress) external;
}

contract SLMNFTFactory is Factory, Ownable {
    address public nftAddress;
    address public tokenAddress;

    using Strings for string;

    event Transfer(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    );

    uint256 NUM_OPTIONS = 1;
    uint256 SCHIZO_OPTION = 0;
    uint256 SCHIZO_SUPPLY = 100_000;

    fallback() external payable {}

    receive() external payable {}

    function transfer(address to, uint256 amount) public onlyOwner {
        payable(to).transfer(amount);
    }

    constructor(address nftAddress_, address tokenAddress_) {
        nftAddress = nftAddress_;
        tokenAddress = tokenAddress_;

        fireTransferEvents(address(0), owner());
    }

    function name() external pure override returns (string memory) {
        return "SLM NFT Token Sale / Exchange Fund";
    }

    function symbol() external pure override returns (string memory) {
        return "SLM";
    }

    function supportsFactoryInterface() public pure override returns (bool) {
        return true;
    }

    function numOptions() public view override returns (uint256) {
        return NUM_OPTIONS;
    }

    function transferOwnership(address newOwner) public override onlyOwner {
        address _prevOwner = owner();
        super.transferOwnership(newOwner);
        fireTransferEvents(_prevOwner, newOwner);
    }

    function fireTransferEvents(address _from, address _to) private {
        for (uint256 i = 0; i < NUM_OPTIONS; i++) {
            emit Transfer(_from, _to, i);
        }
    }

    function canMint(uint256 _optionId) public view override returns (bool) {
        if (_optionId >= NUM_OPTIONS) {
            return false;
        }

        SLMNFT slmNFT = SLMNFT(nftAddress);
        uint256 slmSupply = slmNFT.totalSupply();

        uint256 numItemsAllocated = 0;
        if (_optionId == SCHIZO_OPTION) {
            numItemsAllocated = 1;
        }

        return slmSupply < (SCHIZO_SUPPLY - numItemsAllocated);
    }

    function mint(uint256 _optionId, address to) public onlyOwner {
        SLMNFT slmNft = SLMNFT(nftAddress);
        slmNft.safeMint(to);
    }

    function tokenURI(uint256 tokenId) public view returns (string memory) {
        return "ipfs://QmbhuRNLrb2NDbWc13JyjdJrcNGzmAiWXw2BBf7LmLZZst";
    }

    function mintWithMetadata(address to, string memory data) public onlyOwner {
        SLMNFT slmNft = SLMNFT(nftAddress);
        slmNft.safeMintWithMetadata(to, data);
    }

    /**
     * Hack to get things to work automatically on OpenSea.
     * Use transferFrom so the frontend doesn't have to worry about different method names.
     */
    function transferFrom(
        address,
        address _to,
        uint256 _tokenId
    ) public  {
        mint(_tokenId, _to);
    }

    /**
     * Override isApprovedForAll to auto-approve OS's proxy contract
     */
    function isApprovedForAll(address _owner, address _operator)
        public
        view
        returns (bool isOperator)
    {
        // if OpenSea's ERC721 Proxy Address is detected, auto-return true
        if (owner() == _owner && _operator == address(0x58807baD0B376efc12F5AD86aAc70E78ed67deaE)) {
            return true;
        }

        // otherwise, use the default ERC721.isApprovedForAll()
        if (owner() == _owner && _owner == _operator) {
            return true;
        }

        return false;
    }

    /**
     * Hack to get things to work automatically on OpenSea.
     * Use isApprovedForAll so the frontend doesn't have to worry about different method names.
     */
    function ownerOf(uint256) public view returns (address _owner) {
        return owner();
    }

    /**
     * @dev Returns an URI for a given option ID.
     * Throws if the option ID does not exist. May return an empty string.
     * @param _optionId - uint256 ID of the token queried
     * @return token URI
     */
    function balanceOf(uint256 _optionId) public view returns (uint256) {
        SLMNFT slmNft = SLMNFT(nftAddress);
        return slmNft.balanceOf(msg.sender);
    }

    // -------------
    // Exchange fund
    // -------------

    function exchangeRate() public view returns (uint256) {
        SLMToken slmToken = SLMToken(tokenAddress);
        uint256 slmBalance = slmToken.balanceOf(address(this));
        uint256 ethBalance = address(this).balance;
        uint256 rate = ethBalance / slmBalance;
        return rate;
    }

    function exchangeETHForSLM() public payable {
        uint256 amountEth = msg.value;
        uint256 rate = exchangeRate();
        SLMToken slmToken = SLMToken(tokenAddress);
        uint256 slmAmount = amountEth / rate;
        require(
            slmToken.balanceOf(address(this)) >= slmAmount,
            "Insufficient SLM amount"
        );
        slmToken.transfer(msg.sender, slmAmount);
    }

    function exchangeSLMForETH(uint256 slmAmount) public {
        SLMToken slmToken = SLMToken(tokenAddress);
        require(slmToken.balanceOf(address(msg.sender)) >= slmAmount);
        uint256 ethAMount = slmAmount * exchangeRate();
        require(address(this).balance >= ethAMount);
        slmToken.approve(address(this), slmAmount);
        slmToken.transferFrom(msg.sender, address(this), slmAmount);
        payable(msg.sender).transfer(ethAMount);
        slmToken.approve(address(this), 0);
    }
}
