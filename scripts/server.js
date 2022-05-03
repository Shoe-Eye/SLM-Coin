const express = require('express')
const IPFS = require('ipfs-core')
const Web3 = require('web3')
const fs = require('fs')
const uint8arrays = require('uint8arrays')


const NFT_METADATA = JSON.parse(fs.readFileSync("./build/contracts/SLMNFT.json").toString())
const DEPLOYMENTS = JSON.parse(fs.readFileSync("./deployment.json").toString())
const RPC_PROVIDER = fs.readFileSync("./secrets/rpc-provider").toString()

async function main() {

  console.log("Starting IPFS...")
  const ipfs = await IPFS.create()

  console.log("Connecting to a blockchain...")
  const web3 = new Web3(RPC_PROVIDER)
  const slmNFT = new web3.eth.Contract(NFT_METADATA.abi, DEPLOYMENTS.nft)

  console.log("Starting REST API...")
  const app = express()
  const port = 3000

  app.get('/:contract/:token', async (req, res) => {
    const uri = await slmNFT.methods.tokenURI(req.params["token"]).call()
    var chunks = [];
    for await (const chunk of ipfs.cat(uri.replace("ipfs://", ""))) {
      chunks.push(chunk);
    }
 
    const data = uint8arrays.concat(chunks)
    const decodedData = JSON.parse(new TextDecoder().decode(data).toString());
    
    res.send(decodedData)
  })

  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
}

main()
