const express = require('express')
const IPFS = require('ipfs-core')
const Web3 = require('web3')
const fs = require('fs')
const uint8arrays = require('uint8arrays')

const NETWORK = "mumbai"
const NFT_METADATA = JSON.parse(fs.readFileSync("./build/contracts/SLMNFT.json").toString())
const NFT_FACTORY_METADATA = JSON.parse(fs.readFileSync("./build/contracts/SLMNFTFactory.json").toString())
const DEPLOYMENTS = JSON.parse(fs.readFileSync("./deployment.json").toString())[NETWORK]
const RPC_PROVIDER = fs.readFileSync("./secrets/rpc-provider").toString()
const PRIVATE_KEY = fs.readFileSync("./secrets/metamask-pk").toString()

async function main() {

  const ipfsMetadata = await import('./metadata.mjs')

  console.log("Starting IPFS...")
  const ipfs = await IPFS.create()

  console.log("Connecting to a blockchain...")
  const web3 = new Web3(RPC_PROVIDER)
  await web3.eth.accounts.wallet.add({
    address: "0xc23Ca8e4261d8833F7788B6eD5449377115Ac2DC",
    privateKey: PRIVATE_KEY,
  });

  const slmNFT = new web3.eth.Contract(NFT_METADATA.abi, DEPLOYMENTS.nft)
  const slmNFTFactory = new web3.eth.Contract(NFT_FACTORY_METADATA.abi, DEPLOYMENTS.factory)

  console.log("Starting REST API...")
  const app = express()
  const port = 3000

  async function getJSONfromIPFS(uri) {
    var chunks = [];
    for await (const chunk of ipfs.cat(uri.replace("ipfs://", ""))) {
      chunks.push(chunk);
    }
    const data = uint8arrays.concat(chunks)
    return JSON.parse(new TextDecoder().decode(data).toString());
  }

  app.get('/slm/:token_id', async (req, res) => {
    try {
      const metadata_uri = await slmNFT.methods.tokenURI(req.params["token_id"]).call()
      console.log(metadata_uri)
      const metadata = await getJSONfromIPFS(metadata_uri.replace("ipfs://", ""))
      res.send(metadata)
    } catch (e) {
      res.send({ error: e })
    }
  })

  app.get('/slm/update_metadata/:token_id', async (req, res) => {
    try {
      const cid = await ipfsMetadata.uploadImageAndCreateMetadataOnIPFS(ipfs, "./images/0.jpg", {
        name: "Test SLM NFT",
        description: Math.floor(Date.now() / 1000),
      })

      await slmNFT.methods.setTokenURI(req.params["token_id"], cid).send({
        from: DEPLOYMENTS.owner,
        gasLimit: 300000,
      })
      res.sendStatus(200)
    } catch (e) {
      res.send({ error: e })
    }
  })

  app.get('/slm/mint/:address', async (req, res) => {
    try {
      const metadataCID = await ipfsMetadata.uploadImageAndCreateMetadataOnIPFS(ipfs, "./images/0.jpg", {
        name: "Test SLM NFT",
        description: Math.floor(Date.now() / 1000)
      });

      await slmNFTFactory.methods.mintWithMetadata(
        web3.utils.toChecksumAddress(req.params["address"]),
        "ipfs://" + metadataCID
      ).send({
        from: DEPLOYMENTS.owner,
        gasLimit: 300000,
      })
      res.sendStatus(200)
    } catch (e) {
      res.send({ error: e })
    }
  })

  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
}

main()
