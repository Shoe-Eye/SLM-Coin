var SLMNFT = artifacts.require("SLMNFT");
var SLMToken = artifacts.require("SLMToken");

module.exports = function(deployer) {
  deployer.deploy(SLMNFT);
};