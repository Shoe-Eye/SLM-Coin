import * as IPFS from 'ipfs-core'
import {uploadImageAndCreateMetadataOnIPFS} from "./metadata.mjs"

const ipfs = await IPFS.create()
const metadataCID = await uploadImageAndCreateMetadataOnIPFS(ipfs, "./images/0.jpg", {
    name: "Test SLM NFT",
    description: "Test SLM NFT",
});

const pinset = await ipfs.pin.add(metadataCID)
console.log(pinset)