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


const ipfs = await IPFS.create()
const ipfsFileCID = await uploadFileToIPFS(ipfs, "./images/0.jpg")
const metadata = {
    name: "Test SLM Token",
    description: "Test SLM Token",
    image: "ipfs://" + ipfsFileCID
}
console.log(JSON.stringify(metadata))
const ipfsMetadataCID = await uploadMetadataToIPFS(ipfs, JSON.stringify(metadata))
console.log(ipfsMetadataCID)

process.exit()