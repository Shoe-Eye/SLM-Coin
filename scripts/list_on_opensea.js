const opensea = require('opensea-js');
const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;
const MnemonicWalletSubprovider = require("@0x/subproviders").MnemonicWalletSubprovider;
const Web3ProviderEngine = require("web3-provider-engine");
const fs = require('fs');
const Web3 = require('web3');
const Web3WsProvider = require('web3-providers-ws');

const MNEMONIC = fs.readFileSync(".secret").toString();
const OPENSEA_API_KEY = fs.readFileSync(".opensea-api").toString()
const RPC_PROVIDER = fs.readFileSync(".rpc-provider").toString()

const RPCSubprovider = require("web3-provider-engine/subproviders/rpc");

const BASE_DERIVATION_PATH = `44'/60'/0'/0`;
const mnemonicWalletSubprovider = new MnemonicWalletSubprovider({
  mnemonic: MNEMONIC,
  aseDerivationPath: BASE_DERIVATION_PATH,
});

const rpcSubprovider = new RPCSubprovider({rpcUrl: RPC_PROVIDER});

const providerEngine = new Web3ProviderEngine();
providerEngine.addProvider(mnemonicWalletSubprovider);
providerEngine.addProvider(rpcSubprovider);
providerEngine.start();


const seaport = new OpenSeaPort(
  providerEngine,
  {
    networkName: "Mumbai",
    apiKey: OPENSEA_API_KEY,
  },
  (arg) => console.log(arg)
);

const DEPLOYMENT = JSON.parse((fs.readFileSync("deployment.json")).toString());

async function main() {
  console.log("Creating fixed price auctions...");

  const fixedSellOrders = await seaport.createFactorySellOrders({
    assets: [
      {
        tokenId: 0,
        tokenAddress: DEPLOYMENT.factory,
      },
    ],
    accountAddress: DEPLOYMENT.owner,
    startAmount: 0.005,
    numberOfOrders: 10,
  });
  console.log(
    `Successfully made ${fixedSellOrders.length} fixed-price sell orders! ${fixedSellOrders[0].asset.openseaLink}\n`
  );

}

main();
