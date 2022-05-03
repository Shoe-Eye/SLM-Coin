import * as IPFS from 'ipfs-core'
import { promises as fs } from 'fs';


async function uploadFileToIPFS(ipfs, filename) {
    const file = await fs.readFile(filename)
    const { cid } = await ipfs.add(file)
    
    return cid.toString()
}

async function uploadMetadataToIPFS(ipfs, metadata) {
    const { cid } = await ipfs.add(metadata)
    return cid.toString()
}

async function uploadImageAndCreateMetadataOnIPFS(ipfs, filename, metadata) {
    const ipfsFileCID = await uploadFileToIPFS(ipfs, filename)
    metadata.image = "ipfs://" + ipfsFileCID;
    const ipfsMetadataCID = await uploadMetadataToIPFS(ipfs, JSON.stringify(metadata))
    return ipfsMetadataCID.toString()
}

const ipfs = await IPFS.create()
const metadataCID = await uploadImageAndCreateMetadataOnIPFS(ipfs, "./images/0.jpg", {
    name: "Test SLM NFT",
    description: "Test SLM NFT",
});

const pinset = await ipfs.pin.add(metadataCID)
console.log(pinset)