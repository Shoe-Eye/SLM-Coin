const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const IPFS = require('ipfs-core')
const methodOverride = require('method-override')
const uint8arrays = require('uint8arrays')
const Web3 = require('web3')
const { RandomPicture } = require('random-picture')


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

  const slmNFT = new web3.eth.Contract(
    NFT_METADATA.abi, 
    NFT_METADATA.networks["80001"].address
  )
  
  const slmNFTFactory = new web3.eth.Contract(
    NFT_FACTORY_METADATA.abi, 
    NFT_FACTORY_METADATA.networks["80001"].address
  )

  console.log("Starting REST API...")
  const app = express()
  const port = 3000

  async function getJSONfromIPFS(uri) {
    var chunks = [];
    try {
      for await (const chunk of ipfs.cat(uri.replace("ipfs://", ""))) {
        chunks.push(chunk);
      }
    } catch(e) {
      throw(`Unable to retreive cid ${uri} from IPFS"`)
    }
    const data = uint8arrays.concat(chunks)
    return JSON.parse(new TextDecoder().decode(data).toString());
  }

  function wrapError(func) {
    return async (req, res) => {
      try {
        await func(req, res)
      } catch(err) {
        console.log(err)
        res.send("error")
      }
    }
  }

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(methodOverride())

  async function generateNFT(optionId) {
    const image = await RandomPicture()
    return {
      name: "Test SLM NFT",
      description: Math.floor(Date.now() / 1000),
      image: image.url,
    }
  }

  app.get('/slm/:token_id', wrapError(async (req, res) => {
      const metadata_uri = await slmNFT.methods.tokenURI(req.params["token_id"]).call()
      if (metadata_uri.startsWith('ipfs://')){
        const metadata = await getJSONfromIPFS(metadata_uri)
        res.send(metadata) 
      } else {
        const newMetadata = await generateNFT(0);
        const cid = await ipfsMetadata.uploadMetadataToIPFS(ipfs, JSON.stringify(newMetadata))
        
        await slmNFT.methods.setTokenURI(req.params["token_id"], cid).send({
          from: DEPLOYMENTS.owner,
          gasLimit: 300000,
        })

        const metadata = await getJSONfromIPFS(cid)
        res.send(metadata)
      }
  }))

  // app.get('/slm/mint/:address', wrapError(async (req, res) => {
  //   const metadataCID = await ipfsMetadata.uploadMetadataToIPFS(ipfs, JSON.stringify(generateNFT(0)));

  //   await slmNFTFactory.methods.mintWithMetadata(
  //     web3.utils.toChecksumAddress(req.params["address"]),
  //     metadataCID
  //   ).send({
  //     from: DEPLOYMENTS.owner,
  //     gasLimit: 300000,
  //   })
    
  //   res.sendStatus(200)
  // }))

  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
}

main()
