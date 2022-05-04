var SLMNFT = artifacts.require("SLMNFT");
var SLMToken = artifacts.require("SLMToken");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(SLMNFT, accounts[0]);
};