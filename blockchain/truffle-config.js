/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 * 
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const MNEMONIC = fs.readFileSync("./secrets/metamask-phrase").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {

    development: {
      host: "172.27.48.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },

    mumbai: {
      provider: () => new HDWalletProvider(MNEMONIC, `wss://rpc-mumbai.maticvigil.com/ws/v1/3ff0e73f3548510029b0876f2294cf7df6cd775a`),
      network_id: 80001,
      confirmations: 1,
      skipDryRun: true,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 20000
    },

    matic: {
      provider: () => new HDWalletProvider(MNEMONIC, `wss://rpc-mainnet.maticvigil.com/ws/v1/3ff0e73f3548510029b0876f2294cf7df6cd775a`),
      network_id: 137,
      confirmations: 2,
      skipDryRun: true,
      gasPrice: 60000000000,
      gas: 15000000,  
      networkCheckTimeout: 1000000,
      timeoutBlocks: 20000
    },

    ethereum: {
      provider: () => new HDWalletProvider(MNEMONIC, `wss://mainnet.infura.io/ws/v3/1f3f5f1f10274e84be520b28214158fe`),
      network_id: 1,
      confirmations: 1,
      skipDryRun: true,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 20000
    },

    rinkeby: {
      provider: () => new HDWalletProvider(MNEMONIC, `wss://rinkeby.infura.io/ws/v3/1f3f5f1f10274e84be520b28214158fe`),
      network_id: 4,
      confirmations: 1,
      skipDryRun: true,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 20000
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.13",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },

};
