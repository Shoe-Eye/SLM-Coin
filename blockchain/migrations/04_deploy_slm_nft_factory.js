var SLMNFT = artifacts.require("SLMNFT");
var SLMToken = artifacts.require("SLMToken");
var SLMNFTFactory = artifacts.require("SLMNFTFactory");

module.exports = async function(deployer) {
  await deployer.deploy(SLMNFTFactory, SLMNFT.address, SLMToken.address, 1000000000000000);

  const slmToken = await SLMToken.deployed();
  const slmNFT = await SLMNFT.deployed();
  
  await slmNFT.transferOwnership(SLMNFTFactory.address);
  await slmToken.transfer(SLMNFTFactory.address, 10_000_000)
};