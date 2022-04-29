var SLMToken = artifacts.require("SLMToken");

module.exports = function(deployer) {
  deployer.deploy(SLMToken, 10_000_000);
};