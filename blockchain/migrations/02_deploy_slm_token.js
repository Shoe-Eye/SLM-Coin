var SLMToken = artifacts.require("SLMToken");

module.exports = function(deployer) {
  deployer.deploy(SLMToken, "1000000000000000000000000000000000");
};