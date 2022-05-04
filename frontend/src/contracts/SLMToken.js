module.exports = {
  "contractName": "SLMToken",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "initialSupply",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.13+commit.abaa5c0e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"initialSupply\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/SLMToken.sol\":\"SLMToken\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xe0c8b625a79bac0fe80f17cfb521e072805cc9cef1c96a5caf45b264e74812fa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://12fd1efc9ad061ef675bd50fb0c8e3c6f2952a09f8df0e3c688b8d81b8918838\",\"dweb:/ipfs/QmawN6PjTwy91pU7ANjCSgbsLc8TDA6hwu9GsFFaNSuhb5\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"project:/contracts/SLMToken.sol\":{\"keccak256\":\"0xcf2accc1b3a44e2f001c94515b1eb7bc5f618a2be68c87227ce144d6aa2beaa3\",\"urls\":[\"bzz-raw://050bf5d1c57c5f006f28b9c90a33cc7ddda8dffa0aaf2a465a622dd679c23eb6\",\"dweb:/ipfs/QmdtBMgn6LVR3wtFXWHaxrhaemC1fU5a2SNgNi8nRSKuBR\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620017a8380380620017a8833981810160405281019062000037919062000362565b6040518060400160405280601381526020017f536368697a6f204c696665204d617474657273000000000000000000000000008152506040518060400160405280600381526020017f534c4d00000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb92919062000272565b508060049080519060200190620000d492919062000272565b505050620000e93382620000f060201b60201c565b5062000535565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000162576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200015990620003f5565b60405180910390fd5b62000176600083836200026860201b60201c565b80600260008282546200018a919062000446565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001e1919062000446565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002489190620004b4565b60405180910390a362000264600083836200026d60201b60201c565b5050565b505050565b505050565b828054620002809062000500565b90600052602060002090601f016020900481019282620002a45760008555620002f0565b82601f10620002bf57805160ff1916838001178555620002f0565b82800160010185558215620002f0579182015b82811115620002ef578251825591602001919060010190620002d2565b5b509050620002ff919062000303565b5090565b5b808211156200031e57600081600090555060010162000304565b5090565b600080fd5b6000819050919050565b6200033c8162000327565b81146200034857600080fd5b50565b6000815190506200035c8162000331565b92915050565b6000602082840312156200037b576200037a62000322565b5b60006200038b848285016200034b565b91505092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620003dd601f8362000394565b9150620003ea82620003a5565b602082019050919050565b600060208201905081810360008301526200041081620003ce565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620004538262000327565b9150620004608362000327565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000498576200049762000417565b5b828201905092915050565b620004ae8162000327565b82525050565b6000602082019050620004cb6000830184620004a3565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200051957607f821691505b6020821081036200052f576200052e620004d1565b5b50919050565b61126380620005456000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b1e565b60405180910390f35b6100e660048036038101906100e19190610bd9565b610308565b6040516100f39190610c34565b60405180910390f35b61010461032b565b6040516101119190610c5e565b60405180910390f35b610134600480360381019061012f9190610c79565b610335565b6040516101419190610c34565b60405180910390f35b610152610364565b60405161015f9190610ce8565b60405180910390f35b610182600480360381019061017d9190610bd9565b61036d565b60405161018f9190610c34565b60405180910390f35b6101b260048036038101906101ad9190610d03565b6103a4565b6040516101bf9190610c5e565b60405180910390f35b6101d06103ec565b6040516101dd9190610b1e565b60405180910390f35b61020060048036038101906101fb9190610bd9565b61047e565b60405161020d9190610c34565b60405180910390f35b610230600480360381019061022b9190610bd9565b6104f5565b60405161023d9190610c34565b60405180910390f35b610260600480360381019061025b9190610d30565b610518565b60405161026d9190610c5e565b60405180910390f35b60606003805461028590610d9f565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610d9f565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610770565b6103588585856107fc565b60019150509392505050565b6000600a905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190610dff565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb90610d9f565b80601f016020809104026020016040519081016040528092919081815260200182805461042790610d9f565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610ec7565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fc565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060d90610f59565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067c90610feb565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107639190610c5e565b60405180910390a3505050565b600061077c8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f657818110156107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df90611057565b60405180910390fd5b6107f584848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361086b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610862906110e9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d19061117b565b60405180910390fd5b6108e5838383610a7b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109629061120d565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109fe9190610dff565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a629190610c5e565b60405180910390a3610a75848484610a80565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610abf578082015181840152602081019050610aa4565b83811115610ace576000848401525b50505050565b6000601f19601f8301169050919050565b6000610af082610a85565b610afa8185610a90565b9350610b0a818560208601610aa1565b610b1381610ad4565b840191505092915050565b60006020820190508181036000830152610b388184610ae5565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b7082610b45565b9050919050565b610b8081610b65565b8114610b8b57600080fd5b50565b600081359050610b9d81610b77565b92915050565b6000819050919050565b610bb681610ba3565b8114610bc157600080fd5b50565b600081359050610bd381610bad565b92915050565b60008060408385031215610bf057610bef610b40565b5b6000610bfe85828601610b8e565b9250506020610c0f85828601610bc4565b9150509250929050565b60008115159050919050565b610c2e81610c19565b82525050565b6000602082019050610c496000830184610c25565b92915050565b610c5881610ba3565b82525050565b6000602082019050610c736000830184610c4f565b92915050565b600080600060608486031215610c9257610c91610b40565b5b6000610ca086828701610b8e565b9350506020610cb186828701610b8e565b9250506040610cc286828701610bc4565b9150509250925092565b600060ff82169050919050565b610ce281610ccc565b82525050565b6000602082019050610cfd6000830184610cd9565b92915050565b600060208284031215610d1957610d18610b40565b5b6000610d2784828501610b8e565b91505092915050565b60008060408385031215610d4757610d46610b40565b5b6000610d5585828601610b8e565b9250506020610d6685828601610b8e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610db757607f821691505b602082108103610dca57610dc9610d70565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e0a82610ba3565b9150610e1583610ba3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e4a57610e49610dd0565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610eb1602583610a90565b9150610ebc82610e55565b604082019050919050565b60006020820190508181036000830152610ee081610ea4565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f43602483610a90565b9150610f4e82610ee7565b604082019050919050565b60006020820190508181036000830152610f7281610f36565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fd5602283610a90565b9150610fe082610f79565b604082019050919050565b6000602082019050818103600083015261100481610fc8565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611041601d83610a90565b915061104c8261100b565b602082019050919050565b6000602082019050818103600083015261107081611034565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006110d3602583610a90565b91506110de82611077565b604082019050919050565b60006020820190508181036000830152611102816110c6565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611165602383610a90565b915061117082611109565b604082019050919050565b6000602082019050818103600083015261119481611158565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006111f7602683610a90565b91506112028261119b565b604082019050919050565b60006020820190508181036000830152611226816111ea565b905091905056fea26469706673582212204da96c6d40171b70fabaed1fc919b151ba37c5a649829e96d4c8be5ef68203de64736f6c634300080d0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b1e565b60405180910390f35b6100e660048036038101906100e19190610bd9565b610308565b6040516100f39190610c34565b60405180910390f35b61010461032b565b6040516101119190610c5e565b60405180910390f35b610134600480360381019061012f9190610c79565b610335565b6040516101419190610c34565b60405180910390f35b610152610364565b60405161015f9190610ce8565b60405180910390f35b610182600480360381019061017d9190610bd9565b61036d565b60405161018f9190610c34565b60405180910390f35b6101b260048036038101906101ad9190610d03565b6103a4565b6040516101bf9190610c5e565b60405180910390f35b6101d06103ec565b6040516101dd9190610b1e565b60405180910390f35b61020060048036038101906101fb9190610bd9565b61047e565b60405161020d9190610c34565b60405180910390f35b610230600480360381019061022b9190610bd9565b6104f5565b60405161023d9190610c34565b60405180910390f35b610260600480360381019061025b9190610d30565b610518565b60405161026d9190610c5e565b60405180910390f35b60606003805461028590610d9f565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610d9f565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610770565b6103588585856107fc565b60019150509392505050565b6000600a905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190610dff565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb90610d9f565b80601f016020809104026020016040519081016040528092919081815260200182805461042790610d9f565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610ec7565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fc565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060d90610f59565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067c90610feb565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107639190610c5e565b60405180910390a3505050565b600061077c8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f657818110156107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df90611057565b60405180910390fd5b6107f584848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361086b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610862906110e9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d19061117b565b60405180910390fd5b6108e5838383610a7b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109629061120d565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109fe9190610dff565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a629190610c5e565b60405180910390a3610a75848484610a80565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610abf578082015181840152602081019050610aa4565b83811115610ace576000848401525b50505050565b6000601f19601f8301169050919050565b6000610af082610a85565b610afa8185610a90565b9350610b0a818560208601610aa1565b610b1381610ad4565b840191505092915050565b60006020820190508181036000830152610b388184610ae5565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b7082610b45565b9050919050565b610b8081610b65565b8114610b8b57600080fd5b50565b600081359050610b9d81610b77565b92915050565b6000819050919050565b610bb681610ba3565b8114610bc157600080fd5b50565b600081359050610bd381610bad565b92915050565b60008060408385031215610bf057610bef610b40565b5b6000610bfe85828601610b8e565b9250506020610c0f85828601610bc4565b9150509250929050565b60008115159050919050565b610c2e81610c19565b82525050565b6000602082019050610c496000830184610c25565b92915050565b610c5881610ba3565b82525050565b6000602082019050610c736000830184610c4f565b92915050565b600080600060608486031215610c9257610c91610b40565b5b6000610ca086828701610b8e565b9350506020610cb186828701610b8e565b9250506040610cc286828701610bc4565b9150509250925092565b600060ff82169050919050565b610ce281610ccc565b82525050565b6000602082019050610cfd6000830184610cd9565b92915050565b600060208284031215610d1957610d18610b40565b5b6000610d2784828501610b8e565b91505092915050565b60008060408385031215610d4757610d46610b40565b5b6000610d5585828601610b8e565b9250506020610d6685828601610b8e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610db757607f821691505b602082108103610dca57610dc9610d70565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e0a82610ba3565b9150610e1583610ba3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e4a57610e49610dd0565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610eb1602583610a90565b9150610ebc82610e55565b604082019050919050565b60006020820190508181036000830152610ee081610ea4565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f43602483610a90565b9150610f4e82610ee7565b604082019050919050565b60006020820190508181036000830152610f7281610f36565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fd5602283610a90565b9150610fe082610f79565b604082019050919050565b6000602082019050818103600083015261100481610fc8565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611041601d83610a90565b915061104c8261100b565b602082019050919050565b6000602082019050818103600083015261107081611034565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006110d3602583610a90565b91506110de82611077565b604082019050919050565b60006020820190508181036000830152611102816110c6565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611165602383610a90565b915061117082611109565b604082019050919050565b6000602082019050818103600083015261119481611158565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006111f7602683610a90565b91506112028261119b565b604082019050919050565b60006020820190508181036000830152611226816111ea565b905091905056fea26469706673582212204da96c6d40171b70fabaed1fc919b151ba37c5a649829e96d4c8be5ef68203de64736f6c634300080d0033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:3568:22",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:22",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:22",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:22"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:22"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "40:6:22",
                "type": ""
              }
            ],
            "src": "7:75:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:22",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:22",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:22"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:22",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:22",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:22"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "379:32:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "389:16:22",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "400:5:22"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "389:7:22"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "361:5:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "371:7:22",
                "type": ""
              }
            ],
            "src": "334:77:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "460:79:22",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "517:16:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "526:1:22",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "529:1:22",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "519:6:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "519:12:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "519:12:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "483:5:22"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "508:5:22"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "490:17:22"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "490:24:22"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "480:2:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "480:35:22"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "473:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "473:43:22"
                  },
                  "nodeType": "YulIf",
                  "src": "470:63:22"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "453:5:22",
                "type": ""
              }
            ],
            "src": "417:122:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "608:80:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "618:22:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "633:6:22"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "627:5:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "627:13:22"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "618:5:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "676:5:22"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "649:26:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "649:33:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "649:33:22"
                }
              ]
            },
            "name": "abi_decode_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "586:6:22",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "594:3:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "602:5:22",
                "type": ""
              }
            ],
            "src": "545:143:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "771:274:22",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "817:83:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "819:77:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "819:79:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "819:79:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "792:7:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "801:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "788:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "788:23:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "813:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "784:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "784:32:22"
                  },
                  "nodeType": "YulIf",
                  "src": "781:119:22"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "910:128:22",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "925:15:22",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "939:1:22",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "929:6:22",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "954:74:22",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1000:9:22"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1011:6:22"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "996:3:22"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "996:22:22"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1020:7:22"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "964:31:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "964:64:22"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "954:6:22"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "741:9:22",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "752:7:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "764:6:22",
                "type": ""
              }
            ],
            "src": "694:351:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1147:73:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1164:3:22"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1169:6:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1157:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1157:19:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1157:19:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1185:29:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1204:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1209:4:22",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1200:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1200:14:22"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "1185:11:22"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1119:3:22",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1124:6:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "1135:11:22",
                "type": ""
              }
            ],
            "src": "1051:169:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1332:75:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "1354:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1362:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1350:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1350:14:22"
                      },
                      {
                        "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1366:33:22",
                        "type": "",
                        "value": "ERC20: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1343:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1343:57:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1343:57:22"
                }
              ]
            },
            "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "1324:6:22",
                "type": ""
              }
            ],
            "src": "1226:181:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1559:220:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1569:74:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1635:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1640:2:22",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1576:58:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1576:67:22"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "1569:3:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1741:3:22"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                      "nodeType": "YulIdentifier",
                      "src": "1652:88:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1652:93:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1652:93:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1754:19:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1765:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1770:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1761:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1761:12:22"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "1754:3:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1547:3:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1555:3:22",
                "type": ""
              }
            ],
            "src": "1413:366:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1956:248:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1966:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1978:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1989:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1974:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1974:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1966:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2013:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2024:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2009:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2009:17:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2032:4:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2038:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2028:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2028:20:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2002:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2002:47:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2002:47:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2058:139:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2192:4:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2066:124:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2066:131:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2058:4:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1936:9:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1951:4:22",
                "type": ""
              }
            ],
            "src": "1785:419:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2238:152:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2255:1:22",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2258:77:22",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2248:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2248:88:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2248:88:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2352:1:22",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2355:4:22",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2345:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2345:15:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2345:15:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2376:1:22",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2379:4:22",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "2369:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2369:15:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2369:15:22"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "2210:180:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2440:261:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2450:25:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "2473:1:22"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "2455:17:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2455:20:22"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "2450:1:22"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2484:25:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "2507:1:22"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "2489:17:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2489:20:22"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "2484:1:22"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2647:22:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "2649:16:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2649:18:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2649:18:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "2568:1:22"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2575:66:22",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "2643:1:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2571:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2571:74:22"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2565:2:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2565:81:22"
                  },
                  "nodeType": "YulIf",
                  "src": "2562:107:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2679:16:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "2690:1:22"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "2693:1:22"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2686:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2686:9:22"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "2679:3:22"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "2427:1:22",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "2430:1:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "2436:3:22",
                "type": ""
              }
            ],
            "src": "2396:305:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2772:53:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2789:3:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2812:5:22"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "2794:17:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2794:24:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2782:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2782:37:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2782:37:22"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2760:5:22",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2767:3:22",
                "type": ""
              }
            ],
            "src": "2707:118:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2929:124:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2939:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2951:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2962:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2947:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2947:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2939:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3019:6:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3032:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3043:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3028:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3028:17:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2975:43:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2975:71:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2975:71:22"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2901:9:22",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2913:6:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2924:4:22",
                "type": ""
              }
            ],
            "src": "2831:222:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3087:152:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3104:1:22",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3107:77:22",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3097:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3097:88:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3097:88:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3201:1:22",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3204:4:22",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3194:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3194:15:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3194:15:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3225:1:22",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3228:4:22",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3218:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3218:15:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3218:15:22"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "3059:180:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3296:269:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3306:22:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "3320:4:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3326:1:22",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "3316:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3316:12:22"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "3306:6:22"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3337:38:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "3367:4:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3373:1:22",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "3363:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3363:12:22"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "3341:18:22",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3414:51:22",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3428:27:22",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3442:6:22"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3450:4:22",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "3438:3:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3438:17:22"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "3428:6:22"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "3394:18:22"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3387:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3387:26:22"
                  },
                  "nodeType": "YulIf",
                  "src": "3384:81:22"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3517:42:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "3531:16:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3531:18:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3531:18:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "3481:18:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "3504:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3512:2:22",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "3501:2:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3501:14:22"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "3478:2:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3478:38:22"
                  },
                  "nodeType": "YulIf",
                  "src": "3475:84:22"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "3280:4:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "3289:6:22",
                "type": ""
              }
            ],
            "src": "3245:320:22"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n}\n",
      "id": 22,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:13861:22",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "66:40:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "77:22:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "93:5:22"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "87:5:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "87:12:22"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "77:6:22"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "49:5:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "59:6:22",
                "type": ""
              }
            ],
            "src": "7:99:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "208:73:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "225:3:22"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "230:6:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "218:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "218:19:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "218:19:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "246:29:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "265:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "270:4:22",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "261:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "261:14:22"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "246:11:22"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "180:3:22",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "185:6:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "196:11:22",
                "type": ""
              }
            ],
            "src": "112:169:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "336:258:22",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "346:10:22",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "355:1:22",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "350:1:22",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "415:63:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "440:3:22"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "445:1:22"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "436:3:22"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "436:11:22"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "459:3:22"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "464:1:22"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "455:3:22"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "455:11:22"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "449:5:22"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "449:18:22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "429:6:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "429:39:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "429:39:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "376:1:22"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "379:6:22"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "373:2:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "373:13:22"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "387:19:22",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "389:15:22",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "398:1:22"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "401:2:22",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "394:3:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "394:10:22"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "389:1:22"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "369:3:22",
                    "statements": []
                  },
                  "src": "365:113:22"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "512:76:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "562:3:22"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "567:6:22"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "558:3:22"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "558:16:22"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "576:1:22",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "551:6:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "551:27:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "551:27:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "493:1:22"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "496:6:22"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "490:2:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "490:13:22"
                  },
                  "nodeType": "YulIf",
                  "src": "487:101:22"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "318:3:22",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "323:3:22",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "328:6:22",
                "type": ""
              }
            ],
            "src": "287:307:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "648:54:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "658:38:22",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "676:5:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "683:2:22",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "672:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "672:14:22"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "692:2:22",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "688:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "688:7:22"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "668:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "668:28:22"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "658:6:22"
                    }
                  ]
                }
              ]
            },
            "name": "round_up_to_mul_of_32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "631:5:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "641:6:22",
                "type": ""
              }
            ],
            "src": "600:102:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "800:272:22",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "810:53:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "857:5:22"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "824:32:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "824:39:22"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "814:6:22",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "872:78:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "938:3:22"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "943:6:22"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "879:58:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "879:71:22"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "872:3:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "985:5:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "992:4:22",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "981:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "981:16:22"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "999:3:22"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1004:6:22"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "959:21:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "959:52:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "959:52:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1020:46:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1031:3:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1058:6:22"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "1036:21:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1036:29:22"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1027:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1027:39:22"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "1020:3:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "781:5:22",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "788:3:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "796:3:22",
                "type": ""
              }
            ],
            "src": "708:364:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1196:195:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1206:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1218:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1229:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1214:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1214:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1206:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1253:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1264:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1249:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1249:17:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1272:4:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1278:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1268:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1268:20:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1242:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1242:47:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1242:47:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1298:86:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1370:6:22"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1379:4:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1306:63:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1306:78:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1298:4:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1168:9:22",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1180:6:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1191:4:22",
                "type": ""
              }
            ],
            "src": "1078:313:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1437:35:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1447:19:22",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1463:2:22",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1457:5:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1457:9:22"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "1447:6:22"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "1430:6:22",
                "type": ""
              }
            ],
            "src": "1397:75:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1567:28:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1584:1:22",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1587:1:22",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "1577:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1577:12:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1577:12:22"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "1478:117:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1690:28:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1707:1:22",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1710:1:22",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "1700:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1700:12:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1700:12:22"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "1601:117:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1769:81:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1779:65:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1794:5:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1801:42:22",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1790:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1790:54:22"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1779:7:22"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1751:5:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1761:7:22",
                "type": ""
              }
            ],
            "src": "1724:126:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1901:51:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1911:35:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1940:5:22"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "1922:17:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1922:24:22"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1911:7:22"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1883:5:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1893:7:22",
                "type": ""
              }
            ],
            "src": "1856:96:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2001:79:22",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2058:16:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2067:1:22",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2070:1:22",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2060:6:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2060:12:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2060:12:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2024:5:22"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "2049:5:22"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "2031:17:22"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2031:24:22"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "2021:2:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2021:35:22"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2014:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2014:43:22"
                  },
                  "nodeType": "YulIf",
                  "src": "2011:63:22"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1994:5:22",
                "type": ""
              }
            ],
            "src": "1958:122:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2138:87:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2148:29:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2170:6:22"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2157:12:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2157:20:22"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2148:5:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2213:5:22"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "2186:26:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2186:33:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2186:33:22"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2116:6:22",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2124:3:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2132:5:22",
                "type": ""
              }
            ],
            "src": "2086:139:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2276:32:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2286:16:22",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2297:5:22"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "2286:7:22"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2258:5:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "2268:7:22",
                "type": ""
              }
            ],
            "src": "2231:77:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2357:79:22",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2414:16:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2423:1:22",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2426:1:22",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2416:6:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2416:12:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2416:12:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2380:5:22"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "2405:5:22"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "2387:17:22"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2387:24:22"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "2377:2:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2377:35:22"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2370:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2370:43:22"
                  },
                  "nodeType": "YulIf",
                  "src": "2367:63:22"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2350:5:22",
                "type": ""
              }
            ],
            "src": "2314:122:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2494:87:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2504:29:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2526:6:22"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2513:12:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2513:20:22"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2504:5:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2569:5:22"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "2542:26:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2542:33:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2542:33:22"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2472:6:22",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2480:3:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2488:5:22",
                "type": ""
              }
            ],
            "src": "2442:139:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2670:391:22",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2716:83:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "2718:77:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2718:79:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2718:79:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2691:7:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2700:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2687:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2687:23:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2712:2:22",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2683:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2683:32:22"
                  },
                  "nodeType": "YulIf",
                  "src": "2680:119:22"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2809:117:22",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2824:15:22",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2838:1:22",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2828:6:22",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2853:63:22",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2888:9:22"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2899:6:22"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2884:3:22"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2884:22:22"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2908:7:22"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "2863:20:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2863:53:22"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2853:6:22"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2936:118:22",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2951:16:22",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2965:2:22",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2955:6:22",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2981:63:22",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3016:9:22"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3027:6:22"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3012:3:22"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3012:22:22"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3036:7:22"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "2991:20:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2991:53:22"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "2981:6:22"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2632:9:22",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2643:7:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2655:6:22",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2663:6:22",
                "type": ""
              }
            ],
            "src": "2587:474:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3109:48:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3119:32:22",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3144:5:22"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "3137:6:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3137:13:22"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3130:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3130:21:22"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "3119:7:22"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3091:5:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "3101:7:22",
                "type": ""
              }
            ],
            "src": "3067:90:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3222:50:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3239:3:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3259:5:22"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "3244:14:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3244:21:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3232:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3232:34:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3232:34:22"
                }
              ]
            },
            "name": "abi_encode_t_bool_to_t_bool_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3210:5:22",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3217:3:22",
                "type": ""
              }
            ],
            "src": "3163:109:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3370:118:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3380:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3392:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3403:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3388:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3388:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3380:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3454:6:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3467:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3478:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3463:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3463:17:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3416:37:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3416:65:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3416:65:22"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3342:9:22",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3354:6:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3365:4:22",
                "type": ""
              }
            ],
            "src": "3278:210:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3559:53:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3576:3:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3599:5:22"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "3581:17:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3581:24:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3569:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3569:37:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3569:37:22"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3547:5:22",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3554:3:22",
                "type": ""
              }
            ],
            "src": "3494:118:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3716:124:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3726:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3738:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3749:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3734:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3734:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3726:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3806:6:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3819:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3830:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3815:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3815:17:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3762:43:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3762:71:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3762:71:22"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3688:9:22",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3700:6:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3711:4:22",
                "type": ""
              }
            ],
            "src": "3618:222:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3946:519:22",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3992:83:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "3994:77:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3994:79:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3994:79:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3967:7:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3976:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3963:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3963:23:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3988:2:22",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3959:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3959:32:22"
                  },
                  "nodeType": "YulIf",
                  "src": "3956:119:22"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4085:117:22",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4100:15:22",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4114:1:22",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4104:6:22",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4129:63:22",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4164:9:22"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4175:6:22"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4160:3:22"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4160:22:22"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4184:7:22"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4139:20:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4139:53:22"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4129:6:22"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4212:118:22",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4227:16:22",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4241:2:22",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4231:6:22",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4257:63:22",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4292:9:22"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4303:6:22"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4288:3:22"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4288:22:22"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4312:7:22"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4267:20:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4267:53:22"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4257:6:22"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4340:118:22",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4355:16:22",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4369:2:22",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4359:6:22",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4385:63:22",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4420:9:22"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4431:6:22"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4416:3:22"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4416:22:22"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4440:7:22"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4395:20:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4395:53:22"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "4385:6:22"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3900:9:22",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3911:7:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3923:6:22",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3931:6:22",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "3939:6:22",
                "type": ""
              }
            ],
            "src": "3846:619:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4514:43:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4524:27:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4539:5:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4546:4:22",
                        "type": "",
                        "value": "0xff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "4535:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4535:16:22"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "4524:7:22"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint8",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4496:5:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "4506:7:22",
                "type": ""
              }
            ],
            "src": "4471:86:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4624:51:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4641:3:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4662:5:22"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint8",
                          "nodeType": "YulIdentifier",
                          "src": "4646:15:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4646:22:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4634:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4634:35:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4634:35:22"
                }
              ]
            },
            "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4612:5:22",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4619:3:22",
                "type": ""
              }
            ],
            "src": "4563:112:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4775:120:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4785:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4797:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4808:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4793:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4793:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4785:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4861:6:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4874:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4885:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4870:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4870:17:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4821:39:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4821:67:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4821:67:22"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4747:9:22",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4759:6:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4770:4:22",
                "type": ""
              }
            ],
            "src": "4681:214:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4967:263:22",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5013:83:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "5015:77:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5015:79:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5015:79:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4988:7:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4997:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4984:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4984:23:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5009:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4980:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4980:32:22"
                  },
                  "nodeType": "YulIf",
                  "src": "4977:119:22"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5106:117:22",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5121:15:22",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5135:1:22",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5125:6:22",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5150:63:22",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5185:9:22"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5196:6:22"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5181:3:22"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5181:22:22"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5205:7:22"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "5160:20:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5160:53:22"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5150:6:22"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4937:9:22",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4948:7:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4960:6:22",
                "type": ""
              }
            ],
            "src": "4901:329:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5319:391:22",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5365:83:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "5367:77:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5367:79:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5367:79:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5340:7:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5349:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5336:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5336:23:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5361:2:22",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5332:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5332:32:22"
                  },
                  "nodeType": "YulIf",
                  "src": "5329:119:22"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5458:117:22",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5473:15:22",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5487:1:22",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5477:6:22",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5502:63:22",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5537:9:22"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5548:6:22"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5533:3:22"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5533:22:22"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5557:7:22"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "5512:20:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5512:53:22"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5502:6:22"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5585:118:22",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5600:16:22",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5614:2:22",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5604:6:22",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5630:63:22",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5665:9:22"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5676:6:22"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5661:3:22"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5661:22:22"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5685:7:22"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "5640:20:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5640:53:22"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "5630:6:22"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5281:9:22",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5292:7:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5304:6:22",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5312:6:22",
                "type": ""
              }
            ],
            "src": "5236:474:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5744:152:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5761:1:22",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5764:77:22",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5754:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5754:88:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5754:88:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5858:1:22",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5861:4:22",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5851:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5851:15:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5851:15:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5882:1:22",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5885:4:22",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "5875:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5875:15:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5875:15:22"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "5716:180:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5953:269:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5963:22:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "5977:4:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5983:1:22",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "5973:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5973:12:22"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "5963:6:22"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5994:38:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "6024:4:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6030:1:22",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "6020:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6020:12:22"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "5998:18:22",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6071:51:22",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "6085:27:22",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "6099:6:22"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6107:4:22",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "6095:3:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6095:17:22"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "6085:6:22"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "6051:18:22"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "6044:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6044:26:22"
                  },
                  "nodeType": "YulIf",
                  "src": "6041:81:22"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6174:42:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "6188:16:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6188:18:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6188:18:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "6138:18:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "6161:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6169:2:22",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "6158:2:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6158:14:22"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "6135:2:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6135:38:22"
                  },
                  "nodeType": "YulIf",
                  "src": "6132:84:22"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "5937:4:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "5946:6:22",
                "type": ""
              }
            ],
            "src": "5902:320:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6256:152:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6273:1:22",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6276:77:22",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6266:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6266:88:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6266:88:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6370:1:22",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6373:4:22",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6363:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6363:15:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6363:15:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6394:1:22",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6397:4:22",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "6387:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6387:15:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6387:15:22"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "6228:180:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6458:261:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6468:25:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "6491:1:22"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "6473:17:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6473:20:22"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "6468:1:22"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6502:25:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "6525:1:22"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "6507:17:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6507:20:22"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "6502:1:22"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6665:22:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "6667:16:22"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6667:18:22"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6667:18:22"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "6586:1:22"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6593:66:22",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "6661:1:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6589:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6589:74:22"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "6583:2:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6583:81:22"
                  },
                  "nodeType": "YulIf",
                  "src": "6580:107:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6697:16:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "6708:1:22"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "6711:1:22"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6704:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6704:9:22"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "6697:3:22"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "6445:1:22",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "6448:1:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "6454:3:22",
                "type": ""
              }
            ],
            "src": "6414:305:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6831:118:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "6853:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6861:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6849:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6849:14:22"
                      },
                      {
                        "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6865:34:22",
                        "type": "",
                        "value": "ERC20: decreased allowance below"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6842:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6842:58:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6842:58:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "6921:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6929:2:22",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6917:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6917:15:22"
                      },
                      {
                        "hexValue": "207a65726f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6934:7:22",
                        "type": "",
                        "value": " zero"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6910:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6910:32:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6910:32:22"
                }
              ]
            },
            "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "6823:6:22",
                "type": ""
              }
            ],
            "src": "6725:224:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7101:220:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7111:74:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7177:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7182:2:22",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7118:58:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7118:67:22"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7111:3:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7283:3:22"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
                      "nodeType": "YulIdentifier",
                      "src": "7194:88:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7194:93:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7194:93:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7296:19:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7307:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7312:2:22",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7303:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7303:12:22"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "7296:3:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "7089:3:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "7097:3:22",
                "type": ""
              }
            ],
            "src": "6955:366:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7498:248:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7508:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7520:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7531:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7516:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7516:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7508:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7555:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7566:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7551:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7551:17:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "7574:4:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7580:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7570:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7570:20:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7544:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7544:47:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7544:47:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7600:139:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7734:4:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7608:124:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7608:131:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7600:4:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7478:9:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7493:4:22",
                "type": ""
              }
            ],
            "src": "7327:419:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7858:117:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "7880:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7888:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7876:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7876:14:22"
                      },
                      {
                        "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7892:34:22",
                        "type": "",
                        "value": "ERC20: approve from the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7869:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7869:58:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7869:58:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "7948:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7956:2:22",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7944:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7944:15:22"
                      },
                      {
                        "hexValue": "72657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7961:6:22",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7937:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7937:31:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7937:31:22"
                }
              ]
            },
            "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "7850:6:22",
                "type": ""
              }
            ],
            "src": "7752:223:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8127:220:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8137:74:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8203:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8208:2:22",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8144:58:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8144:67:22"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "8137:3:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8309:3:22"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
                      "nodeType": "YulIdentifier",
                      "src": "8220:88:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8220:93:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8220:93:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8322:19:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8333:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8338:2:22",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8329:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8329:12:22"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "8322:3:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8115:3:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8123:3:22",
                "type": ""
              }
            ],
            "src": "7981:366:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8524:248:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8534:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8546:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8557:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8542:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8542:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8534:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8581:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8592:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8577:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8577:17:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "8600:4:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8606:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "8596:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8596:20:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8570:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8570:47:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8570:47:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8626:139:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8760:4:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8634:124:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8634:131:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8626:4:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8504:9:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8519:4:22",
                "type": ""
              }
            ],
            "src": "8353:419:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8884:115:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "8906:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8914:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8902:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8902:14:22"
                      },
                      {
                        "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8918:34:22",
                        "type": "",
                        "value": "ERC20: approve to the zero addre"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8895:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8895:58:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8895:58:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "8974:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8982:2:22",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8970:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8970:15:22"
                      },
                      {
                        "hexValue": "7373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8987:4:22",
                        "type": "",
                        "value": "ss"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8963:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8963:29:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8963:29:22"
                }
              ]
            },
            "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "8876:6:22",
                "type": ""
              }
            ],
            "src": "8778:221:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9151:220:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9161:74:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9227:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9232:2:22",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9168:58:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9168:67:22"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "9161:3:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9333:3:22"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
                      "nodeType": "YulIdentifier",
                      "src": "9244:88:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9244:93:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9244:93:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9346:19:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9357:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9362:2:22",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9353:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9353:12:22"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "9346:3:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "9139:3:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "9147:3:22",
                "type": ""
              }
            ],
            "src": "9005:366:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9548:248:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9558:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9570:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9581:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9566:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9566:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9558:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9605:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9616:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9601:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9601:17:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "9624:4:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9630:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9620:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9620:20:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9594:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9594:47:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9594:47:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9650:139:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9784:4:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9658:124:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9658:131:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9650:4:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9528:9:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9543:4:22",
                "type": ""
              }
            ],
            "src": "9377:419:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9908:73:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "9930:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9938:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9926:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9926:14:22"
                      },
                      {
                        "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9942:31:22",
                        "type": "",
                        "value": "ERC20: insufficient allowance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9919:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9919:55:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9919:55:22"
                }
              ]
            },
            "name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "9900:6:22",
                "type": ""
              }
            ],
            "src": "9802:179:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10133:220:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10143:74:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10209:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10214:2:22",
                        "type": "",
                        "value": "29"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10150:58:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10150:67:22"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "10143:3:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10315:3:22"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
                      "nodeType": "YulIdentifier",
                      "src": "10226:88:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10226:93:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10226:93:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10328:19:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10339:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10344:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10335:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10335:12:22"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "10328:3:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "10121:3:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "10129:3:22",
                "type": ""
              }
            ],
            "src": "9987:366:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10530:248:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10540:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10552:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10563:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10548:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10548:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10540:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10587:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10598:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10583:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10583:17:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "10606:4:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10612:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "10602:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10602:20:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10576:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10576:47:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10576:47:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10632:139:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10766:4:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10640:124:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10640:131:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10632:4:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10510:9:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10525:4:22",
                "type": ""
              }
            ],
            "src": "10359:419:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10890:118:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "10912:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10920:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10908:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10908:14:22"
                      },
                      {
                        "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10924:34:22",
                        "type": "",
                        "value": "ERC20: transfer from the zero ad"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10901:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10901:58:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10901:58:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "10980:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10988:2:22",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10976:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10976:15:22"
                      },
                      {
                        "hexValue": "6472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10993:7:22",
                        "type": "",
                        "value": "dress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10969:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10969:32:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10969:32:22"
                }
              ]
            },
            "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "10882:6:22",
                "type": ""
              }
            ],
            "src": "10784:224:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11160:220:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11170:74:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11236:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11241:2:22",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11177:58:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11177:67:22"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "11170:3:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11342:3:22"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
                      "nodeType": "YulIdentifier",
                      "src": "11253:88:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11253:93:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11253:93:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11355:19:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11366:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11371:2:22",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11362:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11362:12:22"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "11355:3:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "11148:3:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "11156:3:22",
                "type": ""
              }
            ],
            "src": "11014:366:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11557:248:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11567:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11579:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11590:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11575:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11575:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11567:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11614:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11625:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11610:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11610:17:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "11633:4:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11639:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "11629:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11629:20:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11603:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11603:47:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11603:47:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11659:139:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "11793:4:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11667:124:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11667:131:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11659:4:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11537:9:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11552:4:22",
                "type": ""
              }
            ],
            "src": "11386:419:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11917:116:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "11939:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11947:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11935:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11935:14:22"
                      },
                      {
                        "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11951:34:22",
                        "type": "",
                        "value": "ERC20: transfer to the zero addr"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11928:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11928:58:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11928:58:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "12007:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12015:2:22",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12003:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12003:15:22"
                      },
                      {
                        "hexValue": "657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12020:5:22",
                        "type": "",
                        "value": "ess"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11996:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11996:30:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11996:30:22"
                }
              ]
            },
            "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "11909:6:22",
                "type": ""
              }
            ],
            "src": "11811:222:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12185:220:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12195:74:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12261:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12266:2:22",
                        "type": "",
                        "value": "35"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12202:58:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12202:67:22"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "12195:3:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12367:3:22"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
                      "nodeType": "YulIdentifier",
                      "src": "12278:88:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12278:93:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12278:93:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12380:19:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12391:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12396:2:22",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12387:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12387:12:22"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "12380:3:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "12173:3:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "12181:3:22",
                "type": ""
              }
            ],
            "src": "12039:366:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12582:248:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12592:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12604:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12615:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12600:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12600:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12592:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12639:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12650:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12635:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12635:17:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "12658:4:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12664:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "12654:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12654:20:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12628:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12628:47:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12628:47:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12684:139:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "12818:4:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12692:124:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12692:131:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12684:4:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12562:9:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12577:4:22",
                "type": ""
              }
            ],
            "src": "12411:419:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12942:119:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "12964:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12972:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12960:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12960:14:22"
                      },
                      {
                        "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12976:34:22",
                        "type": "",
                        "value": "ERC20: transfer amount exceeds b"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12953:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12953:58:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12953:58:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "13032:6:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13040:2:22",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13028:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13028:15:22"
                      },
                      {
                        "hexValue": "616c616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13045:8:22",
                        "type": "",
                        "value": "alance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13021:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13021:33:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13021:33:22"
                }
              ]
            },
            "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "12934:6:22",
                "type": ""
              }
            ],
            "src": "12836:225:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13213:220:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13223:74:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13289:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13294:2:22",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13230:58:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13230:67:22"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "13223:3:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13395:3:22"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
                      "nodeType": "YulIdentifier",
                      "src": "13306:88:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13306:93:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13306:93:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13408:19:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13419:3:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13424:2:22",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13415:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13415:12:22"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "13408:3:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "13201:3:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "13209:3:22",
                "type": ""
              }
            ],
            "src": "13067:366:22"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13610:248:22",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13620:26:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13632:9:22"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13643:2:22",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13628:3:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13628:18:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13620:4:22"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13667:9:22"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13678:1:22",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13663:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13663:17:22"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13686:4:22"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13692:9:22"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "13682:3:22"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13682:20:22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13656:6:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13656:47:22"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13656:47:22"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13712:139:22",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13846:4:22"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13720:124:22"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13720:131:22"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13712:4:22"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13590:9:22",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13605:4:22",
                "type": ""
              }
            ],
            "src": "13439:419:22"
          }
        ]
      },
      "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: decreased allowance below\")\n\n        mstore(add(memPtr, 32), \" zero\")\n\n    }\n\n    function abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve from the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve to the zero addre\")\n\n        mstore(add(memPtr, 32), \"ss\")\n\n    }\n\n    function abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: insufficient allowance\")\n\n    }\n\n    function abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n        store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer from the zero ad\")\n\n        mstore(add(memPtr, 32), \"dress\")\n\n    }\n\n    function abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer to the zero addr\")\n\n        mstore(add(memPtr, 32), \"ess\")\n\n    }\n\n    function abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 35)\n        store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer amount exceeds b\")\n\n        mstore(add(memPtr, 32), \"alance\")\n\n    }\n\n    function abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
      "id": 22,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "82:257:21:-:0;;;116:120;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1978:113:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2052:5;2044;:13;;;;;;;;;;;;:::i;:::-;;2077:7;2067;:17;;;;;;;;;;;;:::i;:::-;;1978:113;;197:32:21::1;203:10;215:13;197:5;;;:32;;:::i;:::-;116:120:::0;82:257;;8411:389:2;8513:1;8494:21;;:7;:21;;;8486:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8562:49;8591:1;8595:7;8604:6;8562:20;;;:49;;:::i;:::-;8638:6;8622:12;;:22;;;;;;;:::i;:::-;;;;;;;;8676:6;8654:9;:18;8664:7;8654:18;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;8718:7;8697:37;;8714:1;8697:37;;;8727:6;8697:37;;;;;;:::i;:::-;;;;;;;;8745:48;8773:1;8777:7;8786:6;8745:19;;;:48;;:::i;:::-;8411:389;;:::o;11795:121::-;;;;:::o;12504:120::-;;;;:::o;82:257:21:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;88:117:22:-;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:143::-;602:5;633:6;627:13;618:22;;649:33;676:5;649:33;:::i;:::-;545:143;;;;:::o;694:351::-;764:6;813:2;801:9;792:7;788:23;784:32;781:119;;;819:79;;:::i;:::-;781:119;939:1;964:64;1020:7;1011:6;1000:9;996:22;964:64;:::i;:::-;954:74;;910:128;694:351;;;;:::o;1051:169::-;1135:11;1169:6;1164:3;1157:19;1209:4;1204:3;1200:14;1185:29;;1051:169;;;;:::o;1226:181::-;1366:33;1362:1;1354:6;1350:14;1343:57;1226:181;:::o;1413:366::-;1555:3;1576:67;1640:2;1635:3;1576:67;:::i;:::-;1569:74;;1652:93;1741:3;1652:93;:::i;:::-;1770:2;1765:3;1761:12;1754:19;;1413:366;;;:::o;1785:419::-;1951:4;1989:2;1978:9;1974:18;1966:26;;2038:9;2032:4;2028:20;2024:1;2013:9;2009:17;2002:47;2066:131;2192:4;2066:131;:::i;:::-;2058:139;;1785:419;;;:::o;2210:180::-;2258:77;2255:1;2248:88;2355:4;2352:1;2345:15;2379:4;2376:1;2369:15;2396:305;2436:3;2455:20;2473:1;2455:20;:::i;:::-;2450:25;;2489:20;2507:1;2489:20;:::i;:::-;2484:25;;2643:1;2575:66;2571:74;2568:1;2565:81;2562:107;;;2649:18;;:::i;:::-;2562:107;2693:1;2690;2686:9;2679:16;;2396:305;;;;:::o;2707:118::-;2794:24;2812:5;2794:24;:::i;:::-;2789:3;2782:37;2707:118;;:::o;2831:222::-;2924:4;2962:2;2951:9;2947:18;2939:26;;2975:71;3043:1;3032:9;3028:17;3019:6;2975:71;:::i;:::-;2831:222;;;;:::o;3059:180::-;3107:77;3104:1;3097:88;3204:4;3201:1;3194:15;3228:4;3225:1;3218:15;3245:320;3289:6;3326:1;3320:4;3316:12;3306:22;;3373:1;3367:4;3363:12;3394:18;3384:81;;3450:4;3442:6;3438:17;3428:27;;3384:81;3512:2;3504:6;3501:14;3481:18;3478:38;3475:84;;3531:18;;:::i;:::-;3475:84;3296:269;3245:320;;;:::o;82:257:21:-;;;;;;;",
  "deployedSourceMap": "82:257:21:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98:2;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4433:197;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3244:106;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5192:286;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;246:91:21;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5873:234:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3408:125;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2367:102;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6594:427;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3729:189;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3976:149;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2156:98;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;4532:13;4548:12;:10;:12::i;:::-;4532:28;;4570:32;4579:5;4586:7;4595:6;4570:8;:32::i;:::-;4619:4;4612:11;;;4433:197;;;;:::o;3244:106::-;3305:7;3331:12;;3324:19;;3244:106;:::o;5192:286::-;5319:4;5335:15;5353:12;:10;:12::i;:::-;5335:30;;5375:38;5391:4;5397:7;5406:6;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;5467:4;5460:11;;;5192:286;;;;;:::o;246:91:21:-;304:5;328:2;321:9;;246:91;:::o;5873:234:2:-;5961:4;5977:13;5993:12;:10;:12::i;:::-;5977:28;;6015:64;6024:5;6031:7;6068:10;6040:25;6050:5;6057:7;6040:9;:25::i;:::-;:38;;;;:::i;:::-;6015:8;:64::i;:::-;6096:4;6089:11;;;5873:234;;;;:::o;3408:125::-;3482:7;3508:9;:18;3518:7;3508:18;;;;;;;;;;;;;;;;3501:25;;3408:125;;;:::o;2367:102::-;2423:13;2455:7;2448:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2367:102;:::o;6594:427::-;6687:4;6703:13;6719:12;:10;:12::i;:::-;6703:28;;6741:24;6768:25;6778:5;6785:7;6768:9;:25::i;:::-;6741:52;;6831:15;6811:16;:35;;6803:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;:::-;7010:4;7003:11;;;;6594:427;;;;:::o;3729:189::-;3808:4;3824:13;3840:12;:10;:12::i;:::-;3824:28;;3862;3872:5;3879:2;3883:6;3862:9;:28::i;:::-;3907:4;3900:11;;;3729:189;;;;:::o;3976:149::-;4065:7;4091:11;:18;4103:5;4091:18;;;;;;;;;;;;;;;:27;4110:7;4091:27;;;;;;;;;;;;;;;;4084:34;;3976:149;;;;:::o;640:96:13:-;693:7;719:10;712:17;;640:96;:::o;10119:370:2:-;10267:1;10250:19;;:5;:19;;;10242:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10347:1;10328:21;;:7;:21;;;10320:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10429:6;10399:11;:18;10411:5;10399:18;;;;;;;;;;;;;;;:27;10418:7;10399:27;;;;;;;;;;;;;;;:36;;;;10466:7;10450:32;;10459:5;10450:32;;;10475:6;10450:32;;;;;;:::i;:::-;;;;;;;;10119:370;;;:::o;10770:441::-;10900:24;10927:25;10937:5;10944:7;10927:9;:25::i;:::-;10900:52;;10986:17;10966:16;:37;10962:243;;11047:6;11027:16;:26;;11019:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;11129:51;11138:5;11145:7;11173:6;11154:16;:25;11129:8;:51::i;:::-;10962:243;10890:321;10770:441;;;:::o;7484:651::-;7626:1;7610:18;;:4;:18;;;7602:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;7702:1;7688:16;;:2;:16;;;7680:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;7755:38;7776:4;7782:2;7786:6;7755:20;:38::i;:::-;7804:19;7826:9;:15;7836:4;7826:15;;;;;;;;;;;;;;;;7804:37;;7874:6;7859:11;:21;;7851:72;;;;;;;;;;;;:::i;:::-;;;;;;;;;7989:6;7975:11;:20;7957:9;:15;7967:4;7957:15;;;;;;;;;;;;;;;:38;;;;8032:6;8015:9;:13;8025:2;8015:13;;;;;;;;;;;;;;;;:23;;;;;;;:::i;:::-;;;;;;;;8069:2;8054:26;;8063:4;8054:26;;;8073:6;8054:26;;;;;;:::i;:::-;;;;;;;;8091:37;8111:4;8117:2;8121:6;8091:19;:37::i;:::-;7592:543;7484:651;;;:::o;11795:121::-;;;;:::o;12504:120::-;;;;:::o;7:99:22:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:307::-;355:1;365:113;379:6;376:1;373:13;365:113;;;464:1;459:3;455:11;449:18;445:1;440:3;436:11;429:39;401:2;398:1;394:10;389:15;;365:113;;;496:6;493:1;490:13;487:101;;;576:1;567:6;562:3;558:16;551:27;487:101;336:258;287:307;;;:::o;600:102::-;641:6;692:2;688:7;683:2;676:5;672:14;668:28;658:38;;600:102;;;:::o;708:364::-;796:3;824:39;857:5;824:39;:::i;:::-;879:71;943:6;938:3;879:71;:::i;:::-;872:78;;959:52;1004:6;999:3;992:4;985:5;981:16;959:52;:::i;:::-;1036:29;1058:6;1036:29;:::i;:::-;1031:3;1027:39;1020:46;;800:272;708:364;;;;:::o;1078:313::-;1191:4;1229:2;1218:9;1214:18;1206:26;;1278:9;1272:4;1268:20;1264:1;1253:9;1249:17;1242:47;1306:78;1379:4;1370:6;1306:78;:::i;:::-;1298:86;;1078:313;;;;:::o;1478:117::-;1587:1;1584;1577:12;1724:126;1761:7;1801:42;1794:5;1790:54;1779:65;;1724:126;;;:::o;1856:96::-;1893:7;1922:24;1940:5;1922:24;:::i;:::-;1911:35;;1856:96;;;:::o;1958:122::-;2031:24;2049:5;2031:24;:::i;:::-;2024:5;2021:35;2011:63;;2070:1;2067;2060:12;2011:63;1958:122;:::o;2086:139::-;2132:5;2170:6;2157:20;2148:29;;2186:33;2213:5;2186:33;:::i;:::-;2086:139;;;;:::o;2231:77::-;2268:7;2297:5;2286:16;;2231:77;;;:::o;2314:122::-;2387:24;2405:5;2387:24;:::i;:::-;2380:5;2377:35;2367:63;;2426:1;2423;2416:12;2367:63;2314:122;:::o;2442:139::-;2488:5;2526:6;2513:20;2504:29;;2542:33;2569:5;2542:33;:::i;:::-;2442:139;;;;:::o;2587:474::-;2655:6;2663;2712:2;2700:9;2691:7;2687:23;2683:32;2680:119;;;2718:79;;:::i;:::-;2680:119;2838:1;2863:53;2908:7;2899:6;2888:9;2884:22;2863:53;:::i;:::-;2853:63;;2809:117;2965:2;2991:53;3036:7;3027:6;3016:9;3012:22;2991:53;:::i;:::-;2981:63;;2936:118;2587:474;;;;;:::o;3067:90::-;3101:7;3144:5;3137:13;3130:21;3119:32;;3067:90;;;:::o;3163:109::-;3244:21;3259:5;3244:21;:::i;:::-;3239:3;3232:34;3163:109;;:::o;3278:210::-;3365:4;3403:2;3392:9;3388:18;3380:26;;3416:65;3478:1;3467:9;3463:17;3454:6;3416:65;:::i;:::-;3278:210;;;;:::o;3494:118::-;3581:24;3599:5;3581:24;:::i;:::-;3576:3;3569:37;3494:118;;:::o;3618:222::-;3711:4;3749:2;3738:9;3734:18;3726:26;;3762:71;3830:1;3819:9;3815:17;3806:6;3762:71;:::i;:::-;3618:222;;;;:::o;3846:619::-;3923:6;3931;3939;3988:2;3976:9;3967:7;3963:23;3959:32;3956:119;;;3994:79;;:::i;:::-;3956:119;4114:1;4139:53;4184:7;4175:6;4164:9;4160:22;4139:53;:::i;:::-;4129:63;;4085:117;4241:2;4267:53;4312:7;4303:6;4292:9;4288:22;4267:53;:::i;:::-;4257:63;;4212:118;4369:2;4395:53;4440:7;4431:6;4420:9;4416:22;4395:53;:::i;:::-;4385:63;;4340:118;3846:619;;;;;:::o;4471:86::-;4506:7;4546:4;4539:5;4535:16;4524:27;;4471:86;;;:::o;4563:112::-;4646:22;4662:5;4646:22;:::i;:::-;4641:3;4634:35;4563:112;;:::o;4681:214::-;4770:4;4808:2;4797:9;4793:18;4785:26;;4821:67;4885:1;4874:9;4870:17;4861:6;4821:67;:::i;:::-;4681:214;;;;:::o;4901:329::-;4960:6;5009:2;4997:9;4988:7;4984:23;4980:32;4977:119;;;5015:79;;:::i;:::-;4977:119;5135:1;5160:53;5205:7;5196:6;5185:9;5181:22;5160:53;:::i;:::-;5150:63;;5106:117;4901:329;;;;:::o;5236:474::-;5304:6;5312;5361:2;5349:9;5340:7;5336:23;5332:32;5329:119;;;5367:79;;:::i;:::-;5329:119;5487:1;5512:53;5557:7;5548:6;5537:9;5533:22;5512:53;:::i;:::-;5502:63;;5458:117;5614:2;5640:53;5685:7;5676:6;5665:9;5661:22;5640:53;:::i;:::-;5630:63;;5585:118;5236:474;;;;;:::o;5716:180::-;5764:77;5761:1;5754:88;5861:4;5858:1;5851:15;5885:4;5882:1;5875:15;5902:320;5946:6;5983:1;5977:4;5973:12;5963:22;;6030:1;6024:4;6020:12;6051:18;6041:81;;6107:4;6099:6;6095:17;6085:27;;6041:81;6169:2;6161:6;6158:14;6138:18;6135:38;6132:84;;6188:18;;:::i;:::-;6132:84;5953:269;5902:320;;;:::o;6228:180::-;6276:77;6273:1;6266:88;6373:4;6370:1;6363:15;6397:4;6394:1;6387:15;6414:305;6454:3;6473:20;6491:1;6473:20;:::i;:::-;6468:25;;6507:20;6525:1;6507:20;:::i;:::-;6502:25;;6661:1;6593:66;6589:74;6586:1;6583:81;6580:107;;;6667:18;;:::i;:::-;6580:107;6711:1;6708;6704:9;6697:16;;6414:305;;;;:::o;6725:224::-;6865:34;6861:1;6853:6;6849:14;6842:58;6934:7;6929:2;6921:6;6917:15;6910:32;6725:224;:::o;6955:366::-;7097:3;7118:67;7182:2;7177:3;7118:67;:::i;:::-;7111:74;;7194:93;7283:3;7194:93;:::i;:::-;7312:2;7307:3;7303:12;7296:19;;6955:366;;;:::o;7327:419::-;7493:4;7531:2;7520:9;7516:18;7508:26;;7580:9;7574:4;7570:20;7566:1;7555:9;7551:17;7544:47;7608:131;7734:4;7608:131;:::i;:::-;7600:139;;7327:419;;;:::o;7752:223::-;7892:34;7888:1;7880:6;7876:14;7869:58;7961:6;7956:2;7948:6;7944:15;7937:31;7752:223;:::o;7981:366::-;8123:3;8144:67;8208:2;8203:3;8144:67;:::i;:::-;8137:74;;8220:93;8309:3;8220:93;:::i;:::-;8338:2;8333:3;8329:12;8322:19;;7981:366;;;:::o;8353:419::-;8519:4;8557:2;8546:9;8542:18;8534:26;;8606:9;8600:4;8596:20;8592:1;8581:9;8577:17;8570:47;8634:131;8760:4;8634:131;:::i;:::-;8626:139;;8353:419;;;:::o;8778:221::-;8918:34;8914:1;8906:6;8902:14;8895:58;8987:4;8982:2;8974:6;8970:15;8963:29;8778:221;:::o;9005:366::-;9147:3;9168:67;9232:2;9227:3;9168:67;:::i;:::-;9161:74;;9244:93;9333:3;9244:93;:::i;:::-;9362:2;9357:3;9353:12;9346:19;;9005:366;;;:::o;9377:419::-;9543:4;9581:2;9570:9;9566:18;9558:26;;9630:9;9624:4;9620:20;9616:1;9605:9;9601:17;9594:47;9658:131;9784:4;9658:131;:::i;:::-;9650:139;;9377:419;;;:::o;9802:179::-;9942:31;9938:1;9930:6;9926:14;9919:55;9802:179;:::o;9987:366::-;10129:3;10150:67;10214:2;10209:3;10150:67;:::i;:::-;10143:74;;10226:93;10315:3;10226:93;:::i;:::-;10344:2;10339:3;10335:12;10328:19;;9987:366;;;:::o;10359:419::-;10525:4;10563:2;10552:9;10548:18;10540:26;;10612:9;10606:4;10602:20;10598:1;10587:9;10583:17;10576:47;10640:131;10766:4;10640:131;:::i;:::-;10632:139;;10359:419;;;:::o;10784:224::-;10924:34;10920:1;10912:6;10908:14;10901:58;10993:7;10988:2;10980:6;10976:15;10969:32;10784:224;:::o;11014:366::-;11156:3;11177:67;11241:2;11236:3;11177:67;:::i;:::-;11170:74;;11253:93;11342:3;11253:93;:::i;:::-;11371:2;11366:3;11362:12;11355:19;;11014:366;;;:::o;11386:419::-;11552:4;11590:2;11579:9;11575:18;11567:26;;11639:9;11633:4;11629:20;11625:1;11614:9;11610:17;11603:47;11667:131;11793:4;11667:131;:::i;:::-;11659:139;;11386:419;;;:::o;11811:222::-;11951:34;11947:1;11939:6;11935:14;11928:58;12020:5;12015:2;12007:6;12003:15;11996:30;11811:222;:::o;12039:366::-;12181:3;12202:67;12266:2;12261:3;12202:67;:::i;:::-;12195:74;;12278:93;12367:3;12278:93;:::i;:::-;12396:2;12391:3;12387:12;12380:19;;12039:366;;;:::o;12411:419::-;12577:4;12615:2;12604:9;12600:18;12592:26;;12664:9;12658:4;12654:20;12650:1;12639:9;12635:17;12628:47;12692:131;12818:4;12692:131;:::i;:::-;12684:139;;12411:419;;;:::o;12836:225::-;12976:34;12972:1;12964:6;12960:14;12953:58;13045:8;13040:2;13032:6;13028:15;13021:33;12836:225;:::o;13067:366::-;13209:3;13230:67;13294:2;13289:3;13230:67;:::i;:::-;13223:74;;13306:93;13395:3;13306:93;:::i;:::-;13424:2;13419:3;13415:12;13408:19;;13067:366;;;:::o;13439:419::-;13605:4;13643:2;13632:9;13628:18;13620:26;;13692:9;13686:4;13682:20;13678:1;13667:9;13663:17;13656:47;13720:131;13846:4;13720:131;:::i;:::-;13712:139;;13439:419;;;:::o",
  "source": "pragma solidity ^0.8.9;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\n\ncontract SLMToken is ERC20 \n{\n    constructor(uint256 initialSupply) ERC20(\"Schizo Life Matters\", \"SLM\") {\n        _mint(msg.sender, initialSupply);\n    }\n    \n    function decimals() public view virtual override returns (uint8) {\n        return 10;\n    }\n}",
  "sourcePath": "C:\\Users\\Sergei\\git\\SLM-Coin\\blockchain\\contracts\\SLMToken.sol",
  "ast": {
    "absolutePath": "project:/contracts/SLMToken.sol",
    "exportedSymbols": {
      "Context": [
        2615
      ],
      "ERC20": [
        769
      ],
      "IERC20": [
        847
      ],
      "IERC20Metadata": [
        872
      ],
      "SLMToken": [
        4064
      ]
    },
    "id": 4065,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4035,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".9"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:21"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "id": 4036,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 4065,
        "sourceUnit": 770,
        "src": "25:55:21",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 4037,
              "name": "ERC20",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 769,
              "src": "103:5:21"
            },
            "id": 4038,
            "nodeType": "InheritanceSpecifier",
            "src": "103:5:21"
          }
        ],
        "canonicalName": "SLMToken",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 4064,
        "linearizedBaseContracts": [
          4064,
          769,
          872,
          847,
          2615
        ],
        "name": "SLMToken",
        "nameLocation": "91:8:21",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 4053,
              "nodeType": "Block",
              "src": "187:49:21",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 4048,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "203:3:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 4049,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "203:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 4050,
                        "name": "initialSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4040,
                        "src": "215:13:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 4047,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 586,
                      "src": "197:5:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 4051,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "197:32:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4052,
                  "nodeType": "ExpressionStatement",
                  "src": "197:32:21"
                }
              ]
            },
            "id": 4054,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "536368697a6f204c696665204d617474657273",
                    "id": 4043,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "157:21:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_c9ce03569ede32e5c80dbef712aad9459d2a200cce6baba1e74ee53bc72ceeeb",
                      "typeString": "literal_string \"Schizo Life Matters\""
                    },
                    "value": "Schizo Life Matters"
                  },
                  {
                    "hexValue": "534c4d",
                    "id": 4044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "180:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_23a8515f948bcc5ddc53b38bc13aebf56a8ca676b9768204401d1995840308c5",
                      "typeString": "literal_string \"SLM\""
                    },
                    "value": "SLM"
                  }
                ],
                "id": 4045,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 4042,
                  "name": "ERC20",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 769,
                  "src": "151:5:21"
                },
                "nodeType": "ModifierInvocation",
                "src": "151:35:21"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4041,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4040,
                  "mutability": "mutable",
                  "name": "initialSupply",
                  "nameLocation": "136:13:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 4054,
                  "src": "128:21:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4039,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "128:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "127:23:21"
            },
            "returnParameters": {
              "id": 4046,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "187:0:21"
            },
            "scope": 4064,
            "src": "116:120:21",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              258
            ],
            "body": {
              "id": 4062,
              "nodeType": "Block",
              "src": "311:26:21",
              "statements": [
                {
                  "expression": {
                    "hexValue": "3130",
                    "id": 4060,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "328:2:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_10_by_1",
                      "typeString": "int_const 10"
                    },
                    "value": "10"
                  },
                  "functionReturnParameters": 4059,
                  "id": 4061,
                  "nodeType": "Return",
                  "src": "321:9:21"
                }
              ]
            },
            "functionSelector": "313ce567",
            "id": 4063,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "255:8:21",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 4056,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "286:8:21"
            },
            "parameters": {
              "id": 4055,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "263:2:21"
            },
            "returnParameters": {
              "id": 4059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4058,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4063,
                  "src": "304:5:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 4057,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "304:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "303:7:21"
            },
            "scope": 4064,
            "src": "246:91:21",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "scope": 4065,
        "src": "82:257:21",
        "usedErrors": []
      }
    ],
    "src": "0:339:21"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/SLMToken.sol",
    "exportedSymbols": {
      "Context": [
        2615
      ],
      "ERC20": [
        769
      ],
      "IERC20": [
        847
      ],
      "IERC20Metadata": [
        872
      ],
      "SLMToken": [
        4064
      ]
    },
    "id": 4065,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4035,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".9"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:21"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "id": 4036,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 4065,
        "sourceUnit": 770,
        "src": "25:55:21",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 4037,
              "name": "ERC20",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 769,
              "src": "103:5:21"
            },
            "id": 4038,
            "nodeType": "InheritanceSpecifier",
            "src": "103:5:21"
          }
        ],
        "canonicalName": "SLMToken",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 4064,
        "linearizedBaseContracts": [
          4064,
          769,
          872,
          847,
          2615
        ],
        "name": "SLMToken",
        "nameLocation": "91:8:21",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 4053,
              "nodeType": "Block",
              "src": "187:49:21",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 4048,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "203:3:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 4049,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "203:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 4050,
                        "name": "initialSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4040,
                        "src": "215:13:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 4047,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 586,
                      "src": "197:5:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 4051,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "197:32:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4052,
                  "nodeType": "ExpressionStatement",
                  "src": "197:32:21"
                }
              ]
            },
            "id": 4054,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "536368697a6f204c696665204d617474657273",
                    "id": 4043,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "157:21:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_c9ce03569ede32e5c80dbef712aad9459d2a200cce6baba1e74ee53bc72ceeeb",
                      "typeString": "literal_string \"Schizo Life Matters\""
                    },
                    "value": "Schizo Life Matters"
                  },
                  {
                    "hexValue": "534c4d",
                    "id": 4044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "180:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_23a8515f948bcc5ddc53b38bc13aebf56a8ca676b9768204401d1995840308c5",
                      "typeString": "literal_string \"SLM\""
                    },
                    "value": "SLM"
                  }
                ],
                "id": 4045,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 4042,
                  "name": "ERC20",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 769,
                  "src": "151:5:21"
                },
                "nodeType": "ModifierInvocation",
                "src": "151:35:21"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4041,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4040,
                  "mutability": "mutable",
                  "name": "initialSupply",
                  "nameLocation": "136:13:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 4054,
                  "src": "128:21:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4039,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "128:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "127:23:21"
            },
            "returnParameters": {
              "id": 4046,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "187:0:21"
            },
            "scope": 4064,
            "src": "116:120:21",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              258
            ],
            "body": {
              "id": 4062,
              "nodeType": "Block",
              "src": "311:26:21",
              "statements": [
                {
                  "expression": {
                    "hexValue": "3130",
                    "id": 4060,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "328:2:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_10_by_1",
                      "typeString": "int_const 10"
                    },
                    "value": "10"
                  },
                  "functionReturnParameters": 4059,
                  "id": 4061,
                  "nodeType": "Return",
                  "src": "321:9:21"
                }
              ]
            },
            "functionSelector": "313ce567",
            "id": 4063,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "255:8:21",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 4056,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "286:8:21"
            },
            "parameters": {
              "id": 4055,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "263:2:21"
            },
            "returnParameters": {
              "id": 4059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4058,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4063,
                  "src": "304:5:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 4057,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "304:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "303:7:21"
            },
            "scope": 4064,
            "src": "246:91:21",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "scope": 4065,
        "src": "82:257:21",
        "usedErrors": []
      }
    ],
    "src": "0:339:21"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.13+commit.abaa5c0e.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x4C085A2119232324037D4dE2a491f3Eb80D7d256",
      "transactionHash": "0x2696530f2fe9f586bbcad4d480df0d304dd50655eec394607eacb49c7d4ee8f6"
    },
    "80001": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x5592e976d2eD0863d29a339F883B688ef57c37E8",
      "transactionHash": "0x3b4a59f5c0745a45894895a9af8fb3a2b7db9f209149c7d9b346d4bc1193dc38"
    }
  },
  "schemaVersion": "3.4.4",
  "updatedAt": "2022-05-04T14:08:36.486Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}