const uint8arrays = require('uint8arrays')

const fs = require('fs')
const IPFS = require('ipfs-http-client')
const Web3 = require('web3')


const NETWORK = "matic"
const NFT_METADATA = JSON.parse(fs.readFileSync("./build/contracts/SLMNFT.json").toString())
const DEPLOYMENTS = JSON.parse(fs.readFileSync("./deployment.json").toString())[NETWORK]
const RPC_PROVIDER = fs.readFileSync("./secrets/matic-provider").toString()
const PRIVATE_KEY = fs.readFileSync("./secrets/metamask-pk").toString()
const NFT_OWNER = fs.readFileSync("./secrets/nftowner").toString()

async function main() {
    const ipfs = await IPFS.create()
    const web3 = new Web3(RPC_PROVIDER)
    await web3.eth.accounts.wallet.add({
        address: NFT_METADATA["owner"],
        privateKey: PRIVATE_KEY,
      });

    const ipfsUtils = await import('./ipfsUtils.mjs')

    const slmNFT = new web3.eth.Contract(
        NFT_METADATA.abi, 
        DEPLOYMENTS["nft"]
      )

    let metadata = {
        description: 'Vnuk preached the truth about hell in digital matrix structures.',
        name: 'Good Deed # 1'
    };

    const cid = await ipfsUtils.uploadImageAndCreateMetadataOnIPFS(
        ipfs,
        "D:\SLM-3D-GIFs-NFT\\абдулов в матрице\\DALL·E 2022-07-31 10.33.28", 
        metadata)

    console.log('Calling Smart Contract...')

    await slmNFT.methods.safeMintWithMetadata(NFT_OWNER, cid).send({
        from: DEPLOYMENTS.owner,
        gasPrice: 60000000000,
        gas: 15000000, 
    })
}

main()
