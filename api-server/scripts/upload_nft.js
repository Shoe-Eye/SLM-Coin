const uint8arrays = require('uint8arrays')

const fs = require('fs')
const IPFS = require('ipfs-http-client')
const Web3 = require('web3')


const NETWORK = "matic"
const NFT_METADATA = JSON.parse(fs.readFileSync("./build/contracts/SLMNFT.json").toString())
const DEPLOYMENTS = JSON.parse(fs.readFileSync("./deployment.json").toString())[NETWORK]
const RPC_PROVIDER = fs.readFileSync("./../blockchain/secrets/matic-provider").toString()
const PRIVATE_KEY = fs.readFileSync("./../blockchain/secrets/metamask-pk").toString()

async function main() {
    const ipfs = await IPFS.create()
    const web3 = new Web3(RPC_PROVIDER)
    await web3.eth.accounts.wallet.add({
        address: "0xc23Ca8e4261d8833F7788B6eD5449377115Ac2DC",
        privateKey: PRIVATE_KEY,
      });

    const ipfsMetadata = await import('./metadata.mjs')

    const slmNFT = new web3.eth.Contract(
        NFT_METADATA.abi, 
        DEPLOYMENTS["nft"]
      )

    let metadata = {
        description: 'Vnuk preached the truth about hell in digital matrix structures.',
        name: 'Good Deed # 1'
    };

    const cid = await ipfsMetadata.uploadImageAndCreateMetadataOnIPFS(
        ipfs,
        "D:\SLM-3D-GIFs-NFT\\абдулов в матрице\\DALL·E 2022-07-31 10.33.09.gif", 
        metadata)

    console.log('Calling Smart Contract...')

    await slmNFT.methods.safeMintWithMetadata('0xf14bE4ba33745D648DBC79b88dE4C330ddA7Ad03', cid).send({
        from: DEPLOYMENTS.owner,
        gasPrice: 60000000000,
        gas: 15000000, 
    })
}

main()
