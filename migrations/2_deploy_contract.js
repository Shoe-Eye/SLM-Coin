var SLMToken = artifacts.require("SLMToken");

module.exports = function(deployer) {
  deployer.deploy(SLMToken, "Schizo Life Matters", "SLM", 10_000_000);
};