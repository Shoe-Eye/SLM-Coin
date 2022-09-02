## Описание

SLM Token (ERC20/BEP20) + NFT (ERC721) [1].

## Blockchain

- Token — ERC20 на Ethereum
- NFT — ERC721 (Burnable) на Polygon

## Контракты

См. `blockchain/deployment.json`

## Токеномика ERC20

- **Initial supply**: 1e18
- **Pre-Sale**: https://cookiesale.io/launchpad/0xFeAd8CFa1783C26F66Fa04c551D6434322843f2c?chain=ETH

## NFT Minting

Скрипты `blockchain/scripts/uploat_nft.js`

## Secrets

В директории `blockchain/secrets` plaintext-файлы с секретами для организации работы с blockchain

- `blockchain/secrets/matic-provider` — RPC Entpoint для Polygon
- `blockchain/secrets/mumbai-provider` — RPC Entpoint для Testnet Polygon
- `blockchain/secrets/metamask-phrase` — Phrase кошелька деплоера (владельца) контракта
- `blockchain/secrets/metamask-pk` — PK кошелька деплоера (владельца) контракта
- `blockchain/secrets/nftower` — Адрес владельца владельца NFT для минта

## De-Site

Децентрализованный сайт http://schizoverse.eth/
Source-code: `frontend`
