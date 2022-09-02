import { promises as fs } from 'fs';


export async function uploadFileToIPFS(ipfs, filename) {
    const file = await fs.readFile(filename)
    const { cid } = await ipfs.add(file)
    await ipfs.pin.add(cid.toString())
    return cid.toString()
}

export async function uploadMetadataToIPFS(ipfs, metadata) {
    const { cid } = await ipfs.add(metadata)
    await ipfs.pin.add(cid.toString())
    return cid.toString()
}

export async function uploadImageAndCreateMetadataOnIPFS(ipfs, filename, metadata) {
    const ipfsFileCID = await uploadFileToIPFS(ipfs, filename)
    metadata.image = "ipfs://" + ipfsFileCID;    
    const ipfsMetadataCID = await uploadMetadataToIPFS(ipfs, JSON.stringify(metadata))
    return ipfsMetadataCID.toString()
}
